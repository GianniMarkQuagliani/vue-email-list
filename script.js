
const { createApp } = Vue;

createApp({
    data() {
        return {
            // Dichiarazione di una variabile randomMail nell'oggetto data
            randomMail: []
        }
    },
    methods: {
        getData() {
            for(let i = 0; i < 10 ; i++){
              // Effettuo una richiesta HTTP GET a un endpoint API per ottenere dati casuali
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{
                // Stampo la risposta della richiesta API nella console
                console.log(mail.data.response);
                 // Aggiunge il dato casuale all'array randomMail
                 this.randomMail.push(mail.data.response);

            });
            this.randomMail = [];  
            }
            

        }
    }
}).mount('#app');