import CalculadoraIMC from "./components/calc"

import styles from './components/Calc.module.css';

function App() {

  return (
    <div className={styles.container}>
    <img src="https://www.fetalmed.net/wp-content/uploads/2022/10/Indice-de-Massa-Corporal-IMC-Segundo-OMS.png" />
    <h1>Calculadora de IMC</h1>
    < CalculadoraIMC />
    </div>
  )
}

export default App


// altura
// peso;
// 2) A partir dessas informações calcule o IMC;
// 3) Retorne o IMC e a classificação na tabela;
// 4) Em um novo repositório armazene o código da tarefa;
// 5) Envie o link do repositório através da plataforma.