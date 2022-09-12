



var app3 = new Vue({
    el: '#app3',
    data: {
      message: 'Hello Vue!'
    }
  });


var if_else = new Vue({
  el: '#if_else',
  data: {
    a: false,
  }
});

var show = new Vue({
  el: '#show',
  data: {
    a: true,
  }
});



var app6 = new Vue({
  el:'.card-body',
  data:{
    items:[
      { games: 'CSGO' },
      { games: 'Total War' },
      { games: 'Apex: Legends' },
      { games: 'Minecraft' },
      { games: 'COD' },
      { games: 'Minesweeper' },
    ],
  }
});

new Vue({
  el: "#inputs",
  data() {
      return {
          message: "Thankyou for your information",
          name: "",
          password: "",
          email: "",
          
      }
  },
methods: {

},
computed: {

}
});

new Vue({
  el: "#checked",
  data(){
    return {
        checkedNames: [],
    }
  }

});

//
new Vue({
  el: "#select",
  data(){
    return {
        selected: "",
   
    }
  }

});
new Vue({
  el: "#for",
  data(){
    return {
        values: [1,2,3,4,5,6],
        valuesSelected: "",
    }
  }

});
