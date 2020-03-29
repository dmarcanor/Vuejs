<template>
    <button class="btn btn-primary" @click="increment">Incrementar</button>
</template>

<script>
import store from '../store'
export default {
    methods: {
        increment() {
            store.commit('increment')
        }
    }
}
</script>

<style>

</style>