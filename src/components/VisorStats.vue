<script setup>
const props = defineProps(['stats']);
</script>

<template>
    <div class="row ">
        <table class="table table-sm">
            <tbody>
                <tr v-for="stat in stats" :key="stat.slot">
                    <td class="text-capitalize text-start">
                        {{ stat.stat.name }}
                    </td>
                    <td>
                        {{ stat.base_stat }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>