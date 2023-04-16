<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useGetData } from '../composables/getData';
    import VisorImagen from '../components/VisorImagen.vue';

    const router = useRouter();
    const back = () => {
        router.push("/pokemons");
    }

    const { data, getData, loading, error } = useGetData();

    const route = useRoute();
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.unPokemon}`);
    
</script>

<template>
    <p v-if="loading">Cargando informacion...</p>
    <div class="alert alert-danger mt-2" v-if="error"> {{ error }}</div>
    <div v-if="data" class="container-fluid ">
        <VisorImagen
            :datos="data">
        </VisorImagen>
    </div>
    <button @click="back" class="btn btn-danger">volver</button>
    
</template>