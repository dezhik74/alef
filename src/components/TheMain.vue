<template>
  <main class="main">
    <TheItemImgs :model="model" />
    <TheItemData :model="model" @add-to-cart="$emit('addToCart', $event)" />
  </main>
  <div class="look_styles">Посмотреть все стили</div>
  <TheItemsGrid />
</template>

<script>
import TheItemData from "./TheItemData.vue";
import TheItemImgs from "./TheItemImgs.vue";
import TheItemsGrid from "./TheItemsGrid.vue";

import getDataFromAPI from "../utils/getDataFromAPI.js";

export default {
  name: "TheMain",
  components: { TheItemData, TheItemImgs, TheItemsGrid },
  emits: ["addToCart"],
  data() {
    return {
      model: {
        thumbs: [],
        leftImage: null,
        name: "",
        articul: "",
        stars: 0,
        feebackCount: 0,
        discountPrice: 0,
        fullPrice: 0,
        discountPercent: 0,
        actionPercent: 0,
        sizes: [],
      },
    };
  },
  async mounted() {
    this.model = await getDataFromAPI();
  },
};
</script>

<style scoped>
.main {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.look_styles {
  text-align: center;
  margin-top: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
}

@media (max-width: 1389px) {
  .main {
    flex-direction: column;
    max-width: 688px;
    margin: auto;
  }
  .look_styles {
    margin-top: -250px;
  }
}
</style>
