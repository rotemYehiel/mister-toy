<template>
  <div  @keyup.esc="showChat" class="toy-app-page">
    <h1>My Toy App Page</h1>
    <router-link to="/edit/">Add New Toy</router-link>

    <button @click="showChat">Open Chat</button>

    <toy-filter @onSort="sort" @onFilter="filter"> </toy-filter>
    <toy-list @removeToy="removeToy" v-if="toysForDisplay" :toys="toysForDisplay" msg="Welcome to my page!"/>

     <chat-app v-if="isChatShow">
      <h1 class="header" slot="header">CHAT</h1>
       <div slot="main" :key="message"  v-for="message in messages">{{message}}</div>

      <div class="chat-footer" slot="footer">
        <form  class="chat-form" slot="footer" @submit.prevent="addMassage">
            <input v-model="currMessage" class="chat-input" slot="footer" type="text" placeholder="Enter your massage here..."/> 
            <button slot="footer">Send</button>
          </form>
      </div>

    </chat-app>
  </div>




  
</template>

<script>
// @ is an alias to /src
import ToyList from "@/components/toy-list.vue";
import ToyFilter from "@/components/toy-filter.vue";
import chatApp from "@/components/chat-app.vue";


export default {
  name: "toy-app-page",
  data() {
    return {
      filterBy: null,
      sortBy: '',
      toys: [],
      data: Date.now(),
      isChatShow: false,
      messages: [],
      currMessage: '',
      responedMgs: 'yes please'
    };
  },
  components: {
    ToyList,
    ToyFilter,
    chatApp
  },

  methods: {
    sort(sortBy) {
      this.sortBy = sortBy;
      this.$store.commit({ type: "setSort", sortBy });
    },
    filter(filterBy) {
      this.filterBy = filterBy;
      this.$store.commit({ type: "setFilter", filterBy });
      this.$store.dispatch({ type: "loadToys"});
    },
    removeToy(_id) {
      this.$store.dispatch({ type: "removeToy", _id });
    },
    addMassage(){
      this.messages.push(this.currMessage)
      this.currMessage=''
      setTimeout(()=> this.messages.push(this.responedMgs),2500)
    },
    showChat(){
      this.isChatShow= !this.isChatShow

    }
  },
  computed: {
    toysForDisplay() {
      return this.$store.getters.toys;
    }
  }
};
</script>

