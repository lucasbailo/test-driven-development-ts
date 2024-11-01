import React from "react";
import { screen, render } from "@testing-library/react";
import Formulario from "./Formulario";

test('Quando o input está vazio, novos participantes não podem ser adicionador', () => {
    render(<Formulario />)
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(botao).toBeDisabled()
})