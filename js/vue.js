var app = new Vue({
    el: '#projects',
    data: {
        projects:
        [
            {
                "year": "2020",
                "location": "Minsk",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": true
            },
            {
                "year": "2019",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
            {
                "year": "2018",
                "location": "Gomel",
                "s": "203",
                "style": "Хай-тек",
                "image": "images/детская_1.png",
                "show": false
            },
        ]
    },
    methods: {
        next (index){
            if(index == this.projects.length - 1){
                this.projects[index].show = false;
                this.projects[0].show = true;    
            }
            this.projects[index].show = false;
            this.projects[index+1].show = true;
        },
        prev (index){
            if(index == 0){
                this.projects[index].show = false;
                this.projects[index + this.projects.length - 1].show = true;
            }
            this.projects[index].show = false;
            this.projects[index-1].show = true;
            
        }
    }
});