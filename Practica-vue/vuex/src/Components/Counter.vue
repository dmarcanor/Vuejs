<template>
    <div>
        <h2>Contador: {{counter}}</h2>
        <increment/>
        <decrement/>
    </div>
</template>

<script>
import store from '../store'
import Increment from './Increment'
import Decrement from './Decrement'

export default {
    components: {
        'increment': Increment,
        Decrement
    },
    computed: {
        counter() {
            return store.state.counter
        }
    }
}
</script>

<style>

</style>