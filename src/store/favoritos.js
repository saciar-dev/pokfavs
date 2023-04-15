import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useFavoritosStore = defineStore('favoritos', () =>{
    const favoritos = ref([]);

if(localStorage.getItem("favorito"))
    favoritos.value = JSON.parse(localStorage.getItem("favorito"));

    const addFavorito = (pokemon) => {
        
        favoritos.value.push(pokemon);
        localStorage.setItem('favorito', JSON.stringify(favoritos.value))
    } 

    const deleteFavorito = (id) =>{
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem('favorito', JSON.stringify(favoritos.value))
    }

    const findByName = (nombre) => {
        return favoritos.value.find((item) => item.name === nombre)
    }      

    return {
        favoritos,
        addFavorito,
        deleteFavorito,
        findByName
    }
})