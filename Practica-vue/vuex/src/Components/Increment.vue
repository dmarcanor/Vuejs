<template>
    <button class="btn btn-primary" @click="increment">Incrementar</button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: mapMutations(['increment'])
}
</script>

<style>

</style>