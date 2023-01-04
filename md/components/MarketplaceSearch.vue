<template>
  <div>

    <input type="text" v-model="search_value" @keyup="searchName"/>

    <!--    <input type="text" v-model="search_value" @change="searchName" />-->

    <!--    <button @click="fetchItems">reset</button> - -->
    <!--    <button @click="searchName">searchName</button> - -->
    <!--    <button @click="searchCategory">searchCategory</button>-->

    <input type="radio" id="yes" name="category" value="api" @click="setCategory('api')">
    <label for="yes">api</label>

    <input type="radio" id="no"  name="category" value="regex" @click="setCategory('regex')">
    <label for="no">regex</label>

    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nazwa</th>
        <th>Kategoria</th>
        <th>Opis</th>
        <th>URL</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.url }}</td>
      </tr>
      </tbody>
    </table>

  </div>

  <button @click="say('bye')">Say bye</button>

  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
</template>

<script>
export default {
  data() {
    return {
      search_value: '',
      items: [],
    }
  },
  created() {
    this.fetchItems()
  },
  methods: {
    fetchItems() {
      fetch('/data/marketplace2.json')
          .then(res => res.json())
          .then((data) => {
            this.items = data
          })
    },
    searchName() {
      if (this.search_value.length < 1) {
        this.fetchItems();
      }
      const filtered = this.items.filter(item => item.name.includes(this.search_value))
      this.items = filtered
      console.log("search name: " + this.search_value)
    },
    searchCategory() {
      if (this.search_value.length < 1) {
        this.fetchItems();
      }
      const filtered = this.items.filter(item => item.category.includes(this.search_value))
      this.items = filtered
      console.log("search category: " + this.search_value)
    },
    setCategory(category) {
      fetch('/data/marketplace2.json')
          .then(res => res.json())
          .then((data) => {
            this.items = data
            const filtered = this.items.filter(item => item.category.includes(category))
            this.items = filtered
            console.log("set category: " + category)
          })
    },
    say(message) {
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

input, textarea {
  /*color: white;*/
  /*background-color: black;*/
  padding: 1px 4px 1px 4px;
  border: 1px solid white;
}

label div {
  white-space: pre-line;
  color: gray;
  padding: 0px;
}
</style>
