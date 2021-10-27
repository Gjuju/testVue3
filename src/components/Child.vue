<template>
  <div style="border: 2px solid #0f0; width: 90%">
    <h2>Child recoit de Parent : {{ data }}</h2>
    <h3>Child recoit de GrandChild : {{ cData }}</h3>

    <GrandChild :data="data" :getDataGrandChild="getDataGrandChild" />
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue";

export default {
  name: "Child",
  components: {
    GrandChild,
  },
  props: {
    data: String,
    data2: String,
    getDataChild: Function,
  },
  data: function () {
    return {
      cData: "",
    };
  },
  methods: {
    getDataGrandChild: function (dat) {
      this.cData = dat;
    },
  },
  watch: {
    cData: function () {
      this.getDataChild(this.cData);
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
