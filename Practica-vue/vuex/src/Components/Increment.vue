<template>
    <button class="btn btn-primary" @click="increment">Incrementar</button>
</template>

<script>
export default {
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    }
}
</script>

<style>

</style>