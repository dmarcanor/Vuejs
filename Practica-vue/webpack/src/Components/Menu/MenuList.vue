<template>
    <ul>
        <li is="menu-item" v-for="item in menu" :item="item"  @selected="$emit('select', item)"></li>
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