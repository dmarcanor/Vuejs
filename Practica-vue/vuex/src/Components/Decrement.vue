<template>
    <button class="btn btn-danger" @click="decrement">Disminuir</button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: mapMutations(['decrement'])
}
</script>

<style>

</style>