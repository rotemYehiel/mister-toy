<template>

  <section>
      <section class="toy-filter">

                <h1>Toy filter</h1> 
                    <form class="filter-form"  @submit.prevent="filterToy">
                        <input type="text" v-model="filterBy.name" placeholder="Toy Name..." />

                        <div class="container">
                            <h3>In stock</h3>
                            <div class="checkbox-container yellow">
                                <input v-model="filterBy.inStock" type="checkbox" checked id="toggle" />
                                <label for="toggle"></label>
                                <div class="active-circle"></div>
                            </div>
                        </div>

                        <label for="type">Type:</label> 
                        <select v-model="filterBy.type" id="type">
                            <option value="Educational">Educational</option>
                            <option value="Funny">Funny</option>
                            <option value="Adult">Adult</option>
                        </select>

                        <button>filter</button>   
                    </form>
      </section>
      <section class="toy-sort">
              <label>Sort by:</label>
              <select  v-model="sortby" v-on:change="sortByType" id="sort">
                  <option value="name">Name</option>
                  <option value="price">Price</option>
              </select>
      </section>
  </section>
</template>

<script>


export default {
  name: 'ToyFilter',
 
    data() {
        return {
            filterBy: {
                name: '',
                inStock: true,
                type: ''
            },
            sortby: ''
        }
    },
  methods: {
        filterToy() {
            this.$emit('onFilter', this.filterBy)
        },
        sortByType(){
           this.$emit('onSort', this.sortby)
        //   this.sortToy=ev.target.value
        //     console.log(ev.target.value)
          // console.log(this.sortby)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toy-sort{
   background-color: linen;
   text-align: start;
    margin-top: 2px ;
    padding: 10px;
}
.toy-filter{
  background-color: linen;
    margin: 0 auto;
    padding: 10px;
}
.filter-form{
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
        height: 22px;
}
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



/* toggal button style */
.container {
    box-sizing: border-box;
    margin: 0 auto;
    background: #fff;
    display: contents;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    width: 280px;
    
}

.container h3 {
	color: #111;
	margin: 0 0 25px;
	position: relative;
	z-index: 2;
}

.checkbox-container {
	display: inline-block;
	position: relative;
}

.checkbox-container label {
	background-color: #aaa;
	border: 1px solid #fff;
	border-radius: 20px;
	display: inline-block;
	position: relative;
	transition: all 0.3s ease-out;
	width: 45px;
	height: 25px;
	z-index: 2;
}

.checkbox-container label::after {
	content: ' ';
	background-color: #fff;
	border-radius: 50%;
	position: absolute;
	top: 1.5px;
	left: 1px;
	transform: translateX(0);
	transition: transform 0.3s linear;
	width: 20px;
	height: 20px;
	z-index: 3;
}

.checkbox-container input {
	visibility: hidden;
	position: absolute;
	z-index: 2;
}

.checkbox-container input:checked + label + .active-circle {
	transform: translate(-50%, -50%) scale(15);
}

.checkbox-container input:checked + label::after {
	transform: translateX(calc(100% + 0.5px));
     background-color: palegreen;
}

.active-circle {
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(calc(-50% - 10px), calc(-50% - 2px)) scale(0);
	transition: transform 0.6s ease-out;
	/* width: 30px; */
	z-index: 1;
}
</style>
