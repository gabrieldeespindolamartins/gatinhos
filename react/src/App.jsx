import './App.css'
import TextoDinamico from './componentes/textoDinamico'
import { useState } from 'react'

function App() {
  const frasesComImagens = [
    { frase: "z Z z Z z Z z Z z Z z Z z Z", imagem: "https://preview.redd.it/i3kbs827uog21.jpg?auto=webp&s=add6633e3ba49eaafb207c4f14e9eeb4633b50af" },
    { frase: "   An?!      ", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SQOOrgvDt4mTSrPODroMK6XygD_oE0XN3Q&s" },
    { frase: "tuk TUK tuk TUk tuk TUK", imagem: "https://media.tenor.com/6c7jC9oX6LkAAAAM/cat-walking-cat.gif" },
    { frase: " SNIF SNIF     ", imagem: "https://pbs.twimg.com/media/FiXkb6yWAAAxQE3.jpg:large" },
    { frase: "   Uhhh!!!    ", imagem: "https://ocp.news/wp-content/uploads/2024/05/19f1ca66-bdd2-4089-8bd5-90e6859fc852-scaled.jpg" },
    { frase: "Algm ta fedendo ein!?", imagem: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img648efbd5b00b28.10275519.jpg?lastEdited=1687092187&w=600&h=600&f=webp" },
    { frase: "Eca! é vc!", imagem: "https://www.edicaoms.com.br/uploads/images/noticias/bb5676832af1257abc8df01a9af423d0.jpg" },
    { frase: "Vc tem que fica chelosa!", imagem: "https://i.pinimg.com/236x/df/d6/e6/dfd6e6ecc75e2740ed61594f47085c2f.jpg"},
    { frase: "Toma         ", imagem: "https://i.pinimg.com/736x/4e/0c/77/4e0c77f04c1a2c17153e491605f52c05.jpg"},
    { frase: "         muack", imagem: "https://i.redd.it/zoaywh31gya81.gif"},
  ]; // Array de frases e imagens

  const [currentIndex, setCurrentIndex] = useState(0); // Índice da frase atual

  const handleNext = () => {
    if (currentIndex < frasesComImagens.length - 1) {
      setCurrentIndex(currentIndex + 1); // Incrementa o índice para exibir a próxima frase
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw', // Certifica que o fundo cobre toda a largura
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom,rgb(252, 161, 86),rgb(255, 231, 208),rgb(238, 174, 101))', // Fundo gradiente
      }}
      onClick={handleNext} // Adiciona evento de clique para avançar
    >
      <div className="text-center">
        <TextoDinamico
          text={frasesComImagens[currentIndex].frase} // Exibe a frase atual com base no índice
          speed={60}
        />
      </div>
      <img
        src={frasesComImagens[currentIndex].imagem} // Exibe a imagem correspondente à frase
        alt={`Imagem da frase ${currentIndex + 1}`}
        className="mt-4 max-w-xs h-auto object-contain shadow-lg" // Adiciona box shadow
        style={{ boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.4)' }} // Estilo de sombra
      />
      {currentIndex === 0 ? ( // Exibe o texto apenas no primeiro slide
        <p className="mt-4 text-gray-500 text-sm">Clique na imagem para avançar</p>
      ) : null}
    </div>
  );
}

export default App;