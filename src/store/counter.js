import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStorage = defineStore('counter', () =>{
    const count = ref(0);

    const increment = () => count.value++;

    const doble = computed(() => count.value * 2);

    return { count, increment, doble}
})