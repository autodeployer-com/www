napisz kompenent dla frameworku vue z sekcją style i script do wyświetlenia danych z pliku JSON zawierające tablicę z kolumnami: id, nazwa, opis, url. Dodaj pole wysuzkiwarki po nazwie z polem search i przyciskiem o nazwie: szukaj

<template>
  <div>
    <input type="text" v-model="searchName" />
    <button @click="searchName">Szukaj</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nazwa</th>
          <th>Opis</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName: '',
      items: []
    }
  },
  created() {
    this.fetchItems()
  },
  methods: {
    fetchItems() {
      fetch('/path/to/items.json')
        .then(res => res.json())
        .then((data) => {
          this.items = data
        })
    },
    searchName() {
      const filtered = this.items.filter(item => item.name.includes(this.searchName))
      this.items = filtered
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
  border: 1px solid #ddd;
  text-align: left;
}
</style>
