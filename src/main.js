import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//configuration de parse server
const Parse = require('parse');
Parse.initialize("GAeDVnUM3Y3TBqVmggHKjNQeAIzObVNFw06aWJ7K", "uzx41wQlfzfoQouTZk06emGeGMWSi4CiOcQMw89k");
Parse.serverURL = "https://parseapi.back4app.com/";
new Vue({
  render: h => h(App),
}).$mount('#app')
