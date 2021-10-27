<template>
  <div style="border: 2px solid #00f; width: 90%">
    <h2>GrandChild recoit de Child : {{ data }}</h2>
    <h3>
      GrandChild envoi à Child : <input type="text" v-model="cData" />
      {{ cData }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "GrandChild",
  props: {
    data: String,
    getDataGrandChild: Function,
  },
  data: function () {
    return {
      cData: "",
    };
  },
  watch: {
    cData: function () {
      this.getDataGrandChild(this.cData);
    },
  },
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
