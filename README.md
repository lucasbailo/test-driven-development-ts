## Welcome again to another TypeScript - TDD project! 👋

# Amigo Secreto (Similar to "Secret Santa")!

## Test the project yourself: [Teste the project here!!!](https://test-driven-development-ts.vercel.app/)

### Home Page

<img src="./public/HomePage.png" alt="Main page" width="50%">

## Draw lots page 

<img src="./public/sortPage.png" alt="Drag" width="50%">

## Draw lots results

<img src="./public/sortResult.png" alt="Filter" width="50%">

## Tests

<img src="./public/tests.png" alt="Debug" width="50%">


## Some code that I'm proud of
```js
export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})

export const resultadoDoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoDoAmigoSecreto',
    default: new Map()
})
```

## Built with

- `React`
- `React Hooks`
- `TypeScript`
- `Recoil`
- `Jest`


## You Can
- Add names to be drawn;
- Receive an alert if the name is duplicated;
- Draw the pairs and find out who each person's Secret Santa is.


## Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)