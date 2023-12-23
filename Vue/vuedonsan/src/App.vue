<template>
  <ModalVue @closeModal="모달창열렸니 = false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />

  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{ a }}</a>
  </div>

  <Discount />

  <!-- v-for 문을 통한 반복문  -->
  <!-- <div v-for ="(a,i) in products" :key = "i"> -->
  <!-- {{ 데이터바인딩 }} -->
  <!-- <h4 >{{ products[i] }}</h4>
    <p>{{가격들[i]}} 만원</p>
 </div> -->

<CardVue @openModal="모달창열렸니 = true; 누른거 = $event" :원룸 = "원룸들[i]" v-for="(작명,i) in 원룸들" :key="작명"/>

</template>

<script>
import data from "./assets/oneroom";
import Discount from "./Discount.vue";
import ModalVue from "./Modal.vue";
import CardVue from "./Card.vue"

export default {
  name: "App",
  // 데이터 보관함
  data() {
    return {
      오브젝트 : {name : 'kim', age :20},
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      가격들: [50, 60, 70],
    };
  },
  methods: {
    increase(a) {
      this.신고수[a] += 1;
    },
  },

  components: { Discount, ModalVue, CardVue },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
