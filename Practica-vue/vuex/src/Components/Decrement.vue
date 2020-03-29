<template>
    <button class="btn btn-danger" @click="decrement">Disminuir</button>
</template>

<script>
export default {
    methods: {
        decrement() {
            this.$store.commit('decrement')
        }
    }
}
</script>

<style>

</style>