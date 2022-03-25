<template>
  <TheHeader />
  <div class="main_container">
    <TheMain @add-to-cart="addToCart" />
    <TheFooter @wrong-email="wrongEmail" />
  </div>
  <ModalDialog
    v-if="showModal"
    :msg="modalMsg"
    :error="modalError"
    @modal-close="modalClose"
  />
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";
import ModalDialog from "./components/ModalDialog.vue";
export default {
  name: "App",
  components: { TheHeader, TheMain, TheFooter, ModalDialog },
  data() {
    return {
      showModal: false,
      modalMsg: "",
      modalError: false,
    };
  },
  methods: {
    addToCart([name, num, destination]) {
      this.modalMsg = `Товар ${name} в количестве ${num} единиц добавлен в ${destination}`;
      this.modalError = false;
      this.showModal = true;
    },
    wrongEmail() {
      this.modalMsg = "Неправильная почта!";
      this.modalError = true;
      this.showModal = true;
    },
    modalClose() {
      this.modalMsg = "";
      this.modalError = false;
      this.showModal = false;
    },
  },
};
</script>
<style>
#app {
  font-family: "Open Sans", sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #333333;
  margin-top: 60px;
  box-sizing: border-box;
}
.main_container {
  max-width: 1390px;
  margin: auto;
}
</style>
