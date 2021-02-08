var app = new Vue({
    el: "#root",
    data: {
        dischi: [],
    },
    mounted() {
      const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((risposta) => {
        self.dischi = risposta.data.response;
  });


    }

});

Vue.config.devtools = true
