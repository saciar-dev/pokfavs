<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
    const back = () => {
        router.push("/pokemons");
        
    }

</script>

<template>
    <div class="container text-center">
        <div class="row align-items-center mb-5 mt-5 pt-5">
            <img src="@/assets/pokemon_logo.svg" alt="Logo" width="100" height="320" class="d-inline-block align-text-top">
        </div> 
        <div class="row align-items-center mb-5">
            <h1 class="">Error 404. Not Found</h1>
        </div>
        <div class="row align-items-center">
            <div class="col-12">
                <button class="btn btn-dark fs-1" @click="back">Home</button>
            </div>
        </div>              
    </div>
</template>