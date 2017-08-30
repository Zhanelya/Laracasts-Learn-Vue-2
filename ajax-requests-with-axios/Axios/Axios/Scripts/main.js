import Vue from 'vue'
import axios from 'axios'
let vue = new Vue({
    el: '#app',
    data: {
        skills: []
    },
    mounted() {
        axios.get('/Home/Skills').then(response => this.skills = response.data);
    }
});