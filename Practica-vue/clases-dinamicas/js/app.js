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
        last_nameError: function() {
            var last_name = this.last_name.trim();

            if(last_name == ""){
                return true;
            }

            return false;
        },
        ageError: function() {
            if(this.age < 0){
                return true;
            }

            return false;
        },
        ageErrorClasses: function() {
            return [
                "form-check-inline",
                {"has-danger": this.ageError, "has-success": !this.ageError}
            ];
        },
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
        },
        experienceClassError: function() {
            return this.education.experience.trim().length 
        }
    }
});