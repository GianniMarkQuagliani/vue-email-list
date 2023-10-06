
const { createApp } = Vue;

createApp({
    data() {
        return {

        }
    },
    methods: {
        getData() {
            // Effettuo una richiesta HTTP GET a un endpoint API per ottenere dati casuali
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{

            });

        }
    }
}).mount('#app');




































