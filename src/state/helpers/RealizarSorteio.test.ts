import { realizarSorteio } from "./realizarSorteio"

describe('Num dado sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Mario',
            'Luigi',
            'Yoshi',
            'Peach',
            'Browser',
            'Wario'
        ]
        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        }) 
    })
})