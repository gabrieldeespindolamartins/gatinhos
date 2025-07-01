import './App.css'
import TextoDinamico from './componentes/textoDinamico'
import { useState } from 'react'

function App() {
  const frases = [
    ". . . . . . . . . . . .",
    "An?!",
    ". . . . ",
    "Snif Snif",
    "Uhhh!!!",
    "Vc ta fedendo ein!",
  ]; // Array de frases
  const [currentIndex, setCurrentIndex] = useState(0); // Índice da frase atual

  const handleTextComplete = () => {
    // Define um delay antes de exibir a próxima frase
    setTimeout(() => {
      if (currentIndex < frases.length - 1) {
        setCurrentIndex(currentIndex + 1); // Incrementa o índice para exibir a próxima frase
      }
    }, 1000); // 1000ms = 1 segundos
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <TextoDinamico
        text={frases[currentIndex]} // Exibe a frase atual com base no índice
        speed={60}
        onComplete={handleTextComplete} // Chama quando a frase termina
      />
    </div>
  );
}

export default App;