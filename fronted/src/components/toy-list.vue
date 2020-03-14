<template>
  <section class="toys-list">
      <h1>Toy List</h1>
          <ul calss="list-container">
              <li :key="toy._id" v-for="toy in toys" >
              <toy-preview @removeToy="removeToy" :toy="toy"></toy-preview>
              </li>
          </ul>
  </section>
</template>

<script>

import toyPreview from '@/components/toy-preview.vue'

export default {
  name: 'ToyList',
  props: {
    toys:Array
  },
  components: {
    toyPreview
  },
      methods: {
        onDone(todo) {
            // console.log('get it?', todo)
            this.$emit('onDone', toy)
        },
        removeToy(_id) {
            this.$emit('removeToy', _id)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
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
