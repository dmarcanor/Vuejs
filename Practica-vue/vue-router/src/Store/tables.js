import router from '../Components/Router/index'

let tables = [
    {
        number: 1,
        busy: false
    },
    {
        number: 2,
        busy: false
    },
    {
        number: 3,
        busy: true
    },
    {
        number: 4,
        busy: false
    }
]

export default {
    state: {
        tables //tables: tables
    },

    verifyId(id) {
        if ((this.state.tables.find(element => element.number == id)) == null) {
            return router.replace('/404')
        }
    }
}