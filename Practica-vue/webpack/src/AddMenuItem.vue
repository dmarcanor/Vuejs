<template>
    <div class="col">
        <h3>Agregar item al menu</h3>
        <form id="menu" @submit.prevent="createFood">
            <div class="form-group">
                <label for="" class="form-control-label">Nombre
                    <input type="text" class="form-control" v-model="menu.foodName" placeholder="Nombre de la comida">
                </label>
            </div>
        
            <div class="form-group">
                <label for="" class="form-control-label">Precio
                    <input type="number" class="form-control" v-model="menu.price" placeholder="Precio">
                </label>
            </div>
            <button class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>

<script>
export default{
    props: ['menu'],
    methods: {
        createFood() {
            this.menu.push(
                {
                    foodName: this.menu.foodName,
                    price: this.menu.price
                }
            )
            this.clearForm()
        },
    
        clearForm() {
            this.menu.foodName = ""
            this.menu.price = ""
        }
    }
}
</script>