<template>
    <ul>
        <menu-item v-for="item in menu" :item="item"  @select="$emit('selected', item)"></menu-item>
    </ul>

</template>

<script>
import MenuItem from './MenuItem.vue'
export default{
    components: {
        'menu-item': MenuItem
    },
    props: ['menu']
}
</script>