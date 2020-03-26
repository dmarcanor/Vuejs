<template>
    <li v-on:click="select(item)">
        Nombre: <a>{{item.foodName}}</a> / Precio: {{item.price}}
    </li>
</template>

<script>
export default{
    props: ['item'],
    methods: {
        select: function(item){
            this.$emit('select', item)
        }
    }
}
</script>