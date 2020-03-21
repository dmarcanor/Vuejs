const app = new Vue({
    el: "#app",
    data: {
        project: "App",
        version: 0.1,
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "AJAX", "Laravel", "Vue.js"],
        
        soccerTeam: {
            name: "App FC",
            players: [
                {
                    name: "Neymar",
                    number: 10,
                    position: "Delantero"
                },
                {
                    name: "Cavani",
                    number: 9,
                    position: "Delantero"
                }
            ],
            manager: {
                firstName: "Pep",
                lastName: "Guardiola"
            }
        }
    },
    computed: {
        
    }
});