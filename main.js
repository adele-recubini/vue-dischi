// Bonus (per oggi pomeriggio): Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.


var app = new Vue({
    el: "#root",
    data: {
        dischi: [],
        generi:[],
        generiSelect:'',

    },
    mounted() {
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((risposta) => {
        self.dischi = risposta.data.response;
        console.log(self.dischi);
        // ora devo prendermi per ogni disco la chiave genere dal momento che ora tutto il mio data.response è in un normalissimo array in data procedo a estrarre le informazioni con un foreach
        self.dischi.forEach((element) => {

          if (!self.generi.includes(element.genre)){
             self.generi.push(element.genre)



          }

        });




  });


    }

});

Vue.config.devtools = true
