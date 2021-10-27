<template>
  <div>la liste</div>
  <ul>
    <li v-for="item in malist" :key="item.id">
      {{ item.id }} - {{ item.user }} :
      <span @click="deleteEntry(item)">X</span> -
      <span @click="editEntry(item)">V</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  components: {},
  props: {
    malist: Object,
    deleteEntry: Function,
    editEntry: Function,
  },
  data: function () {
    return {};
  },
  methods: {},
  watch: {},
};
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
