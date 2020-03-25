<template>
    <table class="table table-bordered">
        <thead>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
        </thead>
        <tbody>
            <tr is="order-item" v-for="item in order.food" :item="item"></tr>
            <tr>
                <td>Total a pagar</td>
                <td>{{getTotal()}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import OrderItem from './OrderItem'
export default{
    components: {
        'order-item': OrderItem
    },
    props: ['order'],
    methods: {
        getTotal: function(){
            var total=0
    
            this.order.food.forEach(element => {
                total += (element.price * element.quantity)
            });
    
            return total;
        }
    }
}
</script>