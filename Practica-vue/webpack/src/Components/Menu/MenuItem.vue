<template>
        <li @click="$emit('selected', item)">
            Nombre: {{item.foodName}} / Precio: {{item.price}}
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