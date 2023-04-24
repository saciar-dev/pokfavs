<script setup>

</script>

<template>
<!-- <div id="building">
    <p class="display-1 mt-4">Bienvenidos</p>
</div> -->
<div class="container">
  <div class="row align-items-center mb-5 mt-5 pt-5">
    <div class="col-12">
      <img src="@/assets/pokemon_logo.svg" alt="Logo" class="d-inline-block align-text-top">
    </div>
  </div>
  <div class="row align-items-center">
      <div class="col-12">
          <RouterLink class="btn btn-dark fs-4" @click="back" to="/pokemons">Pokemons List</RouterLink>
      </div>
  </div>        
</div>
</template>
<style scoped>

    img{
      width: 50%;
      animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    }

    .btn{
      animation: bounce-in-left 1.1s 1.1s both;
    }

    @keyframes puff-in-center {
      0% {
        transform: scale(2);
        filter: blur(4px);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        filter: blur(0px);
        opacity: 1;
      }
    }
    @keyframes bounce-in-left {
      0% {
        transform: translateX(-600px);
        animation-timing-function: ease-in;
        opacity: 0;
      }
      38% {
        transform: translateX(0);
        animation-timing-function: ease-out;
        opacity: 1;
      }
      55% {
        transform: translateX(-68px);
        animation-timing-function: ease-in;
      }
      72% {
        transform: translateX(0);
        animation-timing-function: ease-out;
      }
      81% {
        transform: translateX(-28px);
        animation-timing-function: ease-in;
      }
      90% {
        transform: translateX(0);
        animation-timing-function: ease-out;
      }
      95% {
        transform: translateX(-8px);
        animation-timing-function: ease-in;
      }
      100% {
        transform: translateX(0);
        animation-timing-function: ease-out;
      }
    }

/*Media query*/

/* @media (max-width: 768px) {
  button{
    width: 200px;
  }
} */
</style>

