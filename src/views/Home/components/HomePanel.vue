<script setup>
// 定义props
defineProps({
  // 传入的参数类型
  title: {
    // 主标题
    type: String,
    default: '新鲜好物',
  },
  subTitle: {
    // 副标题
    type: String,
    default: '人气推荐',
  },
})

</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small> {{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
       <div>
        <slot ></slot>
       </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>