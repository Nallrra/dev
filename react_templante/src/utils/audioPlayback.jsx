// src/utils/audioPlayback.js
const playAudio = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };
  
  export default playAudio;