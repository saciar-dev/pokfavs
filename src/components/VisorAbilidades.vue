<script setup>
  import { useGetData } from '../composables/getData';

  const props = defineProps(['abilidad']);
  const { data, getData, loading, error } = useGetData();
  
  getData(props.abilidad);


</script>

<template>
    <p v-if="loading">Loading...</p>
    <div v-if="data" class="container-fluid ">
      <div v-for="ab in data.effect_entries">
        <p class="" v-if="ab.language.name == 'en'">{{ ab.effect}}</p>
      </div>
      
    </div>
    
</template>