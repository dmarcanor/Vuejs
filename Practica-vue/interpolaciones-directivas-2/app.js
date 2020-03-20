const app = new Vue({
    el: "#app",
    data: {
        project: "App",
        version: 0.1,
        name: "",
        last_name: "",
        age: 0,
        education: {
            studying: false,
            level: "",
            school: "",
            experience: ""
        }
    },
    computed: {
        experienceError: function() {
            var exp = this.education.experience.trim();

            if(exp == ''){
                return "Este campo es obligatorio";
            }

            if(exp.length < 10){
                return "Describa una experiencia mayor a 10 caracteres";
            }

            if(exp.length > 20){
                return "Describa una experiencia menor a 20 caracteres";
            }
        }
    }
});