<script setup>

</script>

<template>
<div id="building">
    <p class="display-1 mt-4">Bienvenidos</p>
</div>
</template>
<style scoped>
    #building{
        background:url("../assets/criaturas-pokemon.jpg");    
        width:100vw;			
        height:100%;			
        position:fixed;
        background-size:100% 100%;
        
    }

    p{
        animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
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
</style>

