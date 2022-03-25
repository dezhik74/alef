<template>
  <transition name="header_out">
    <header v-if="showHeader" class="head_cont">
      <div class="logo">LOGO</div>
      <div class="head_images">
        <img class="head_img" :src="personImg" alt="person" />
        <img class="head_img" :src="favoriteImg" alt="favorite" />
        <img class="head_img" :src="bagImg" alt="bag" />
        <DropDownMenu class="head_img drop_menu" />
        <!-- <img class="head_img" src="../assets/img/person.png" alt="person" /> -->
        <!-- <img class="head_img" src="../assets/img/favorite.png" alt="favorite" /> -->
        <!-- <img class="head_img" src="../assets/img/bag.png" alt="bag" /> -->
      </div>
    </header>
  </transition>
</template>

<script>
import personImg from "../assets/img/person.svg";
import favoriteImg from "../assets/img/favorite.svg";
import bagImg from "../assets/img/bag.svg";
import DropDownMenu from "./DropDownMenu.vue";
export default {
  name: "TheHeader",
  components: { DropDownMenu },
  data() {
    return {
      personImg,
      favoriteImg,
      bagImg,
      showHeader: true,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.showHeader = window.scrollY > 50 ? false : true;
    },
  },
};
</script>

<style scoped>
.head_cont {
  width: 1390px;
  display: flex;
  position: fixed;
  top: 0px;
  left: calc(50% - 1390px / 2);
  z-index: 5;
  background-color: white;

  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px 0px #0000001a;
  margin-bottom: 24px;
}
.header_out-enter-active,
.header_out-leave-active {
  transition: opacity 0.5s ease;
}

.header_out-enter-from,
.header_out-leave-to {
  opacity: 0;
}
.logo {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 12px;
  margin-top: 12px;
}
.head_images {
  display: flex;
}
.head_img {
  margin-left: 29px;
  cursor: pointer;
}
.drop_menu {
  display: none;
}
@media (max-width: 1389px) {
  .head_cont {
    width: 686px;
    left: calc(50% - 686px / 2);
    /* margin: auto; */
    margin-bottom: 28px;
  }
}
@media (max-width: 740px) {
  .head_cont {
    width: 375px;
    left: calc(50% - 375px / 2);
    margin-bottom: 28px;
  }
  .drop_menu {
    display: block;
  }
}
</style>
