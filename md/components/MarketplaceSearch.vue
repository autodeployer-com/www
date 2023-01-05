<template>
  <div>

    <input type="text" v-model="search_value" @keyup="searchName"/>

    <!--    <input type="text" v-model="search_value" @change="searchName" />-->

    <!--    <button @click="fetchItems">reset</button> - -->
    <!--    <button @click="searchName">searchName</button> - -->
    <!--    <button @click="searchCategory">searchCategory</button>-->

    <div class="category">
    <input type="radio" id="yes" name="category" value="api" @click="setCategory('api')">
    <label for="yes">#api</label>

    <input type="radio" id="no"  name="category" value="regex" @click="setCategory('regex')">
    <label for="no">#regex</label>
    </div>

    <table>
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>Nazwa - Kategoria - Opis</th>-->
<!--      </tr>-->
<!--      </thead>-->
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>
          <h3>
              <span class="item_name"> <a href="{{ item.url }}">{{ item.name }}</a></span>
              <span class="item_category"> #{{ item.category }}</span>
          </h3>
          {{ item.description }}
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
.vp-doc th, .vp-doc td {
  border: 1px solid var(--vp-c-divider);
  padding: 5px 5px;
}
.vp-doc h3 {
  margin: 5px 0 0;
}
.item_name a {
  color: #42f842;
}
.item_category {

}

input, textarea {
  color: #42f842;
  /*background-color: black;*/
  padding: 1px 4px 1px 4px;
  border: 1px solid darkgreen;
  width:100%;
}

label div {
  white-space: pre-line;
  /*color: gray;*/
  padding: 0px;
}

input[type=radio] {
  visibility: hidden;
  opacity: 0;
  display: none;
}

.category label {
  margin: 2px;
  padding: 1px 4px 1px 4px;
}
</style>
