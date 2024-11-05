import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";
import "./Formulario.css";

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <form action="" onSubmit={adicionarParticipante}>
            <div className="grupo-input-btn">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <button disabled={!nome}>Adicionar</button>
                {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
            </div>

        </form>
    )
}
export default Formulario;