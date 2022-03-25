<template>
  <section class="data_container">
    <div class="name">
      {{ model.name }}
    </div>
    <div class="articul">Арт. {{ model.articul }}</div>
    <div class="feedback">
      Отзывы
      <div class="feedback_stars">
        <img
          v-for="i of [1, 2, 3, 4, 5]"
          :key="i"
          :src="i > model.stars ? whiteStar : blackStar"
          :alt="i"
        />
      </div>
      {{ model.feebackCount }} отзывов
      <img :src="rigthArrow" alt="r_a" />
    </div>
    <div class="price">
      <div class="discount_price">{{ model.discountPrice }} ₽</div>
      <div class="full_price">{{ model.fullPrice }} ₽</div>
      <div>
        <img :src="rigthArrow" alt="r_a" />
      </div>
    </div>
    <div class="discount_chips">
      <div class="discount_chips_item">
        скидка -{{ model.discountPercent }}%
      </div>
      <div class="discount_chips_item">акция -{{ model.actionPercent }}%</div>
    </div>
    <div>
      <select name="size" class="size_selector">
        <option selected="selected" disabled>Выбрать размер</option>
        <option v-for="(s, idx) in model.sizes" :key="idx" :value="s">
          {{ s }}
        </option>
      </select>
      <img :src="rigthArrow" alt="r_a" class="select_arrow" />
    </div>
    <div class="define_size">Определить размер</div>
    <div class="picker_block">
      <div class="picker">
        <span class="picker_pm" @click="DecCounter">-</span>
        <span>{{ counter }}</span>
        <span class="picker_pm" @click="counter++">+</span>
      </div>
      <div class="cart_button" @click="addToCart">Добавить в корзину</div>
      <div class="love_button" @click="addToFavorites">
        <img class="love_button_img" :src="favoriteImgWhite" alt="favorite" />
      </div>
    </div>
    <div class="define_size">Купить в 1 клик</div>
    <hr class="line" />
    <div class="dop_info_block">
      <div class="dop_info_item">
        <img class="dop_info_img" :src="closesImg" alt="closes" />
        <span>Описание товара</span>
      </div>
      <div class="dop_info_item">
        <img class="dop_info_img" :src="clockImg" alt="clock" />
        <span>Доставка и возврат</span>
      </div>
      <div class="dop_info_item">
        <img class="dop_info_img" :src="payImg" alt="pay" />
        <span>Способы оплаты</span>
      </div>
    </div>
  </section>
</template>

<script>
import whiteStar from "../assets/img/icon_star_white.svg";
import blackStar from "../assets/img/icon_star_black.svg";
import rigthArrow from "../assets/img/arrow right swipe.svg";
import favoriteImgWhite from "../assets/img/favorite_white.svg";
import closesImg from "../assets/img/Closes.svg";
import payImg from "../assets/img/pay.svg";
import clockImg from "../assets/img/clock.svg";

export default {
  name: "TheItemData",
  props: {
    model: {
      type: Object,
    },
  },
  emits: ["addToCart"],
  data() {
    return {
      whiteStar,
      blackStar,
      rigthArrow,
      favoriteImgWhite,
      closesImg,
      payImg,
      clockImg,
      counter: 1,
    };
  },
  methods: {
    DecCounter() {
      this.counter = this.counter === 1 ? this.counter : this.counter - 1;
    },
    addToCart() {
      this.$emit("addToCart", [this.model.name, this.counter, "корзину"]);
    },
    addToFavorites() {
      this.$emit("addToCart", [this.model.name, this.counter, "избранное"]);
    },
  },
};
</script>

<style scoped>
.data_container {
  height: 880px;
  width: 686px;
  /* border: 1px solid black; */
  /* flex-shrink: 5; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 0.04em;
}
.name {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 24px;
  margin-left: 20px;
}
.articul {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #828282;
  margin-top: 8px;
  margin-left: 20px;
}
.feedback {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 20px;
  margin-top: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.feedback_stars {
  margin-left: 13px;
  margin-right: 5px;
  position: relative;
  top: 2px;
}
.price {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 46px;
  cursor: pointer;
}
.discount_price {
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin-right: 12px;
}
.full_price {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-right: 12px;
  text-decoration: line-through;
  color: #828282;
}
.discount_chips {
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-left: 20px;
  font-weight: 400;
  font-size: 12px;
}
.discount_chips_item {
  line-height: 24px;
  width: 86px;
  height: 24px;
  border: 1px solid #333333;
  margin-right: 6px;
  text-align: center;
}
.size_selector {
  margin-top: 32px;
  margin-left: 20px;
  width: 315px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  border: 1px solid #333333;
  padding-left: 16px;
  appearance: none;
}
.select_arrow {
  position: relative;
  top: 6px;
  left: -34px;
  transform: rotate(90deg);
}
.define_size {
  margin-left: 20px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: underline;
  cursor: pointer;
}
.picker_block {
  margin-left: 20px;
  margin-top: 40px;
  height: 44px;
  display: flex;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.picker {
  background-color: #f2f2f2;
  width: 145px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 12px;
}
.picker_pm {
  cursor: pointer;
  width: 20px;
}
.cart_button {
  cursor: pointer;
  width: 203px;
  height: 44px;
  line-height: 44px;
  background-color: #333333;
  color: white;
  text-align: center;
  border: 1px solid #333333;
  margin-right: 4px;
}
.love_button {
  cursor: pointer;
  width: 44px;
  height: 44px;
  border: 1px solid #333333;
  background-color: #333333;
  color: white;
  position: relative;
}
.love_button_img {
  position: absolute;
  top: 10px;
  left: 10px;
}
.line {
  border: 0.5px solid #c4c4c4;
  width: 100%;
}
.dop_info_block {
  margin-left: 20px;
  margin-top: 24px;
  position: relative;
}
.dop_info_item {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
}
.dop_info_item img {
  margin-right: 4px;
  position: relative;
  top: 5px;
}

@media (max-width: 740px) {
  .data_container {
    width: 375px;
    margin: auto;
  }
  .picker_block {
    flex-wrap: wrap;
    height: auto;
  }
  .picker {
    margin-bottom: 15px;
  }
}
</style>
