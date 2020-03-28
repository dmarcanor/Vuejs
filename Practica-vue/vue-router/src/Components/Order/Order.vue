<template>
    <div class="row mt-3">
        <div class="col">
            <h2>Orden</h2>
            <order-table :food="food" :total="total"></order-table>
            <router-link to="/mesa"><button class="btn btn-success">Ordenar</button></router-link>
        </div>
    </div>
</template>

<script>
import bus from '../Common/EventBus'
import OrderTable from './OrderTable'

export default {
    components: {
        'order-table': OrderTable
    },
    
    data() {
        return {
            food: []
        }
    },

    computed: {
        total() {
            var result=0
            this.food.forEach(element => result += (element.price * element.quantity))
            return result
        }
    },

    created() {
        bus.$emit('sendOrder', this.food)
    },

    updated() {
        bus.$emit('sendOrder', this.food)
    }
}
</script>