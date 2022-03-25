<template>
  <section class="img_container">
    <img
      :src="dataImage ? dataImage : model.leftImage"
      alt="left image"
      class="left_image"
    />
    <div class="thumbs">
      <img
        v-for="(img, idx) in model.thumbs"
        :key="idx"
        :src="img"
        :alt="`thumb-${idx}`"
        class="thumb"
        @click="onThumbClick"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "TheItemImgs",
  props: {
    model: {
      type: Object,
    },
  },
  data() {
    return {
      dataImage: null,
    };
  },
  methods: {
    onThumbClick(event) {
      this.dataImage = event.target.src;
    },
  },
};
</script>

<style scoped>
.img_container {
  margin-right: 16px;
  height: 880px;
  width: 686px;
  position: relative;
}
.left_image {
  height: 100%;
  width: 100%;
}
.thumbs {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 26px;
  left: 24px;
}
.thumb {
  margin-bottom: 7px;
  width: 70px;
  height: 91px;
  cursor: pointer;
}
.thumb:hover {
  border: 1px solid gray;
  /* box-shadow: 0px 0px 8px  8px rgba(192, 202, 27, 0.2); */
}
@media (max-width: 740px) {
  .img_container {
    height: 480px;
    width: 375px;
    margin: auto;
  }
  .thumb {
    width: 40px;
    height: 52px;
  }
}
</style>
