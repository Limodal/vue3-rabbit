// 封装分类数据相关的代码
import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category";
import { onMounted } from "vue";

export function useCategory (){
    const categoryData =ref({})
const route =useRoute()
const getCategory=async(id=route.params.id)=>{
  const res=await getCategoryAPI(id)
  categoryData.value=res.result
}

onMounted(()=>{
  // onUpdated(()=>getCategory())
  getCategory()
})
// 目标：在路由参数变化的时候   可以把分类数据接口重新发送
onBeforeRouteUpdate((to)=>{
  // console.log("路由变化了")
  // 存在问题：使用最新的路由参数请求最新的分类数据
  // console.log(to)
  getCategory(to.params.id)
})

return {
    categoryData
}
}