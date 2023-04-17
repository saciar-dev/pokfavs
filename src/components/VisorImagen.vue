<script setup>
    import { useFavoritosStore } from '../store/favoritos';
import VisorAbilidades from './VisorAbilidades.vue';

    const useFavoritos = useFavoritosStore();
    //destructurando el store
    const {addFavorito, findByName} = useFavoritos;

    const props = defineProps(['datos']);

    // console.log(props.datos.abilities[0].ability);

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
                        
                        <button :disabled="findByName(datos.name)" class="btn btn-primary me-2" @click="addFavorito(datos)">Agregar a Favoritos</button>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <table class="table table-striped ">
                        <tbody>
                            <tr>
                                <td>
                                    Weight
                                </td>
                                <td>
                                    {{ datos.weight/ 10  }} Kgs.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Height
                                </td>
                                <td>
                                    {{ datos.height / 10 }} Mts.
                                </td>
                            </tr>
                        </tbody>
                    </table>                     
                </div>
            </div>
            <div class="row">
                <table class="table table-sm">
                        <tbody>
                            <tr v-for="stat in datos.stats">
                                <td class="text-capitalize text-start">
                                    {{ stat.stat.name  }}
                                </td>
                                <td>
                                    {{ stat.base_stat  }} 
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
</template>