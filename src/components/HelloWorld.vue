<template>
  <v-container class="d-flex justify-center">
    <div><h1>background Remover</h1></div>
    <div>
      <input
        class="input-filed"
        type="file"
        id="file"
        accept="image/jpeg, image/png, image/jpg"
        @change="uploadImage"
      />
      <div class="drop">Drop you'r image here..</div>
    </div>

    <div class="hMain ma-4">
      <div class="h badar">
        <img :src="previewImage" class="uploading-image" />
      </div>
      <div>
        <v-btn @click="removeBG()" color="error" dark> Covert </v-btn>
      </div>
    </div>
    <div class="hMain ma-4">
      <div class="h badar">
        <img
          :src="'data:image/png;base64,' + Users()"
          alt=""
          class="uploading-image"
        />
      </div>
      <div>
        <v-btn color="info" dark>
          <a
            class="white--text text-decoration-none"
            download
            :href="'data:image/png;base64,' + Users()"
          >
            download</a
          >
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      previewImage: "",
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
    },

    removeBG() {
      this.$store.dispatch("fetchImageData", this.previewImage);
    },
    Users() {
      // save result image
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.hMain {
  width: 300px;
  height: 350px;
}
.h {
  width: 300px;
  height: 300px;
}
.badar {
  border: 1px solid gray;
}
.uploading-image {
  width: 100%;
  height: 100%;
}

input[type="file"] {
  width: 200px;
  height: 200px;
  position: absolute;
  opacity: 0;
}
.drop {
  border: 1px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  display: flex;
  width: 200px;
  height: 200px;
}
</style>
