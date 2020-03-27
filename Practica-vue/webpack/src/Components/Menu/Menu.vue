<template>
    <div class="row mt-3">
        <div class="col">
            <h3>Menu</h3>
            <menu-list :menu="this.menu" @select="addOrder"></menu-list>
        </div>
        <div class="col">
            <add-menu-item :menu="menu" @add="addMenuItem"></add-menu-item>
        </div>
    </div>    
</template>

<script>
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
                menu: [
                    {
                        foodName: "Pollo",
                        price: 100000
                    },
                    {
                        foodName: "Pizza",
                        price: 120000
                    },
                    {
                        foodName: "Ensalada",
                        price: 80000
                    }
                ],

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