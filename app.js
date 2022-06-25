const vm = Vue.createApp({
    data() {
        return {
            firstName: 'KIM',
            middleName: "",
            lastName: 'TAEHYUNG',
            url: "http://google.com",
            rawUrl: '<p><a href="http://google.com" target="_blank">GOOGLE</a></p>',
            age: 10
        }
    },
    methods: {

        fullName() {
            return `${this.firstName.toUpperCase()}  ${this.middleName.toUpperCase()} ${this.lastName.toUpperCase()}`
        },

        increment() {
            this.age++;
        },
        updateName(msg, event) {

            console.log(msg);
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }

    }
}).mount('#app')


// setTimeout(() =>{
//     vm.firstName = 'Jagroop'
// }, 2000)

// Vue.createApp({
//     data(){
//         return{
//             firstName : 'Jagroop',
//             lastName : 'Singh'
//         }
//     }
// }).mount('#nextApp')

