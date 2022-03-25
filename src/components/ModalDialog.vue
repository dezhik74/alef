<template>
  <div class="modal_mask" @click.self="modalClose">
    <div class="modal_container">
      <div v-if="error" class="modal_header red">Ошибка</div>
      <div v-else class="modal_header">Сообщение</div>
      <div class="modal_message">{{ msg }}</div>
      <button class="modal_button" @click="modalClose">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDialog",
  props: {
    msg: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["modalClose"],
  mounted() {
    document.addEventListener("keyup", this.escListener);
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.escListener);
  },
  methods: {
    escListener(e) {
      if (e.code == "Escape") this.$emit("modalClose");
    },
    modalClose() {
      this.escListener("f");
      this.$emit("modalClose");
    },
  },
};
</script>

<style scoped>
.modal_mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
}
.modal_container {
  width: 300px;
  height: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  letter-spacing: 0.04em;
  text-align: center;
}
.modal_header {
  font-weight: 600;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.red {
  color: red;
}
.modal_message {
  font-weight: 400;
  font-size: 16px;
}
.modal_button {
  margin-top: 30px;
}
</style>
