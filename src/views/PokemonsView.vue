
<script setup>
    import {useGetData} from '@/composables/getData';
    import {usePaginacionStore} from '../store/paginacion.js';
    import {RouterLink, useRouter} from 'vue-router';

    const usePaginacion = usePaginacionStore();
    const {paginaActual, setPaginaActual, setHome} = usePaginacion;

    const {data, getData, loading, error} = useGetData();

    if(paginaActual)
        getData(paginaActual)
    else getData('https://pokeapi.co/api/v2/pokemon');

    const router = useRouter();

    function goTo(poke){
        router.push(`/pokemons/${poke}`);
    }

    function paginar(url){
        getData(url);
        setPaginaActual(url);
    }
</script>

<template>
    <p v-if="loading">Cargando informacion...</p>
    <div class="alert alert-danger mt-2" v-if="error"> {{ error }}</div>
    <div v-if="data" class="container-fluid ">
        <p class="display-3">Pokemons</p>
        <div class="row justify-content-center ">
            <div class="col-9">
                <div class="row mb-4 display-6">Search</div>
                <div class="row g-3 align-items-center border mb-4 pb-4 rounded-top ">
                    <div class="col-auto">
                        <label for="inputNombre" class="col-form-label">For name or Id</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" id="inputNombre" class="form-control" aria-labelledby="passwordHelpInline" v-model="filtro">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-success " @click="goTo(filtro)">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9">
                <ul class="list-group list-group-flush ">
                    <li v-for="pokemon in data.results" class="list-group-item ">
                        <router-link class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover me-2" :to="`/pokemons/${pokemon.name}`">
                            {{ pokemon.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="mt-2">
                <button :disabled="!data.previous" class="btn btn-primary me-2" @click="paginar(data.previous)"> Anteriores
                </button>
                <button :disabled="!data.next" class="btn btn-primary me-2" @click="paginar(data.next)"> Siguientes
                </button>
            </div>
        </div>
    </div>
</template>
