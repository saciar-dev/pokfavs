<script setup>
const props = defineProps(['peso', 'altura','tipos']);
</script>

<template>
    <table class="table table-striped ">
        <tbody>
            <tr>
                <td>
                    Weight
                </td>
                <td>
                    {{ peso / 10 }} Kgs.
                </td>
            </tr>
            <tr>
                <td>
                    Height
                </td>
                <td>
                    {{ altura/ 10 }} Mts.
                </td>
            </tr>
        </tbody>
    </table>
    <div v-for="tipo in tipos">
        <div v-if="tipo.type.name === 'grass'" class="text-bg-primary p-3"> GRASS</div>

    </div>
</template>

<style>
    .grass{
        background-color: #09ff00;
    }
</style>