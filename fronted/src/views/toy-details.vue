<template>
  <section v-if="currToy" class="toy-details">
    <h1>ToDo details of : {{currToy.name}}</h1>
    <h3>Price: {{currToy.price}}</h3>
    <h3>Type: {{currToy.type}}</h3>
    <h3>Created at: {{ currToy.createdAt | moment("from", "now") }}</h3>
      <h3>Created at in Locale String: {{ currToy.createdAt.toLocaleString()}}</h3>
    <h4>On stock : {{currToy.inStock}}</h4>
    <router-link :to="'/edit/'+currToy._id">Edit</router-link>
  </section>
</template>

<script>
// @ is an alias to /src
// import ToyList from '@/components/toy-list.vue'

export default {
  name: "toy-details",
 
  data() {
    return {
      currToy: null
    };
  },
  created() {
        this.$store.dispatch({
            type: 'getToy',
            _id: this.$route.params.id
        }).then(res =>{
          this.currToy = res
        } )
     
      
    }
};
</script>
