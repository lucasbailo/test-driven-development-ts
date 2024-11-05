import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaParticipantes";
import './Rodape.css'
import { useSorteador } from "../../state/hooks/useSorteador";

const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const inicar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (
        <footer className="rodape-configuracoes">
            <button className="botao" onClick={inicar} disabled={participantes.length < 3}>Iniciar Brincadeira</button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}

export default Rodape;