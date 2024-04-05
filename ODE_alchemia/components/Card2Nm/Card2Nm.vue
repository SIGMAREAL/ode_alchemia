<template>
	
	<div class="card">
			<text class="toptext">ODE ALCHEMIA</text>
			<div class="space"></div>
			<Btn1Nm text="ode" :onClick="handleButtonClick"></Btn1Nm>
			<div class="space"></div>
			<Btn1Nm text="今天的世界是什么气味" :onClick="handleButtonClick"></Btn1Nm>
			<div class="space"></div>
			<Btn1Nm text="ode" :onClick="handleButtonClick"></Btn1Nm>
			<div class="space"></div>
			<Sld1Nm></Sld1Nm>
			<div class="space"></div>
			<text>气味。情绪。世界</text>
	</div>
	
</template>

<script>
	export default {
		name:"Card2Nm",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.space{
		height: 5vh; /* 设置空间的高度 */
	}
	
	.image{
		z-index: -1;
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
</style>