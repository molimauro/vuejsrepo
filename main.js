Vue.component('navbar', {
    props: ['title'],
    template: "<h3>{{title}}</h3>",
})

var app = new Vue({
    el: "#app",
    data: {
        mainTitle: "VueJs Project"
    }
})