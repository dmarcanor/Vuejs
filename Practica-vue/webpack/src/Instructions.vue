<template>
    <div class="col-12">
        <p><small>{{message}}</small></p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            message: "Dé click sobre el nombre de un item para añadirlo a la orden. Más de un click aumenta la cantidad de ese item a la orden"
        }
    }
}
</script>