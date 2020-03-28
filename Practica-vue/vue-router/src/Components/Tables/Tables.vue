<template>
    <div class="row">
        <div class="col">
            <h2>Mesas</h2>
            <select name="" id="" v-model="selected">
                <option :value="mesa" v-for="mesa in mesas">{{mesa}}</option>
            </select>
            <div class="width-100"></div>
            <router-link :to="selected+'/order'"><button class="mt-3 btn btn-primary">Aceptar</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mesas: [1,2,3,4,5,6,7,8,9,10],
            selected: 0
        }
    },

    methods: {
        getSelected(item) {
            this.selected = item
        }
    }
}
</script>