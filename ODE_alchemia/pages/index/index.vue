<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>qq</view>
		<Btn1Norm text="Click me" :onClick="handleButtonClick" />
	</view>
</template>

<script>
// 导入 Btn1Norm 组件
import Btn1Norm from '@/components/button/Btn1Norm.vue'; // 请根据你的实际路径修改

export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    // 在页面加载时执行的逻辑
  },
  methods: {
    // 点击事件处理函数
    handleButtonClick() {
      uni.showToast({
        title: 'Button clicked!',
        icon: 'none'
      });
    }
  },
  components: {
    Btn1Norm // 注册 Btn1Norm 组件
  }
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
