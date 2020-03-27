<template>
    <table class="table table-bordered">
        <thead>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
        </thead>
        <tbody>
            <order-item v-for="item in order.food" :item="item"></order-item>
            <tr>
                <td>Total a pagar</td>
                <td>{{total}}</td>
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

    props: ['order', 'total'],
}
</script>