<template>
  <div id="app">
      <header class="header">
          <h1>{{project.toUpperCase()}}</h1>
      </header>

      <div id="main" class="container mt-3">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>

      <footer class="footer sticky bottom">
          {{project}} v{{version}}
      </footer>
  </div>
</template>

<script>
export default {
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