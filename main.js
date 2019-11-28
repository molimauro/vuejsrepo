Vue.component('navbar', {
    props: {
        title: String
    },
    template: "<h3>{{title}}</h3>",
})

Vue.component('app-view', {
    data: function () {
        return {
            buttonsDisabled: false,
        }
    },
    template: "<div :class='{gray: buttonsDisabled, red: !buttonsDisabled}'><slot :flag='buttonsDisabled' :toggleFunction='toggleFunction'></slot></div>",
    methods: {
        toggleFunction: function () {
            this.buttonsDisabled = !this.buttonsDisabled
        }
    }
})

Vue.component('app-component', {
    template: "<div><slot>CONTENT</slot></div>"
})

Vue.component('toggle-button', {
    props: {
        flag: Boolean,
        toggle: Function
    },
    template: "<button @click='toggle'>Toggle {{flag ? 'ON' : 'OFF'}}</button>"
})

Vue.component('counter-button', {
    props: {
        flag: Boolean
    },
    data: function () {
        return {
            count: 0
        }
    },
    template: "<button @click='count++' :disabled='flag'>You clicked {{count}} times.</button>"
})

var app = new Vue({
    el: "#app",
    data: {
        mainTitle: "VueJs Project",
    }
})