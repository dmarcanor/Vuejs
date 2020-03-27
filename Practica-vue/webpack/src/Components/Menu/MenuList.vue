<template>
    <ul>
        <menu-item v-for="item of menu" :item="item" @selected="$emit('select', item)"></menu-item>
    </ul>
</template>
    
<script>
import MenuItem from './MenuItem.vue'
    
export default{
    props: ['menu'],
    
    components: {
        'menu-item': MenuItem
    }
}
</script>