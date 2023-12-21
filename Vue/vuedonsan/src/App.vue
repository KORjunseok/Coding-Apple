<template>

  <div class="menu">

    <a v-for = "a in 메뉴들" :key="a">{{ a }}</a>

  </div>

  <div> 
    <h4 v-for = "원룸이름 in products" :key ="원룸이름">{{ 원룸이름 }}</h4>
    <p v-for = "가격 in 가격들" :key ="가격">{{ 가격 }}</p>

  </div>
  <!-- <div> -->
   <!-- {{ 데이터바인딩 }} -->
    <!-- <h4 >{{ products[0] }}</h4>
    <p>50 만원</p>
  </div>
  <div>
    <h4 >{{ products[1] }}</h4>
    <p>60 만원</p>
  </div>
  <div>
    <h4 >{{ products[2] }}</h4>
    <p>55 만원</p>
  </div> -->
</template>

<script>
export default {
  name: "App",
  // 데이터 보관함 
  data(){
    return{
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      가격들 : [50,60,70]
    }
  },
  components: {},
};
</script>

<style>
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
  color : white;
  padding : 10px
}
</style>
