Vue.component('app-menu', {
    template: `<div class="col">
                    <template v-if="menu.length">
                        <h3>Menu</h3>
                        <ul>
                            <li is="menu-item" :item="item" v-for="item in menu" @add="$emit('add-2', item)"></li>
                        </ul>
                    </template>
                </div>`,
    props: ['menu']
})

Vue.component('menu-item', {
    template: `<li v-on:click="add(item)">
                    Nombre: <a>{{item.foodName}}</a> / Precio: {{item.price}}
                </li>`,
    props: ['item'],
    methods: {
        add: function(item){
            this.$emit('add', item)
        }
    }
})

Vue.component('add-menu-item', {
    template: `<div class="col">
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
                </div>`,
    props: ['menu'],
    methods: {
        createFood: function() {
            this.menu.push(
                {
                    foodName: this.menu.foodName,
                    price: this.menu.price
                }
            )
            this.clearForm()
        },
    
        clearForm: function() {
            this.menu.foodName = ""
            this.menu.price = ""
        }
    }
})

Vue.component('instructions', {
    template: `<div class="col-12">
                    <p><small>{{message}}</small></p>
                </div>`,

    data(){
        return{
            message: "Dé click sobre el nombre de un item para añadirlo a la orden. Más de un click aumenta la cantidad de ese item a la orden"
        }
    }
})

Vue.component('order-table', {
    template: `<table class="table table-bordered">
                    <thead>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        <tr is="order-item" v-for="item in order.food" :item="item"></tr>
                        <tr>
                            <td>Total a pagar</td>
                            <td>{{getTotal()}}</td>
                        </tr>
                    </tbody>
                </table>`,

    props: ['order'],
    methods: {
        getTotal: function(){
            var total=0
    
            this.order.food.forEach(element => {
                total += (element.price * element.quantity)
            });
    
            return total;
        }
    }
    
})

Vue.component('order-item', {
    template: `<tr>
                    <td>{{item.foodName}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.price * item.quantity}}</td>
                </tr>`,

    props: ['item']
})

const app = new Vue({
    el: "#app",
    data: {
        project: "Restaurant",
        version: 2.0,
        menu: [
            {
                foodName: "Pollo",
                price: 100000
            },
            {
                foodName: "Pizza",
                price: 120000
            },
            {
                foodName: "Ensalada",
                price: 80000
            }
        ],
        order: {
            food: [],
            total: 0
        }
    },

    methods: {
        addOrder: function(item){
            var obj = {
                foodName: item.foodName,
                price: item.price,
                quantity: 1
            }
    
            if(this.isItemRepeated(item)){
                return this.getItemRepeated(item).quantity++;
            }
    
            this.order.food.push(obj)
        },
    
        getItemRepeated: function(item){
            return this.order.food.find(element => element.foodName === item.foodName);
        },
    
        isItemRepeated: function(item){
            return this.order.food.find(element => element.foodName === item.foodName) != null ? true : false;
        },
        submitOrder: function(){
            alert("Orden enviada")
            this.setOrderAsEmpty()
        },
    
        setOrderAsEmpty: function(){
            return this.order.food = []
        }
    }
});