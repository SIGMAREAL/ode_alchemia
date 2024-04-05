<template>

	<div class="card">
		<view class="flex-container">
			<view class="flex-item" style="height: 5vh;">
				<text class="toptext">ODE ALCHEMIA</text>
			</view>
			<view class="flex-item" style="height: 30vh;">
				<!--Btn1Nm text="今天的世界是什么气味" :onClick="handleButtonClick"></Btn1Nm-->
				<image src="cloud://cloud1-6gvwori2b7946e02.636c-cloud1-6gvwori2b7946e02-1324839850/assets/微信图片_20240325224744.png"></image>
				<div class="space"></div>
			</view>
			<view class="flex-item" style="height: 10vh;">
				<Sld1Nm></Sld1Nm>
			</view>
			<view class="flex-item" style="height: 5vh;">
				<text>气味。情绪。世界</text>
			</view>
		</view>
	</div>



</template>

<script>
	export default {
		name: "Card2Nm",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.space {
		height: 5vh;
		/* 设置空间的高度 */
	}

	.image {
	
		margin-right: 2vw;
	}

	.card {
		width: 82vw;
		height: 70vh;
		border-radius: 30px;
		background: #F8F9FA;
		box-shadow: 15px 15px 30px #DEE2E6,
			-15px -15px 30px #ffffff;
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);

		background-color: rgba(255, 255, 255, 0.074);
		border: 1px solid rgba(255, 255, 255, 0.222);
		z-index: -2;
	}

	/* 样式可以根据自己的需求进行调整 */
	.flex-container {
		display: flex;
		flex-direction: column;
		/* 纵向布局 */
		justify-content: space-between;
		/* 垂直方向上平均分布 */
		height: 70vh;
		/* 设置容器高度 */
	}

	.flex-item {

	
		text-align: center;
		padding: 10px;
	}
</style>