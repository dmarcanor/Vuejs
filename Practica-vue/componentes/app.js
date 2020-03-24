Vue.component('app-header', {
    template: '<header class="header"><h1>{{project}}</h1></header>',
    props: ['project']
});

Vue.component('app-footer', {
    template: '<footer class="footer sticky bottom">{{project}} v{{version}}</footer>',
    props: ['project', 'version']
});

Vue.component('app-menu', {
    template: 
            `
            <div class="col">
                <template v-if="menu.length">
                    <h3>Menu</h3>
                    <ul>
                        <li v-for="item in menu" v-on:click="addOrder(item)">Nombre: <a>{{item.foodName}}</a> / Precio: {{item.price}}</li>
                    </ul>
                </template>
            </div>
            `,
    props: ['menu', 'order'],

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
        }
    }
});

Vue.component('add-item', {
    template: 
            `
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
            `,

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
            this.menu.price = 0
        }
    }
});

Vue.component('instructions', {
    template: `<div class="col-12">
                    <p><small>{{message}}</small></p>
                </div>`,
    data(){
        return {
            message: "Dé click sobre el nombre de un item para añadirlo a la orden. Más de un click aumenta la cantidad de ese item a la orden"
        }
    }
});

Vue.component('order-table', {
    template: `<table class="table table-bordered">
                    <thead>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in order.food">
                            <td>{{item.foodName}}</td>
                            <td>{{item.quantity}}</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
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
});

Vue.component('order', {
    template: `<div class="row">
                    <div class="col">
                        <h2>Orden</h2>
                        <order-table :order="order"></order-table>
                        <button class="btn btn-success" @click.prevent="submitOrder()">Ordenar</button>
                    </div>
                </div>`,
    props: ['order'],
    methods: {
        submitOrder: function(){
            alert("Orden enviada")
            this.setOrderAsEmpty()
        },

        setOrderAsEmpty: function(){
            return this.order.food = []
        }
    }
})

const app = new Vue({
    el: "#app",
    data: {
        project: "Restaurant",
        version: 0.1,

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
            food: new Array(),
            total: 0
        }
    }
});