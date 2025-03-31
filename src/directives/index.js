// 定义图片懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin ={
    install (app){
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el:指令绑定的那个元素，在这里指img
                // binding：bingding.value  指令等于号后面绑定的表达式的值  在这里指图片
                // console.log(el, binding.value);
               const {stop}= useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                      // console.log(isIntersecting)
                      if (isIntersecting) {
                        // 进入视口区域
                        el.src = binding.value
                        stop()
                      }
                    },
                  )
            }
        })
    }
}