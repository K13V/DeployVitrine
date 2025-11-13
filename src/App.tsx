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

function BottomWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40 wave-bottom z-0">
      {/* Ici ta vague est dessinée via CSS (background ou SVG) */}
    </div>
  );
}

function BottomMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-4 left-0 w-full flex items-center justify-center z-20">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="px-10 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-500 transition flex items-center gap-2"
        >
          Menu {open ? "▲" : "▼"}
        </button>

      <div
          className={`absolute bottom-full mb-2 flex flex-col  items-center bg-gray-800 text-white rounded shadow-lg p-10 gap-3 transform transition-all duration-300 origin-bottom ${
            open ? "scale-y-100 opacity-90" : "scale-y-0 opacity-0"
          }`}
          role="menu"
        >
          <a href="#apropos" className="hover:text-indigo-400 transition">About</a>
          <a href="#services" className="hover:text-indigo-400 transition">Services</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </div>
      </div>
    </div>
  );
}





function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white relative">
      {/* Vague en haut avec texte */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 md:h-40 wave-top flex items-start justify-center pt-4">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">
          Wave Prod (nom test) 🌊🌌
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col items-center justify-center h-screen gap-6 px-4">
        <div className="mb-6 text-center">
          <p className="text-base sm:text-xl md:text-3xl">
            Entreprises et particuliers pour qui j&apos;ai composé :
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/badlands.png"
            className="w-2/3 sm:w-1/3 md:w-1/5 h-auto"
            alt="badlands"
          />
          <p className="mt-3 text-sm sm:text-base md:text-lg">Badlands</p>
        </div>
      </div>
      <BottomWave /> 
      <BottomMenu />

      {/* Player audio intégré */}
      <AudioPlayer />
    </div>
  );
}

export default App;
