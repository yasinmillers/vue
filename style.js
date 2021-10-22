// const Counter = {
//     data() {
//       return {
//         counter: 0
//       }
//     }
//   }



// Vue.createApp({
//     data() {
//         return {
//             name: "uma",
//             age: 22,
//             date: 1999
//         }
//     },
//     methods: {
//         greetMethod: function() {
//             alert(this.greet);
//         }
//     }
// }).mount("#app")
Vue.createApp({
    data: function() {
        return {
            greet: "Hello Catalyst!"
        }
    },

    methods: {
        greetMethod: function() {
            alert(this.greet);
        }
    }

}).mount("#app")