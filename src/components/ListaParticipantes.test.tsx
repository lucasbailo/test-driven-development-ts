import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaDeParticipantes } from "../state/hooks/useListaParticipantes";

jest.mock('../state/hooks/useListaParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Uma lista vazia de participantes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('Deve renderizar uma lista sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('Uma lista preenchida de participantes', () => {

    const participantes = ['Ana', 'Castela']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('Deve renderizar uma lista sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})