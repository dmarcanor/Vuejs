const app = new Vue({
    el: "#app",
    data: {
        project: "App",
        version: 0.1,
        name: "Daniel",
        last_name: "Marcano",
        birthdate: {
            day: 13,
            month: 12,
            year: 1998
        },
    },
    computed: {
        age: function(){
            return 2020-this.birthdate.year;
        }
    }
});