<template>



	<div class="container" style="background-image: url('../../static/1.svg');">

		<header class="topbar">
			<TopBar></TopBar>
		</header>
		<main class="content">
			<Card2Nm></Card2Nm>
		</main>
		<footer class="bottombar">
			<BtmBar></BtmBar>
		</footer>
	</div>

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

<style scoped>
	.container {
		display: grid;
		grid-template-rows: auto 1fr auto;
		/* 上中下三个部分分别占据内容的高度 */
		height: 100vh;
		/* 填满整个视口高度 */
		background-size: cover;
		/* 让背景图片充满容器 */
		background-position: center;
		/* 居中背景图片 */
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* 垂直方向排列 */
	}

	.topbar,
	.bottombar {
		/*background-color: #333;*/
		/*color: #fff;*/
		padding: 10px;
	}

	.topbar,
	.bottombar {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>