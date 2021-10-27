import { openDB } from "idb";

const dbPromise = openDB("client-store", 1, {
  upgrade(db) {
    db.createObjectStore("client");
  },
});

export default {
  install: (app) => {
    app.mixin({
      methods: {
        get: async function (key) {
          return (await dbPromise).get("client", key);
        },
        set: async function (key, val) {
          return (await dbPromise).put("client", val, key);
        },
        del: async function (key) {
          return (await dbPromise).delete("client", key);
        },
        clear: async function () {
          return (await dbPromise).clear("client");
        },
        all: async function () {
          return (await dbPromise).getAll("client");
        },
        keys: async function () {
          return (await dbPromise).getAllKeys("client");
        },
      },
      //   created() {
      //     console.log("Idb loaded !");
      //   },
    });
  },
};
