<template>
  <div id="app">
      <header class="header">
          <h1>{{project.toUpperCase()}}</h1>
      </header>
      <!-- Fin de header -->

      <div id="main" class="container mt-3">
          <div class="row mt-3">
              <app-menu :menu="menu" @add-2="addOrder"></app-menu>
              <add-menu-item :menu="menu"></add-menu-item>
              <instructions></instructions>
          </div>

          <hr>

          <div class="row">
              <div class="col">
                  <h2>Orden</h2>
                  <order-table :order="order"></order-table>
                  <button class="btn btn-success" @click.prevent="submitOrder()">Ordenar</button>
              </div>
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
import AppMenu from './AppMenu.vue'
import AddMenuItem from './AddMenuItem.vue'
import Instructions from './Instructions.vue'
import OrderTable from './OrderTable.vue'

export default {
  components: {
    'app-menu': AppMenu,
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
            food: [],
            total: 0
        }
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
}
</script>

