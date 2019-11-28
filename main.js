Vue.component('navbar', {
    props: {
        title: String
    },
    template: "<h3>{{title}}</h3>",
})

Vue.component('app-view', {
    template: "<div><slot></slot></div>"
})

Vue.component('app-component', {
    template: "<div><slot>CONTENT</slot></div>"
})

Vue.component('toggle-button', {
    template: "<button>Toggle</button>"
})

Vue.component('counter-button', {
    data: function () {
        return {
            count: 0
        }
    },
    template: "<button @click='count++'>You clicked {{count}} times.</button>"
})

var app = new Vue({
    el: "#app",
    data: {
        mainTitle: "VueJs Project"
    }
})