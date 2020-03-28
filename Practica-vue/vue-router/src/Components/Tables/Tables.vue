<template>
    <div>
        <div class="row">
            <div class="col text-center">
                <h2>Mesas</h2>
                <select v-model="selected">
                    <option :value="table" v-for="table in tables">{{table.number}}</option>
                </select>
                <div class="width-100"></div>
                <router-link v-if="selected" :to="getURL()"><button class="mt-3 btn btn-primary">Aceptar</button></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import TablesList from '../../Store/tables'

export default {
    data() {
        return {
            tables: TablesList.state.tables,
            selected: null
        }
    },

    methods: {
        isBusy() {
            return this.selected.busy ? "fallido" : "enviado"
        },

        getURL() {
            return "/mesa/" + this.isBusy() + "/" + this.selected.number
        }
    }
}
</script>