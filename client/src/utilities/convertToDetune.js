function convertToDetune(note){
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
    'C3': -2000,
    'C#3': -1900,
    'D3': -1800,
    'D#3': -1700,
    'E3': -1600,
    'F3': -1500,
    'F#3': -1400,
    'G3': -1300,
    'G#3': -1200,
    'C4': -800,
    'C#4': -700,
    'D4': -600,
    'D#4': -500,
    'E4': -400,
    'F4': -300,
    'F#4': -200,
    'G4': -100,    
    'A4': 0,
    'A#4': 100,
    'B4': 200
  }
  return conversionTable[note]
}

export default convertToDetune