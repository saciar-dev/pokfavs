<script setup>
    import { useFavoritosStore } from '../store/favoritos';
    import VisorAbilidades from './VisorAbilidades.vue';
import VisorCaracteristicas from './VisorCaracteristicas.vue';
import VisorStats from './VisorStats.vue';

    const useFavoritos = useFavoritosStore();
    //destructurando el store
    const {addFavorito, findByName} = useFavoritos;

    const props = defineProps(['datos']);
</script>

<template>
    <div class="container">
        <div class="card border-0 mb-3 mt-3" style="max-width: 100%;">
            <div class="row g-0 align-items-center">
                <div class="col-md-4">
                    <img :src="datos.sprites.other['official-artwork']?.front_shiny" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6 ">
                    <div class="card-body ">
                        <p class="card-title display-3">{{ datos.name }}</p>
                        <div v-for="abilidad in props.datos.abilities" :key="abilidad.ability.slot">
                            <h5 class="card-text text-capitalize">{{ abilidad.ability.name }}</h5>
                            <VisorAbilidades 
                                :abilidad="abilidad.ability.url">
                            </VisorAbilidades>
                        </div>
                        
                        <button :disabled="findByName(datos.name)" class="btn btn-primary me-2" @click="addFavorito(datos)">Add to Favorites ❤</button>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <VisorCaracteristicas 
                        :peso="datos.weight"
                        :altura="datos.weight"
                        :tipos="datos.types">
                    </VisorCaracteristicas>                                               
                </div>
            </div>
            <VisorStats
                :stats = datos.stats>
            </VisorStats>
        </div>
    </div>
</template>