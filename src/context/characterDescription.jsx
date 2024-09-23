import { create } from 'zustand'

const characterDescription = create((set) => ({ // CharacterDescription es el nombre del componente que se vuelve global y UpdateCharacters (método)
    characters: [],


    //Metodo que actualiza characters
    updateCharacters: (newCharacters) => set ({ characters: newCharacters}),
}));



export default characterDescription;