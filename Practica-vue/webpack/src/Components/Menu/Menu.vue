<template>
    <div class="row mt-3">
        <div class="col">
            <h3>Menu</h3>
            <menu-list :menu="menu" @select="addOrder"></menu-list>
        </div>
        <div class="col">
            <add-menu-item :menu="menu" @add="addMenuItem"></add-menu-item>
        </div>
    </div>    
</template>

<script>
    import bus from '../Common/EventBus'
    import MenuList from './MenuItem'
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
                ]
            }
        },

        /*created() {
            bus.$on('sendOrder', function(event) {

            })
        },*/

        methods: {
            getObjectFrom(item) {
                return {foodName: item.foodName, price: item.price, quantity: 1}
            },
        
            getItemRepeated(item){
                return this.order.food.find(element => element.foodName === item.foodName);
            },

            addMenuItem(item){
                this.menu.push(item)
            },

            addOrder(item){
                var temp = bus.$on('sendOrder')
                console.log(temp)
                /*if(this.getItemRepeated(item)){
                    return this.getItemRepeated(item).quantity++;
                }
                
                bus.$emit('addItemInOrder', this.getObjectFrom(item))*/
                //this.order.food.push(this.getObjectFrom(item))
            }
        }
    }
</script>