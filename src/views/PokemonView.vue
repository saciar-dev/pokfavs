<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useGetData } from '../composables/getData';
    import { useFavoritosStore } from '../store/favoritos';

    const route = useRoute();
    const router = useRouter();

    const useFavoritos = useFavoritosStore();
    //destructurando el store
    const {addFavorito, findByName} = useFavoritos;

    const poke = ref({});

    const back = () => {
        router.push("/pokemons");
    }

    const { data, getData, loading, error } = useGetData();

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.unPokemon}`);
    
</script>

<template>
    <p v-if="loading">Cargando informacion...</p>
    <div class="alert alert-danger mt-2" v-if="error"> {{ error }}</div>
    <div v-if="data" class="container-fluid ">
        <div class="row justify-content-center">
            <div class="col-10">
                <img :src="data.sprites.other['official-artwork']?.front_shiny" alt="">
            </div>
            <div class="col align-self-center">
                <table class="table ">
                <tbody>
                    <tr>
                        <td>Altura</td>
                        <td>{{ data.height }}</td>
                    </tr>
                    <tr>
                        <td>Peso</td>
                        <td>{{ data.weight }}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9">
                <h1 class="display-1">{{ $route.params.unPokemon }}</h1>        
                <button :disabled="findByName(data.name)" class="btn btn-primary mb-2" @click="addFavorito(data)">Agregar a Favoritos</button>
            </div>
        </div>
        
    </div>
    <button @click="back" class="btn btn-outline-primary">volver</button>
    
</template>