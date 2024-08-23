import Cabecalho from "./Components/Cabecalho/Cabecalho"
import Conteudo from "./Components/Conteudo/Conteudo";
import { Card } from "./types";


function App() {

  const pagina:string = "Exercicio - Aula 5"
  const cards: Card[]= [
    { id: 1,nome: "Aluno-1", rm: 20, avatar:  "FOTO AQUI"},
    { id: 2,nome: "Aluno-2", rm: 22, avatar:  "FOTO AQUI" },
    { id: 3,nome: "Aluno-3", rm: 23, avatar:  "FOTO AQUI" },
    { id: 4,nome: "Aluno-4", rm: 21, avatar:  "FOTO AQUI" },
    { id: 5,nome: "Aluno-5", rm: 27, avatar:  "FOTO AQUI" },
    { id: 6,nome: "Aluno-6", rm: 28, avatar:  "FOTO AQUI" },
    { id: 7,nome: "Aluno-7", rm: 29, avatar:  "FOTO AQUI" },
    { id: 8,nome: "Aluno-8", rm: 24, avatar:  "FOTO AQUI" },
    { id: 9,nome: "Aluno-9", rm: 25, avatar:  "FOTO AQUI" },
    { id: 10,nome: "Aluno-10",  rm: 26, avatar:  "FOTO AQUI" }
  ];
  
  

  return (
    <div>
      <Cabecalho paginaprops={pagina} />
      <Conteudo> 
        {cards.map(card =>
          <div key={card.id}>
            <p>{card.avatar}</p>
            {/* <img src={card.avatar} alt={`Avatar de ${card.nome}`} /> */}
            <p>{card.nome} - RM: {card.rm}</p>
          </div>
        )}
      </Conteudo>
  
    </div>
   
  )
}

export default App
