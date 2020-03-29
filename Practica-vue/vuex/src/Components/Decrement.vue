<template>
    <button class="btn btn-danger" @click="decrement">Disminuir</button>
</template>

<script>
import store from '../store'
export default {
    methods: {
        decrement() {
            store.commit('decrement')
        }
    }
}
</script>

<style>

</style>