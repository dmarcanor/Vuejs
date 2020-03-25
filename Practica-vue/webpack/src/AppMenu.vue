<template>
    <div class="col">
        <template v-if="menu.length">
            <h3>Menu</h3>
            <ul>
                <li is="menu-item" :item="item" v-for="item in menu" @add="$emit('add-2', item)"></li>
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