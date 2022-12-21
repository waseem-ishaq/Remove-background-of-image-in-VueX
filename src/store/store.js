import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { user: "" },
  mutations: {
    saveImage(state, image) {
      state.user = image;
    },
  },
  actions: {
    fetchImageData(context, imag) {
      const formData = new FormData();
      formData.append("size", "auto");
      formData.append("image_file_b64", imag);
      axios({
        method: "post",
        url: "https://api.remove.bg/v1.0/removebg",
        data: formData,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": "Yu8dGS2xtCijLT2bsZ2YqkT4",
        },
        encoding: null,
      })
        .then((response) => {
          var base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          console.log(response.data);
          context.commit("saveImage", base64);
        })
        .catch((error) => {
          return console.error("Request failed:", error);
        });
    },
  },
});
