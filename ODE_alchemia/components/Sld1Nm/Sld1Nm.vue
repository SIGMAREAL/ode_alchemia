<template>
	<label class="label" @click="toggleChecked">
		<div class="toggle" :class="{ 'checked': isChecked }">
			
			<input class="toggle-state" type="checkbox" name="check" v-model="isChecked">
			<div class="indicator">滑动开始定制</div>
		</div>
	</label>
</template>

<script>
	export default {
		name: "Sld1Nm",
		data() {
			return {
				isChecked: false
			};
		},
		methods: {
			toggleChecked() {
				this.isChecked = !this.isChecked;
			}
		}
	}
</script>

<style scoped>
	.label {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		color: #394a56;
	}

	.label-text {
		margin-left: 16px;
	}

	.toggle {
		isolation: isolate;
		position: relative;
		height: 7vh;
		width: 75vw;
		border-radius: 15px;
		overflow: hidden;
		box-shadow: -8px -4px 8px 0px #ffffff,
			8px 4px 12px 0px #d1d9e6,
			4px 4px 4px 0px #d1d9e6 inset,
			-4px -4px 4px 0px #ffffff inset;
	}

	.toggle-state {
		display: none;
	}

	.indicator {
		height: 100%;
		width: 200%;
		background: #ecf0f3;
		border-radius: 15px;
		transform: translate3d(-75%, 0, 0);
		transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
		box-shadow: -8px -4px 8px 0px #ffffff,
			8px 4px 12px 0px #d1d9e6;
	}

	.toggle.checked .indicator {
		transform: translate3d(25%, 0, 0);
	}
</style>
