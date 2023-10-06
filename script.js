
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
                // Stampo la risposta della richiesta API nella console
                console.log(mail.data.response);

            });

        }
    }
}).mount('#app');




































