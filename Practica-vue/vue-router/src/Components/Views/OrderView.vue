<template>
    <div>
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