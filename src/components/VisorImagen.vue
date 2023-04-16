<script setup>
    import { useFavoritosStore } from '../store/favoritos';
    import { useGetData } from '../composables/getData';
    import { useRoute} from 'vue-router';

    const useFavoritos = useFavoritosStore();
    //destructurando el store
    const {addFavorito, findByName} = useFavoritos;

    const props = defineProps(['datos']);

    console.log(props.datos.abilities[0].ability);

</script>

<template>
    <div class="container">
        <div class="card border-0 mb-3 mt-3" style="max-width: 100%;">
            <div class="row g-0 align-items-center">
                <div class="col-md-4">
                    <img :src="datos.sprites.other['official-artwork']?.front_shiny" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8 ">
                    <div class="card-body ">
                        <h2 class="card-title">{{ datos.name }}</h2>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button :disabled="findByName(datos.name)" class="btn btn-primary me-2" @click="addFavorito(datos)">Agregar a Favoritos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>