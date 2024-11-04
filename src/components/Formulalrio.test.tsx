import { screen, render, fireEvent, act } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";


describe('Comportamento do Formulário.tsx', () => {

    test('Quando o input está vazio, novos participantes não podem ser adicionador', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })

    test('Adicionar um participante caso tenha um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Ana Castela'
            }
        })

        fireEvent.click(botao)

        expect(input).toHaveFocus()
        expect(input).toHaveValue("")
    })

    test('Nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Ana Castela'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'Ana Castela'
            }
        })
        fireEvent.click(botao)

        const mensagemDeErro = screen.getByRole('alert')

        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos')
    })

    test('A mensagem de erro deve sumir após os timers', () => {

        jest.useFakeTimers()

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Ana Castela'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'Ana Castela'
            }
        })
        fireEvent.click(botao)
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        });


        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })

})
