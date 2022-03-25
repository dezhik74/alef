<template>
  <footer class="footer_container">
    <div class="footer_col">
      <span>ПОКУПАТЕЛЯМ</span>
      <span>Каталог</span>
      <span>Акции</span>
      <span>Бренды</span>
    </div>
    <div class="footer_col">
      <span>О НАС</span>
      <span>О Компании</span>
      <span>Новости</span>
      <span>Команда</span>
    </div>
    <div class="footer_col email_col">
      <span>Узнайте первыми о новинках и акциях </span>
      <div class="email_input">
        <input
          v-model="email"
          type="text"
          placeholder="Адрес электронной почты"
        />
        <img
          class="email_cancel"
          src="../assets/img/close.png"
          @click="onEmailCancel"
        />
      </div>
      <div class="email_button" @click="onEmailSubmit">Подписаться</div>
    </div>
    <!-- <EmailForm /> -->
  </footer>
</template>

<script>
// import EmailForm from "./EmailForm.vue";

export default {
  name: "TheFooter",
  emits: ["wrongEmail"],
  // components: { EmailForm },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    onEmailCancel() {
      this.email = "";
    },
    onEmailSubmit() {
      const reg = /^[\w\-.]+@[\w]+\.[\w]{2,6}$/i;
      if (this.email === "" || !reg.test(this.email)) this.$emit("wrongEmail");
      else this.email = "";
    },
  },
};
</script>

<style>
.footer_container {
  margin-top: 130px;
  margin-bottom: 126px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  font-weight: 400;
  letter-spacing: 0.04em;
}
.footer_col {
  display: flex;
  flex-direction: column;
}
.footer_col span {
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}
.footer_col span:first-child {
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
  cursor: default;
}
.footer_col span:nth-child(2) {
  margin-top: 16px;
}
.email_col {
  text-transform: uppercase;
}
.email_input input {
  width: 100%;
  height: 44px;
  margin-top: 33px;
  border: none;
  border-bottom: 1px solid #c4c4c4;
}
.email_input input:focus {
  outline: none;
}
.email_cancel {
  position: relative;
  left: calc(100% - 20px);
  top: -30px;
  cursor: pointer;
}
.email_button {
  margin-top: 25px;
  width: 150px;
  height: 36px;
  border: 1px solid #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  text-transform: none;
  align-self: flex-end;
}
@media (max-width: 1389px) {
  .footer_container {
    max-width: 420px;
    margin: auto;
    margin-bottom: 186px;
  }
  .email_col {
    margin-top: 58px;
  }
  .footer_col {
    margin-top: 42px;
  }
}
</style>
