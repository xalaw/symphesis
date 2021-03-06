
function convertToDetune(note) {
  const conversionTable = {
    "hihat2": "pearlkit-hihat.wav",
    "hihat1": "pearlkit-hihatO.wav",
    "hitom1": "pearlkit-hitom1.wav",
    "hitom2": "pearlkit-hitom2.wav",
    "kick": "pearlkit-kick.wav",
    "lowtom1": "pearlkit-lowtom1.wav",
    "lowtom2": "pearlkit-lowtom2.wav",
    "ride1": "pearlkit-ride1.wav",
    "ride2": "pearlkit-ride2.wav",
    "ridebell": "pearlkit-ridebell.wav",
    "ridecrash": "pearlkit-ridecrash.wav",
    "snare1": "pearlkit-snare1.wav",
    "snare2": "pearlkit-snare2.wav",
    "snareroll": "pearlkit-snareroll.wav",
    "A": "cleanchord-A.mp3",
    "A7": "cleanchord-A7.mp3",
    "Am": "cleanchord-Am.mp3",
    "B": "cleanchord-B.mp3",
    "B7": "cleanchord-B7.mp3",
    "Bm": "cleanchord-Bm.mp3",
    "C": "cleanchord-C.mp3",
    "C7": "cleanchord-C7.mp3",
    "Cm": "cleanchord-Cm.mp3",
    "D": "cleanchord-D.mp3",
    "D7": "cleanchord-D7.mp3",
    "Dm": "cleanchord-Dm.mp3",
    "E": "cleanchord-E.mp3",
    "E7": "cleanchord-E7.mp3",
    "Em": "cleanchord-Em.mp3",
    "F": "cleanchord-F.mp3",
    "F7": "cleanchord-F7.mp3",
    "Fm": "cleanchord-Fm.mp3",
    "G": "cleanchord-G.mp3",
    "G7": "cleanchord-G7.mp3",
    "Gm": "cleanchord-Gm.mp3",
    "C1": "1C1.wav",
    "C#1": "2C1S.wav",
    "D1": "3D1.wav",
    "D#1": "4D1S.wav",
    "E1": "5E1.wav",
    "F1": "6F1.wav",
    "F#1": "7F1S.wav",
    "G1": "8G1.wav",
    "G#1": "9G1S.wav",
    "A2": "A2.wav",
    "A#2": "A2S.wav",
    "B2": "B2.wav",
    "C2": "C2.wav",
    "C#2": "C2S.wav",
    "D2": "D2.wav",
    "D#2": "D2S.wav",
    "E2": "E2.wav",
    "F2": "F2.wav",
    "F#2": "F2S.wav",
    "G2": "G2.wav",
    'C3': -2100,
    'C#3': -2000,
    'D3': -1900,
    'D#3': -1800,
    'E3': -1700,
    'F3': -1600,
    'F#3': -1500,
    'G3': -1400,
    'G#3': -1300,
    'A3': -1200,
    'A#3': -1100,
    'B3': -1000,
    'C4': -900,
    'C#4': -800,
    'D4': -700,
    'D#4': -600,
    'E4': -500,
    'F4': -400,
    'F#4': -300,
    'G4': -200,
    'G#4': -100,
    'A4': 0,
    'A#4': 100,
    'B4': 200,
    space: '133_sample-and-hold-robot.mp3',
    count: 'ah-one_two_three_fo!.mp3',
    baby: 'baby_baby_baybeh.mp3',
    evil: 'evil.wav',
    ftbb: "follow_the_bouncing_bass.mp3",
    hrd: 'hazardous-radiation-detected.wav',
    houston: 'houston-psycho-ravers-robot.wav',
    igtbf: 'its_gotstobe_funky.mp3',
    hot: 'its_hot.mp3',
    ltbk: 'let-the-bass-kick.mp3',
    nnn: 'n-n-n-n-n-no.mp3',
    hand: 'place_hand_on_keyboard.mp3',
    rtcw: 'relclaim-the-computer-world.mp3',
    scream: 'somebody-scream.mp3',
    subway: 'subway-please-stand-clear.wav',
    ttb: 'thats-the-bassline.wav',
    up: 'voice_get_up.mp3',
    wneic: 'we-need-expert-in-computers.mp3'
  }
  return conversionTable[note]
}

export default convertToDetune