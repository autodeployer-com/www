<template>
  <div>

    <!--    <input type="text" v-model="search_value" @keyup="searchContent"/>-->
    <input type="text" v-model="search_value" @keyup="searchByInput"/>

    <!--    <input type="text" v-model="search_value" @change="searchName" />-->

    <!--    <button @click="fetchItems">reset</button> - -->
    <!--    <button @click="searchName">searchName</button> - -->
    <div class="category">
      <span class="category_item" v-for="category in categories" :key="category.id" >
        <input type="radio" :id="category.value" name="category" :value="category.value" @click="selectCategory">
        <label :for="category.value">#{{ category.label }}</label>
      </span>
    </div>

    <table>
      <!--      <thead>-->
      <!--      <tr>-->
      <!--        <th>Nazwa - Kategoria - Opis</th>-->
      <!--      </tr>-->
      <!--      </thead>-->
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td :id="item.id">
          <h3>
            <span class="item_input"> <a :href="'#'+ item.id">{{ item.input }}</a></span>
            <span class="item_category"> #{{ item.category }}</span>

            ->
            <!--            <span class="item_button"> RUN on: </span>-->
            <!--            v-model="deployment"-->
            <select name="deployment" id="deployment" required>
              <option disabled selected value>RUN on: ...</option>
              <option @click="runOnBrowser" value="1">BROWSER</option>
              <option @click="deployRemote" value="2">CLOUD</option>
              <option @click="deployLocal" value="3">LOCAL PC</option>
            </select>
            <!--            <button @click="runOnBrowser">BROWSER</button>-->
            <!--            <button @click="deployRemote">CLOUD</button>-->
            <!--            <button @click="deployLocal">PC</button>-->
            <!--            <button @click="deployLocal">-></button>-->

          </h3>
          {{ item.output }}
        </td>
      </tr>
      </tbody>
    </table>

  </div>

  <!--  <button @click="say('bye')">Say bye</button>-->

  <!-- using $event special variable -->
  <!--  <button @click="warn('Form cannot be submitted yet.', $event)">-->
  <!--    Submit-->
  <!--  </button>-->

  <!-- using inline arrow function -->
  <!--  <button @click="(event) => warn('Form cannot be submitted yet.', event)">-->
  <!--    Submit-->
  <!--  </button>-->
</template>

<script>

// document.getElementById("deployment").selectedIndex = -1;

const MarketplaceFile = '/data/marketplace.json';
const CategoryFile = '/data/category.json';
export default {
  data() {
    return {
      search_value: '',
      category_value: '',
      items: [],
      categories: [],
    }
  },
  created() {
    this.fetchItems()
    this.fetchCategory()
  },
  methods: {
    fetchItems() {
      fetch(MarketplaceFile)
          .then(res => res.json())
          .then((data) => {
            this.items = data
          })
    },
    fetchCategory() {
      fetch(CategoryFile)
          .then(res => res.json())
          .then((data) => {
            this.categories = data
          })
    },
    searchByInput() {
      if (this.search_value.length < 1) {
        this.fetchItems();
      }
      const filtered = this.items.filter(item => item.input.toLowerCase().includes(this.search_value.toLowerCase()))
      this.items = filtered
      console.log("search input: " + this.search_value)
    },
    searchCategory() {
      if (this.search_value.length < 1) {
        this.fetchItems();
      }
      const filtered = this.items.filter(item => item.category.toLowerCase().includes(this.search_value.toLowerCase()))
      this.items = filtered
      console.log("search category: " + this.search_value)
    },
    setCategory(category) {
      category = category.toLowerCase();
      fetch(MarketplaceFile)
          .then(res => res.json())
          .then((data) => {
            this.items = data
            const filtered = this.items.filter(item => item.category.toLowerCase().includes(category))
            this.items = filtered
            console.log("set category: " + category)
          })
    },
    selectCategory(e) {
      // const category = this.category_value.toLowerCase();
      const category = e.target.value;
      fetch(MarketplaceFile)
          .then(res => res.json())
          .then((data) => {
            this.items = data
            const filtered = this.items.filter(item => item.category.toLowerCase().includes(category))
            this.items = filtered
            console.log("selectCategory2: " + category)
          })
    },
    searchByOutput() {
      //TODO: save all questions and show all not existing to develop system
      // http://query.autodeployer.com/ - as a Service with request deployed as nodejs/python + docker
      // CRUD http://marketplace.autodeployer.com/add
      // CRUD http://marketplace.autodeployer.com/remove
      // CRUD http://marketplace.autodeployer.com/read
      // CRUD http://marketplace.autodeployer.com/list
      //
      let content = this.search_value.toLowerCase();
      fetch(MarketplaceFile)
          .then(res => res.json())
          .then((data) => {
            this.items = data
            const filtered = this.items.filter(item => item.output.toLowerCase().includes(content))
            this.items = filtered
            console.log("search output: " + content)
          })
    },
    deployRemote(message) {
      alert(message)
    },
    deployLocal(message) {
      alert(message)
    },
    runOnBrowser(message) {
      alert(message)
    },
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
}


</script>


<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

table, th, td {
  border: 0px solid #ddd;
  text-align: left;
}

.vp-doc th, .vp-doc td {
  border: 1px solid var(--vp-c-divider);
  padding: 5px 5px;
}

.vp-doc h3 {
  margin: 5px 0 0;
}

.item_input a {
  color: green;
}

.item_category {

}

.item_button {
  color: gray;
}

input, textarea {
  color: green;
  /*background-color: black;*/
  padding: 1px 4px 1px 4px;
  border: 1px solid darkgreen;
  width: 100%;
  font-size: larger;
}

label div {
  white-space: pre-line;
  /*color: gray;*/
  padding: 0px;
}


button {
  color: white;
  font-weight: bolder;
  background-color: darkgray;
  padding: 0px 4px;
  margin: 0px 6px;
  border: 1px solid gray;
}

button:hover {
  background-color: #8e8e8e;
}

select {
  font-weight: bolder;
  padding: 0px 5px;
}

select:hover {
  background-color: #8e8e8e;
}
.category span {
  display: inline-block;
}

input[type=radio] {
  visibility: hidden;
  opacity: 0;
  display: none;
}

.category label {
  margin: 2px;
  padding: 3px 4px 3px 4px;
}
</style>
