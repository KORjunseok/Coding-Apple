<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div v-if="step == 0">
      <Post
        :인스타데이터="인스타데이터[i]"
        v-for="(a, i) in 인스타데이터"
        :key="i"
      />
      <!-- <Post :인스타데이터="인스타데이터"/>
    <Post :인스타데이터="인스타데이터"/> -->
    </div>

    <div v-if="step == 1">
      <!-- 필터선택페이지 -->
      <div :class="선택한필터" class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="filters">
        <FilterBox :필터="필터" :이미지="이미지" v-for="필터 in 필터들" :key="필터">
          <span style="color:blueviolet">{{ 필터 }}</span>
          <!-- <template v-slot:a> <span>데이터1</span></template>
          <template v-slot:b> 데이터2</template> -->
        </FilterBox>


      </div>
    </div>

    <div v-if="step == 2">
      <!-- 글작성페이지 -->
      <div :class="선택한필터" class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
    </div>
  </div>

  <div v-if="step == 3">
  <MyPage/>

  </div>
</template>




<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue"
import MyPage from './MyPage.vue'

export default {
  name: "containerVue",
  data(){
    return {
    필터들 : [ "aden", "_1977", "brannan", "ㄴbrooklyn", "clarendon", "earlybird", "gingham", "hudson", 
    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    선택한필터: '',
  }
},
  props: {
    인스타데이터: Array,
    step: Number,
    이미지: String
  },
  mounted(){
    this.emitter.on('박스클릭함', (a) => {
      this.선택한필터 = a
      // console.log("무야호",a)
    })
  },
  components: {
    Post: Post,
    FilterBox : FilterBox,
    // eslint-disable-next-line vue/no-unused-components
    MyPage : MyPage
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
