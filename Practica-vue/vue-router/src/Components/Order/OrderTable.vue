<template>
    <table class="table table-bordered">
        <thead>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
        </thead>
        <tbody>
            <order-item v-for="item in food" :item="item"></order-item>
        </tbody>
        <tfoot style="font-weight: bold">
            <td>Total a pagar</td>
            <td>{{total}}</td>
        </tfoot>
    </table>
</template>

<script>
import OrderItem from './OrderItem'

export default{
    components: {
        'order-item': OrderItem
    },

    props: ['food', 'total'],
}
</script>