<template>
  <div id="app">
      <header class="header">
          <h1>{{project.toUpperCase()}}</h1>
      </header>

      <div id="main" class="container mt-3">
          <app-menu></app-menu>
          <instructions>Dé click sobre el nombre de un item para añadirlo a la orden.
                Más de un click aumenta la cantidad de ese item a la orden</instructions>
      
          <hr>

          <app-order></app-order>
          <instructions>Dé click sobre el nombre de un item para eliminarla 
              de la orden o reducir la cantidad pedida</instructions>
          
      </div>

      <footer class="footer sticky bottom">
          {{project}} v{{version}}
      </footer>
  </div>
</template>

<script>
import Menu from './Components/Menu/Menu'
import Order from './Components/Order/Order'
import instructions from './Components/Common/Instructions'

export default {
  components: {
    'app-menu': Menu,
    'app-order': Order,
    'instructions': instructions
  },
  
  name: 'app',

  data() {
      return {
        project: "Restaurant",
        version: 3.0
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