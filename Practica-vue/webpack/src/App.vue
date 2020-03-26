<template>
  <div id="app">
      <header class="header">
          <h1>{{project.toUpperCase()}}</h1>
      </header>
      <!-- Fin de header -->

      <div id="main" class="container mt-3">
          <div class="row mt-3">
              <div class="col">
                  <h3>Menu</h3>
                  <menu-list :menu="menu" @selected="addOrder"></menu-list>
              </div>
              <div class="col">
                  <add-menu-item :menu="menu" @add="addMenuItem"></add-menu-item>
              </div>
              
              <instructions>Dé click sobre el nombre de un item para añadirlo a la orden. Más de un click aumenta la cantidad de ese item a la orden</instructions>
          </div>

          <hr>

          <div class="row">
              <div class="col">
                  <h2>Orden</h2>
                  <order-table :order="order" :total="orderTotal"></order-table>
                  <button class="btn btn-success" @click.prevent="submitOrder()">Ordenar</button>
              </div>
              <instructions>Dé click sobre el nombre de un item para eliminarla de la orden o reducir la cantidad pedida</instructions>
          </div>
      </div>
      <!-- Fin e div.main -->

      <footer class="footer sticky bottom">
          {{project}} v{{version}}
      </footer>
      <!-- Fin de footer -->
  </div>
  <!-- Fin de div.main -->
</template>

<script>
import MenuList from './Components/Menu/MenuList.vue'
import AddMenuItem from './Components/Menu/AddMenuItem.vue'
import Instructions from './Components/Common//Instructions.vue'
import OrderTable from './Components/Order//OrderTable.vue'

export default {
  components: {
    'menu-list': MenuList,
    'add-menu-item': AddMenuItem,
    'instructions': Instructions,
    'order-table': OrderTable
  },
  name: 'app',
  data() {
      return {
        project: "Restaurant",
        version: 3.0,
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
            food: []
        }
    }
  },
  computed: {
      orderTotal() {
          var result=0
          this.order.food.forEach(element => result += (element.price * element.quantity))
          return result
      }
  },
  methods: {
        getObjectFrom(item) {
            return {foodName: item.foodName, price: item.price, quantity: 1}
        },
    
        getItemRepeated(item){
            return this.order.food.find(element => element.foodName === item.foodName);
        },

        addMenuItem(item){
          this.menu.push(item)
        },

        addOrder(item){
            if(this.getItemRepeated(item)){
                return this.getItemRepeated(item).quantity++;
            }
    
            this.order.food.push(this.getObjectFrom(item))
        },

        submitOrder(){
            alert("Orden enviada")
            this.order.food = []
        }
    }
}
</script>

<style>
    .header{
        text-align: center;
        border-bottom: solid black 1px;
    }

    .footer{
        border-top: solid black 1px;
        width: 100vw;
        margin-top: 50px;
    }

    .sticky{
        position: sticky;
        background: white;
    }

    .bottom{
        bottom: 0;
    }
</style>