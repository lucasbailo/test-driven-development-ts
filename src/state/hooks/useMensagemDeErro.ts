import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMensagemDeErro = () => {
    const mensasagem = useRecoilValue(erroState)
    return mensasagem
}