<template>
    <div>
        <ul class="nav nav-bar">
            <router-link tag="li" to="/" active-class="active"><a>Mesas</a></router-link>
        </ul>
        
        <p>Mesa: {{this.$route.params.id}}</p>
        <menu-app></menu-app>
        <order-app></order-app>
    </div>
    
</template>

<script>
import Order from '../Order/Order'
import Menu from '../Menu/Menu'

export default {
    components: {
        'order-app': Order,
        'menu-app': Menu
    },
    prop: ['id']
}
</script>