
<script setup>
    import {useGetData} from '@/composables/getData';
    import {RouterLink} from 'vue-router';

    const {data, getData, loading, error} = useGetData();

    getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
    <p v-if="loading">Cargando informacion...</p>    
    <div class="alert alert-danger mt-2" v-if="error"> {{ error }}</div>
    <div v-if="data" class="container-fluid ">
        <p class="display-3">Pokemones</p>    
        <ul class="list-group">
            <li v-for="pokemon in data.results" class="list-group-item">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    {{ pokemon.name }}
                </router-link>
            </li>
        </ul>
        <div class="mt-2">
            <button 
            :disabled="!data.previous" 
            class="btn btn-primary me-2" 
            @click="getData(data.previous)"> Anteriores
        </button>
        <button 
            :disabled="!data.next" 
            class="btn btn-primary me-2" 
            @click="getData(data.next)"> Siguientes
        </button>
        </div>
    </div>
</template>

<style>

</style>