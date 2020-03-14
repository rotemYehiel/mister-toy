<template>
  <div id="app">
    <div id="nav">
       <router-link to="/toy-app-page">Toy App</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <!-- <botton @:click="showChat">Open Chat</botton> -->

    <!-- <chat-app @:keyup.esc="showChat" v-bind:class="{ hide: !isChatOff }">
      <h1 class="header" slot="header">CHAT</h1>
       <div slot="main" :key="message"  v-for="message in messages">{{message}}</div>

      <div class="chat-footer" slot="footer">
        <form  class="chat-form" slot="footer" @submit.prevent="addMassage">
            <input v-model="currMessage" class="chat-input" slot="footer" type="text" placeholder="Enter your massage here..."/> 
            <button slot="footer">Send</button>
          </form>
      </div>

    </chat-app> -->
  </div>
</template>
<script>

// import chatApp from "@/components/chat-app.vue";
export default {
  data(){
    return{
      // isChatOff: true,
      // messages: [],
      // currMessage: ''
    }

  },
    created() {
        this.$store.dispatch({ type: 'loadToys' })
    },
    components: {
    // chatApp
  },
  methods:{
    // addMassage(){
    //   this.messages.push(this.currMessage)
    //   this.currMessage=''
    // },
    // showChat(){
    //   this.isChatOff=!this.isChatOff

    // }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
