Vue.filter('title', function(value, title){
    return title + value
});

const app = new Vue({
    el: "#app",
    data: {
        project: "Project",
        version: 0.1,
        name: "",
        title: ""
    },
    filters: {
        upper: function(value) {
            return value.toUpperCase()
        }
    }
});