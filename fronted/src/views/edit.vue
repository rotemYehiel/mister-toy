<template>
  <section class="toy-edit">
    <h1>{{(currToy)? 'Edit' : 'Add'}} Toy</h1>
    <form @submit.prevent="editToy">
      <input v-if="currToy" type="text" v-model="editName" />
      <div v-else>
      <input type="text" v-model="newToy.name" placeholder="enter toy name..." />
      <input type="text" v-model="newToy.price" placeholder="enter toy price..." />
      On stock? <input type="checkbox" id="inStock"  v-model="newToy.inStock">
      <label>Type:</label>
              <select v-model="newToy.type" id="type">
                  <option value="Educational">Educational</option>
                  <option value="Funny">Funny</option>
                  <option value="Adult">Adult</option>
              </select>
      </div>
      <button>{{(currToy)? 'Edit' : 'Add'}}</button>
    </form>
    <pre>{{newToy}}</pre>
  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: "edit",

  data() {
    return {
      currToy: "",
      editName: "To do Name...",
      currToy: null,
      newToy: {
        _id: null,
        name: '',
        price: 0,
        type: '',
        createdAt: Date.now(),
        inStock: true

      },

    };
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.currToyId = id;
      this.$store
        .dispatch({
          type: "getToy",
          _id: this.currToyId
        })
        .then(res => {
          this.currToy = res;
          this.editName = this.currToy.name;
        });
    }
  },
  methods: {
    editToy() {
      if (this.currToyId) {
        this.currToyId = +this.currToyId;
        this.edit();
      } else {
        this.add();
      }
    },
    add() {
      this.$store.dispatch({
        type: "saveToy",
        toy: this.newToy
      });
    },
    edit() {
      this.$store.dispatch({
        type: "saveToy",
        toy: {
          _id: this.currToyId,
          name: this.editName
        }
      });
    }
  }
};
</script>
