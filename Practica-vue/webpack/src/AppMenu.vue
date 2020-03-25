<template>
    <div class="col">
        <template v-if="menu.length">
            <h3>Menu</h3>
            <ul>
                <menu-item :item="item" v-for="item in menu" @select="$emit('selected', item)"></menu-item>
            </ul>
        </template>
    </div>
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