<template>
    <li v-on:click="$emit('selected', item)">
        Nombre: {{this.item.foodName}} / Precio: {{this.item.price}}
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