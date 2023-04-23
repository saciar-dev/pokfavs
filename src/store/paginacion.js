import { defineStore } from "pinia";
import { ref } from "vue";


export const usePaginacionStore = defineStore('paginacion', () =>{
    const paginaActual = ref("");

    if(localStorage.getItem("paginaActual"))
        paginaActual.value = JSON.parse(localStorage.getItem("paginaActual"));

    const setPaginaActual = (actual) =>{
        paginaActual.value = actual;
        localStorage.setItem('paginaActual', JSON.stringify(paginaActual.value))
    }

    const setHome = () =>{
        paginaActual.value = 0;
        localStorage.setItem('paginaActual', JSON.stringify(paginaActual.value))
    }

    return {
        paginaActual,
        setPaginaActual,
        setHome
    }

})