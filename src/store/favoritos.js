import {defineStore} from 'pinia';
import { ref } from 'vue';
import Swal from 'sweetalert2';

export const useFavoritosStore = defineStore('favoritos', () =>{
    const favoritos = ref([]);

if(localStorage.getItem("favorito"))
    favoritos.value = JSON.parse(localStorage.getItem("favorito"));

    const addFavorito = (pokemon) => {
        
        favoritos.value.push(pokemon);
        localStorage.setItem('favorito', JSON.stringify(favoritos.value))
    } 

    const deleteFavorito = (id) =>{       

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              favoritos.value = favoritos.value.filter(item => item.id !== id)
              localStorage.setItem('favorito', JSON.stringify(favoritos.value))
              Swal.fire(
                'Deleted!',
                'The pokemon has been deleted of yours favorite.',
                'success'
              )
            }
          })
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