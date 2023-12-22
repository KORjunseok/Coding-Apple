<template>
  <!-- v-if 문법 더 알아야할 내용 -->
  <!-- 위에 있는 v-if가 아닐 경우 v-else 안에 있는 코드 실행  -->
  <div v-if="1 !==1">
    안녕
  </div> 
  <div v-else>
    안녕2
  </div>


  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{ a }}</a>
  </div>

  <!-- v-for 문을 통한 반복문  -->
  <!-- <div v-for ="(a,i) in products" :key = "i"> -->
  <!-- {{ 데이터바인딩 }} -->
  <!-- <h4 >{{ products[i] }}</h4>
    <p>{{가격들[i]}} 만원</p>
 </div> -->

  <div v-for="(a, i) in 원룸들" :key="i">
    <img :src="원룸들[i].image" class="room-img" />
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{ 원룸들[i].title }}</h4>
    <p>{{ 원룸들[i].price }} 원</p>
  </div>

</template>

<script>
import data from "./assets/oneroom";

export default {
  name: "App",
  // 데이터 보관함
  data() {
    return {
      누른거 : 0,
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

  components: {},
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
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
