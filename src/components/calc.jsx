import { useState } from "react"

import styles from './Calc.module.css';

const CalculadoraIMC = () => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [nome, setNome] = useState(0);
    let [IMC] = useState(0);

    const resultado = () => {
        const somaAltura = valor1 * valor1;
        const soma = valor2 / somaAltura;
        IMC = soma.toFixed(1)

        console.log(somaAltura)
        console.log(soma)
        console.log(IMC)

        if (soma <= 18.5) {
            return (
                <>
                    <h2> O seu IMC é: {IMC}</h2>
                    <p>{nome}, está abaixo do peso correto para sua altura</p>
                </>
            )
        }
        if (soma <= 24.9) {
            return (
                <>
                <h2> O seu IMC é: {IMC}</h2>
                <p>{nome}, está com o pesso ideal, parabêns</p>
                </>
            )
        }
        if (soma <= 29.9) {
            return (
                <>
                <h2> O seu IMC é: {IMC}</h2>
                <p>{nome}, Você está com SOBREPESO, está na hora de começar a se cuidar.</p>
                </>
            )
        }
        if (soma <= 34.9) {
            return (
                <>
                <h2> O seu IMC é: {IMC}</h2>
                <p>{nome}, está entrando na obesidade 1, muito cuidado.</p>
                </>
            )
        }
        if (soma <= 39.9) {
            return (
                <>
                <h2> O seu IMC é: {IMC}</h2>
                <p>{nome}, está na Obesidade 2, procure ajuda Já.</p>
                </>
            )
        }

        if (soma >= 40) {
            return (
                <>
                <h2> O seu IMC é: {IMC}</h2>
                <p>{nome}, está na Obesidade 2, procure ajuda Já.</p>
                </>
            )
        }
    };

    return (
        <form className={styles.container}>
            <input className={styles.txtbox} type="text" placeholder="Digite seu nome:" onChange={evento => setNome(evento.target.value)} />
            <input className={styles.txtbox} type="number" placeholder="Digite sua altura em metro" onChange={evento => setValor1(parseFloat(evento.target.value))} />
            <input className={styles.txtbox} type="number" placeholder="Digite o seu peso em quilos" onChange={evento => setValor2(parseFloat(evento.target.value))} />
            <>

                {resultado()}
            </>
        </form>
    )
}
export default CalculadoraIMC