<template>
	<view class="content">

		<div class="space"></div>

		<Card2Nm></Card2Nm>>

		<text>ode</text>
		<Btn1Nm text="Click me" :onClick="handleButtonClick"></Btn1Nm>

		<image src="/static/1.svg"></image>
		<!--image class="logo" src="/static/logo.png"></image-->
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>qq</view>

	</view>
</template>

<script>
	// 导入 Btn1Norm 组件

	export default {
		data() {
			return {
				title: 'Hello'
			};
		},
		mounted() {
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

	};
</script>

<style>
	.space {
		height: 13vh;
		/* 设置空间的高度 */
	}

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