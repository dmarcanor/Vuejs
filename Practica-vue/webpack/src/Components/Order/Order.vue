<template>
    <div class="row">
        <div class="col">
            <h2>Orden</h2>
            <order-table :order="order" :total="total"></order-table>
            <button class="btn btn-success" @click.prevent="submitOrder()">Ordenar</button>
        </div>
    </div>
</template>

<script>
import OrderTable from './OrderTable'
import bus from '../Common/EventBus'

export default {
    components: {
        'order-table': OrderTable
    },

    data() {
        return {
            order: {
                food: []
            }
        }
    },

    computed: {
        total() {
            var result=0
            this.order.food.forEach(element => result += (element.price * element.quantity))
            return result
        }
    },

    created() {
        bus.$emit('sendOrder', this.order)
    },

    methods: {
        submitOrder(){
            alert("Orden enviada")
            this.order.food = []
        }
    }
}
</script>