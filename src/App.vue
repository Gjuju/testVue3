<template>
  <div>
    <div style="border: 2px solid #f00">
      <h2>Parent envoi : <input type="text" v-model="data" /> {{ data }}</h2>
      <h3>Parent recoit de Child : {{ cData }}</h3>

      <Child :data="data" :getDataChild="getDataChild" />
    </div>

    <div style="height: 100px"></div>

    <div style="border: 2px solid #f00">
      <div>
        <div>
          <label for="val">val: </label>
          <input type="text :" v-model="val" @keyup.enter="storeEntry" />
        </div>
        <div>
          <button @click="storeEntry">
            envoyer (sinon, appuies sur enter :-p )
          </button>
        </div>
      </div>
      <List
        v-if="listLenght > 0"
        :malist="malist"
        :deleteEntry="deleteEntry"
        :editEntry="editEntry"
      />
    </div>
  </div>
</template>

<script>
import Child from "./components/Child.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Child,
    List,
  },
  data: function () {
    return {
      data: "",
      cData: "",
      val: "",
      currentId: undefined,
      lastId: undefined,
      listLenght: 0,
      malist: [],
    };
  },
  computed: {},
  mounted() {
    this.getAllEntries();
  },
  methods: {
    getDataChild: function (dat) {
      this.cData = dat;
    },
    storeEntry: function () {
      let id = this.lastId;
      if (this.currentId != undefined) {
        id = this.currentId;
      }
      this.set(id, { id: id, user: this.val })
        .then(() => {
          this.getAllEntries();
          this.val = "";
          this.currentId = undefined;
        })
        .catch((err) => console.log(err));
    },
    deleteEntry: function (item) {
      this.del(item.id)
        .then(() => {
          this.getAllEntries();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editEntry: function (item) {
      this.currentId = item.id;
      this.val = item.user;
      // this.del(item.id)
      //   .then(() => {
      //     this.getAllEntries();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    getAllEntries: async function () {
      return await this.all()
        .then((data) => {
          this.lastId = data.length;
          this.listLenght = data.length;
          this.malist = data;
          //console.log(data, this.lastId);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
