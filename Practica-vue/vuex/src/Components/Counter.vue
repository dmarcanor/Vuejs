<template>
    <div>
        <h2>Contador: {{counter}} y multiplicado por 3 es: {{tripleCounter}}</h2>
        <increment/>
        <decrement/>
    </div>
</template>

<script>
import Increment from './Increment'
import Decrement from './Decrement'
import { mapState, mapGetters } from 'vuex'

export default {
    components: {
        Increment,
        Decrement
    },
    computed: {
        ...mapState(['counter']),
        ...mapGetters(['tripleCounter'])
    }
}
</script>

<style>

</style>