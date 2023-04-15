<script setup>
    import { storeToRefs } from 'pinia';
    import { useFavoritosStore } from '../store/favoritos';
    import { RouterLink} from 'vue-router';

    const useFavoritos = useFavoritosStore();

    const {favoritos} = storeToRefs(useFavoritos);
    const {deleteFavorito} = useFavoritos
</script>

<template>
    <div class="container-fluid">
        <h1 class="display-3">Favoritos</h1>
        <ul class="list-group">
            <p v-if="favoritos.length == 0">No hay favoritos</p>
            <li v-else class="list-group-item d-flex justify-content-between" v-for="poke in favoritos" :key="poke.id">
                <span><img :src="poke.sprites?.front_default" alt=""></span>
                <h5 class="align-self-center">{{ poke.name }}</h5>
                <span class="align-self-center">
                    <router-link class="btn btn-sm btn-primary me-2" :to="`/pokemons/${poke.name}`">Mas info</router-link>
                    <button class="btn btn-sm btn-danger" @click="deleteFavorito(poke.id)">Eliminar</button>
                </span>
                
            </li>
        </ul>
    </div>  
</template>
