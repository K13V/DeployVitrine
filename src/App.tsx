import { useRef, useState } from "react";

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="absolute top-4 right-4 flex flex-col items-center gap-2">
      <audio ref={audioRef} autoPlay loop>
        <source src="/EverythingIsInItsRightPlace.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleAudio}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
      >
        {playing ? "⏸️ Pause" : "▶️ Play"}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="flex-col min-h-screen bg-gray-900 text-white relative">
      {/* Vague en haut avec texte */}
      <div className="absolute top-0 left-0 w-full h-40 wave-top flex items-start justify-center pt-4">
        <h1 className="text-2xl font-bold">Wave Prod (nom test) 🌊🌌</h1>
      </div>

      {/* Contenu principal */}
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="mb-6 text-center">
        <p className="text-3xl"> Entreprises et particuliers pour qui j'ai composé : </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/badlands.png" className="w-1/5 h-auto" alt="badlands" />
        <p className="mt-3">Badlands</p>
      </div>
    </div>



      {/* Vague en bas avec menu centré */}
      <div className="absolute bottom-0 left-0 w-full h-40 wave-bottom flex flex-row items-end justify-center gap-15 pb-4">
        <a href="#accueil" className="hover:text-indigo-400 transition">Accueil</a>
        <a href="#apropos" className="hover:text-indigo-400 transition">À propos</a>
        <a href="#services" className="hover:text-indigo-400 transition">Services</a>
        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
      </div>

      {/* Player audio intégré */}
      <AudioPlayer />
    </div>
  );
}

export default App;
