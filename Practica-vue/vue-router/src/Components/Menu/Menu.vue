<template>
    <div class="row mt-3">
        <div class="col">
            <h2>Menu</h2>
            <menu-list :menu="menu" @select="addOrder"></menu-list>
        </div>
        <div class="col">
            <add-menu-item :menu="menu" @add="addMenuItem"></add-menu-item>
        </div>
        <div class="col-12">
            <instructions>Dé click sobre el nombre de un item para añadirlo a la orden.
                Más de un click aumenta la cantidad de ese item a la orden</instructions>
        </div>
    </div>    
</template>

<script>
    import MenuArray from '../../Store/menu'
    import bus from '../Common/EventBus'
    import MenuList from './MenuList'
    import AddMenuItem from './AddMenuItem'
    import Instructions from './../Common/Instructions'
    
    export default{
        components: {
            'menu-list': MenuList,
            'add-menu-item': AddMenuItem,
            'instructions': Instructions
        },

        data() {
            return {
                menu: MenuArray.state.menu,
                food: []
            }
        },

        created() {
            bus.$on('sendOrder', (e) => this.food = e)
        },

        methods: {
            getObjectFrom(item) {
                return {foodName: item.foodName, price: item.price, quantity: 1}
            },
        
            getItemRepeated(item, order){
                return this.food.find(element => element.foodName === item.foodName);
            },

            addMenuItem(item){
                this.menu.push(item)
            },

            addOrder(item){    
                if(this.getItemRepeated(item)){
                    return this.getItemRepeated(item).quantity++;
                }
                
                this.food.push(this.getObjectFrom(item))
            }
        }
    }
</script>