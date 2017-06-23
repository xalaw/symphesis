import React from 'react'
import { connect } from 'react-redux'
import { setIsPlaying, setNotPlaying, sendRecording, requestToRecord, mute, trashRecording, changeInstrument } from './actions';
import './index.css'
import Keyboard from '../keyboard';
import Drums from '../drums';
import ElectricGuitar from '../electric-guitar';
import BassSynth from '../bass-synth'
import Mic from '../mic';

class AudioWrapper extends React.Component {
  // componentWillMount() {
  //   this.audioContext = new AudioContext()
  //   let timerID = 0
  // }

  componentDidMount () {
    this.play();
  }

  componentWillUnmount() {
    this.stop();
  }

  play() {
    this.props.dispatch(setIsPlaying(this.props.bpm, this.props.timeSignature))
  }

  stop() {
    this.props.dispatch(setNotPlaying())
  }

  sendRecording () {
    this.props.dispatch(sendRecording(this.props.room))
  }

  mute (user) {
    let newObj = {...this.props.muted};
    newObj[user] = !newObj[user];
    this.props.dispatch(mute(newObj));
  }

  render() {
    let roommates = [];
    Object.keys(this.props.roommates).forEach((user) => {
      if (this.props.roommates[user].displayName) {
        let muteButtonText = (this.props.muted[user]) ? 
          "Unmute" : 
          "Mute";
        let muteText = (this.props.muted[user]) ? 
          "(Muted)" : 
          null;
        let thatsYou = (this.props.displayName === this.props.roommates[user].displayName) ? 
          "(that's you!)" :
          null;
        roommates.push(
          <li key={user}>{this.props.roommates[user].displayName} {thatsYou} {muteText}
            <button onClick={() => this.mute(user)}>{muteButtonText}</button>
          </li>
        )
      }
    })

    let sendRecording = (this.props.enableSendRecording) ? 
      (<button onClick={() => this.sendRecording()}>send recording</button>) :
      null;

    let instrument;
    switch (this.props.instrument) {
      case "keyboard": 
        instrument = <Keyboard />;
        break;
      case "drums": 
        instrument = <Drums />;
        break;
      case "electric-guitar":
        instrument = <ElectricGuitar />;
        break;
      case "mic":
        instrument = <Mic />;
        break;
      case "bass-synth":
        instrument = <BassSynth />;
        break;
    }
    return (
      <div>
        {sendRecording}
        <div className="transport">        
          <div className="play-button" onClick={() => this.play()}> play </div>
          <div className="stop-button" onClick={() => this.stop()}> stop </div>
        </div>
        <div className="instrument-container">
          <p>{this.props.recordingMessage}</p>
          <select className="instrument-select" onChange={(e) => {
            this.props.dispatch(changeInstrument(e.target.value))
          }}>
            <option value="electric-guitar"> 🎸 Electric Guitar</option>
            <option value="keyboard">🎹 Keyboard</option>
            <option value="drums">🥁 Drums</option>
            <option value="mic">🎤 Mic</option>
            <option value="bass-synth">🎹 Bass Synth</option>
          </select>        
          {instrument}
          <button onClick={() => this.props.dispatch(requestToRecord())}>
            record
          </button>
          <button onClick={() => this.props.dispatch(trashRecording())}>
            undo
          </button> 
        </div>
        <div className="users">       
          <p>Roommates</p>
          <ul>{roommates}</ul>   
        </div>     
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    isPlaying: state.audioWrapper.isPlaying,
    bpm: state.audioWrapper.bpm,
    timeSignature: state.audioWrapper.timeSignature,
    room: state.socketWrapper.room,
    displayName: state.socketWrapper.displayName,
    roommates: state.audioWrapper.roommates,
    recording: state.audioWrapper.recording,
    recordingMessage: state.audioWrapper.recordingMessage,
    enableSendRecording: state.audioWrapper.enableSendRecording,
    muted: state.audioWrapper.muted,
    instrument: state.audioWrapper.instrument
  }
}

export default connect(mapStateToProps)(AudioWrapper)