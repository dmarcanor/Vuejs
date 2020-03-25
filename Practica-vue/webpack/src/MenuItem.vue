<template>
    <li v-on:click="add(item)">
        Nombre: <a>{{item.foodName}}</a> / Precio: {{item.price}}
    </li>
</template>

<script>
export default{
    props: ['item'],
    methods: {
        add: function(item){
            this.$emit('add', item)
        }
    }
}
</script>