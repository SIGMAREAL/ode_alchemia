<template>
	<div class="radiogroup">
		<div class="wrapper">
			<input value="a" id="a" name="app" type="radio" class="state" />
			<label for="a" class="label">
				<div class="indicator"></div>
				<span class="text">订制</span>
			</label>
		</div>
		<div class="wrapper">
			<input value="b" id="b" name="app" type="radio" class="state" />
			<label for="b" class="label">
				<div class="indicator"></div>
				<span class="text">预制</span>
			</label>
		</div>
		<div class="wrapper">
			<input value="c" id="c" name="app" type="radio" class="state" />
			<label for="c" class="label">
				<div class="indicator"></div>
				<span class="text">我的</span>
			</label>
		</div>

	</div>

</template>

<script>
	export default {
		name: "BtmBar",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.radiogroup {
	  display: flex;
	  padding: 2.5vh 5vw;
	  border-radius: 16px;
	  background: #ecf0f3;
	  box-shadow: 4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
	}
	
	.wrapper {
	  margin: 8px 0;
	  margin-right: 20rpx;
	}
	
	.state {
	  position: absolute;
	  top: 0;
	  right: 0;
	  opacity: 1e-5;
	  pointer-events: none;
	}
	
	.label {
	  display: inline-flex;
	  align-items: center;
	  cursor: pointer;
	  color: #394a56;
	}
	
	.text {
	  margin-left: 8px;
	  opacity: 0.6;
	  transition: opacity 0.2s linear, transform 0.2s ease-out;
	}
	
	.indicator {
	  position: relative;
	  border-radius: 50%;
	  height: 50px;
	  width: 50px;
	  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
	  overflow: hidden;
	}
	
	.indicator::before,
	.indicator::after {
	  content: "";
	  position: absolute;
	  top: 10%;
	  left: 10%;
	  height: 80%;
	  width: 80%;
	  border-radius: 50%;
	}
	
	.indicator::before {
	  box-shadow: -4px -2px 4px 0px #d1d9e6, 4px 2px 8px 0px #fff;
	}
	
	.indicator::after {
	  background-color: #ecf0f3;
	  box-shadow: -4px -2px 4px 0px #fff, 4px 2px 8px 0px #d1d9e6;
	  transform: scale3d(1, 1, 1);
	  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
	}
	
	/* 使用相邻兄弟选择器 + 来选择下一个相邻的兄弟元素 */
	.state:checked + .label .indicator::after {
	  transform: scale3d(0.975, 0.975, 1) translate3d(0, 10%, 0);
	  opacity: 0;
	}
	
	.state:focus + .label .text {
	  transform: translate3d(8px, 0, 0);
	  opacity: 1;
	}
	
	.label:hover .text {
	  opacity: 1;
	}

</style>