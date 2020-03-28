<template>
    <div>
        <hr>
        <h2>Orden enviada correctamente a la mesa {{id}}</h2>
        <router-link to="/">Volver</router-link>
    </div> 
</template>

<script>
    import TableList from '../../Store/tables'
    export default {
        props: ['id'],

        watch: {
            id: 'verify'
        },

        methods: {
            verify() {
                TableList.verifyId(this.id)
            }
        }
    }
</script>