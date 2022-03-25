<template>
  <div>
    <div class="button_wrapper">
      <img :src="menuIcon" alt="menu" @click="closeOpen" />
      <div v-if="showMenu" ref="menu" class="menu_cont">
        <img
          :src="closeIcon"
          alt="close"
          class="close_icon"
          @click.stop="closeOpen"
        />
        <span>постельное белье</span>
        <span>одежда для дома</span>
        <span>одежда для улицы</span>
        <span>выход</span>
      </div>
    </div>
  </div>
</template>

<script>
import menuIcon from "../assets/img/menu.svg";
import closeIcon from "../assets/img/close-black.svg";
export default {
  name: "DropDownMenu",
  data() {
    return {
      menuIcon,
      closeIcon,
      showMenu: false,
    };
  },
  // mounted() {
  //   document.addEventListener("click", this.clickListener);
  // },
  beforeUnmount() {
    document.removeEventListener("click", this.clickListener);
  },
  methods: {
    closeOpen() {
      if (!this.showMenu) {
        document.addEventListener("click", this.clickListener);
        this.showMenu = true;
      } else {
        document.removeEventListener("click", this.clickListener);
        this.showMenu = false;
      }
    },
    clickListener(e) {
      // console.log("event=>", e.pageY, this.$refs.menu.clientHeight);
      if (e.pageY > this.$refs.menu.clientHeight) this.closeOpen();
    },
  },
};
</script>

<style scoped>
.button_wrapper {
  /* position: relative; */
}
.menu_cont {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 5;
  height: 277px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  opacity: 1;
}
.close_icon {
  margin-top: 23px;
  margin-right: 25px;
  width: 24px;
  height: 24px;
  align-self: flex-end;
  cursor: pointer;
}
.menu_cont span {
  margin-top: 30px;
  margin-left: 30px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.menu_cont span:first-child {
  margin-top: 43px;
}
</style>
