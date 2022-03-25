<template>
  <section class="items_grid">
    <div
      v-for="(img, idx) in images"
      :key="idx"
      :class="classes[idx]"
      @mouseenter="vualVisible[idx] = true"
      @mouseleave="vualVisible[idx] = false"
    >
      <img :src="img" :alt="idx" />
      <div v-if="vualVisible[idx]" class="vual">
        <img src="../assets/img/full_screen.png" alt="full" class="vual_full" />
        <img src="../assets/img/big_bag.png" alt="bag" class="vual_bag" />
        <span class="vual_text">Узнай, что на мне</span>
        <div class="vual_love">
          <img
            src="../assets/img/favorite_full.png"
            alt="ff"
            class="vual_love_img"
          />
          <span class="vual_love_count">200</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from "../assets/img/girl-bus.png";
import img2 from "../assets/img/girl-nigga.png";
import img3 from "../assets/img/bear.png";
import img4 from "../assets/img/boy-pauk.png";
import img5 from "../assets/img/boy-basket.png";
export default {
  name: "TheItemsGrid",
  data() {
    return {
      vualVisible: [false, false, false, false, false],

      classes: ["big_pic pic", "pic2 pic", "pic3 pic", "pic4 pic", "pic5 pic"],
      images: [img1, img2, img3, img4, img5],
    };
  },
};
</script>

<style scoped>
.items_grid {
  width: 1388px;
  /* height: 688px; */
  /* background-color: red; */
  margin-top: 32px;
  display: grid;
  column-gap: 16px;
  row-gap: 16px;
  grid-template-columns: repeat(4, 335px);
  grid-template-rows: repeat(2, 336px);
  grid-template-areas:
    "big_pic big_pic pic2 pic3"
    "big_pic big_pic pic4 pic5";
}

@media (max-width: 1389px) {
  .items_grid {
    margin: auto;
    margin-top: 32px;
    width: 688px;
    grid-template-columns: repeat(2, 335px);
    grid-template-rows: repeat(4, 336px);
    grid-template-areas:
      "big_pic big_pic"
      "big_pic big_pic"
      "pic2 pic3"
      "pic4 pic5";
  }
}

@media (max-width: 740px) {
  .items_grid {
    margin: auto;
    margin-top: 32px;
    width: 374px;
    column-gap: 8px;
    row-gap: 8px;
    grid-template-columns: repeat(2, 183px);
    grid-template-rows: repeat(4, 183px);
    grid-template-areas:
      "big_pic big_pic"
      "big_pic big_pic"
      "pic2 pic3"
      "pic4 pic5";
  }
  .items_grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .vual {
    display: none;
  }
}

.big_pic {
  grid-area: big_pic;
}
.pic2 {
  grid-area: pic2;
}
.pic3 {
  grid-area: pic3;
}
.pic4 {
  grid-area: pic4;
}
.pic5 {
  grid-area: pic5;
}
.pic {
  cursor: pointer;
  position: relative;
  z-index: 0;
}
.vual {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: #333333;
  opacity: 0.7;
}
/* .vual:hover {
  display: block;
} */

.vual span {
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.04em;
}
.vual_full {
  position: absolute;
  left: 89%;
  top: 3.5%;
}
.vual_bag {
  position: absolute;
  left: calc(50% - 24px);
  top: calc(50% - 24px);
}
.vual_text {
  position: absolute;
  left: calc(50% - 66px);
  top: calc(50% + 24px);
}
.vual_love {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: calc(100% - 40px);
  left: calc(50% - 26px);
}
</style>
