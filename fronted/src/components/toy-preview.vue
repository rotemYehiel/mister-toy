<template>
        <section class="toy-preview">
                <h1>{{toy.name}}</h1> 
                <h2>{{toy.price}}</h2> 
                <router-link :to="'/'+toy._id">More...</router-link>
                <router-link :to="'/edit/'+toy._id">Edit</router-link>
                <button @click="removeToy(toy._id)">Delete</button>
            </section>
</template>

<script>
export default {
  name: 'ToyPreview',
  props: {
    toy:Object
  },
    methods: {
        removeToy(_id) {
            this.$emit('removeToy', _id)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toy-preview{
  background-color: lightgrey;
}
h3 {
  margin: 40px 0 0;
}
ul {
  /* list-style-type: none; */
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
