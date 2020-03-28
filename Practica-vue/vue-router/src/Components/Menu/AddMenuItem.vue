<template>
    <div class="col">
        <h2>Agregar item al menu</h2>
        <form id="menu" @submit.prevent="create">
            <div class="form-group">
                <label for="" class="form-control-label">Nombre
                    <input type="text" class="form-control" v-model="foodName" placeholder="Nombre de la comida">
                </label>
            </div>
        
            <div class="form-group">
                <label for="" class="form-control-label">Precio
                    <input type="number" class="form-control" v-model="price" placeholder="Precio">
                </label>
            </div>
            <button class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>

<script>
export default{
    data() {
        return {
            foodName: "",
            price: ""
        }
    },
    methods: {
        create() {
            this.$emit('add', {
                foodName: this.foodName,
                price: this.price
            })
            this.clearForm()
        },
    
        clearForm() {
            this.foodName = "",
            this.price= ""
        }
    }
}
</script>