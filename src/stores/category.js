import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';


export const useCategoryStore = defineStore('category', () => {
//   导航列表的逻辑
// state导航列表数据
    const categoryList = ref([])

    // action获取数据的方法
    const getCategory =async()=>{
    const res=await getCategoryAPI()
    console.log("categorystore的数据为：",res)
    categoryList.value=res.result
    }
    return {categoryList,getCategory}
})
