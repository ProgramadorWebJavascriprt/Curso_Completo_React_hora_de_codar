// import HelloWorld from './components/helloworld';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import frase from './components/frase';


function App() {
//    const name = 'André Luis'
//    function soma(a, b) {
//     return a + b
//    }
   const url ='https://via.placeholder.com/150'
  return (
    <div className="App">
      <marquee>Estou estudando React com a hora de Codar</marquee>
      
      {/* <h1> Olá React!</h1>
      <h2> Alterando JSX...</h2>
      <p> Olá {name}</p>
      <p> soma: {soma(2, 3)}</p> */}
      {/* <img src={url} alt="minha imagem"/>
      <HelloWorld></HelloWorld> */}
      <SayMyName nome="Lucas"/>
      <SayMyName nome="Jean"/>
      <SayMyName nome="Luis"/>
      {/* <SayMyName nome={nome}/>  
         */}
         <h1>Curso Completo React JS</h1>
      <Pessoa nome="Andre Luis"
       idade= "40" 
       profissao="Programador Web" 
       foto='https://via.placeholder.com/150' />
       <frase/>
         <marquee>Estou estudando React com a hora de Codar</marquee>
           </div>
  );
}

export default App;
