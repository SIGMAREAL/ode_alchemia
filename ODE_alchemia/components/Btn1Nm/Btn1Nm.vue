<template>
  <view class="button" @click="handleClick">
    <text class="button-text">{{ buttonText }}</text>
  </view>
</template>

<script setup>
// 导入 Vue Composition API
import { ref, defineProps } from 'vue';

// 使用 defineProps 定义组件接收的属性
const props = defineProps({
  text: {
    type: String,
    default: 'Button' // 默认按钮文字
  },
  onClick: {
    type: Function,
    default: () => {} // 默认点击事件处理函数
  }
});

// 使用 ref 定义响应式数据
const buttonText = ref(props.text);

// 点击事件处理函数
const handleClick = () => {
  props.onClick(); // 触发点击事件
};
</script>

<style scoped>
/* 可选的样式 */


.button-text {
  /*color: #fff;*/
  font-size: 16px;
  /*position: absolute;*/
  align-self: center;
}


.button {
  width: 60vw;
  height: 5vh;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  z-index: 3;
}

.button:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

</style>