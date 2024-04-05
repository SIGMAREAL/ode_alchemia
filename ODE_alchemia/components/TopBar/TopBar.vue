<template>
	
	<div class="radio-inputs">
		<TopAvatar></TopAvatar>
		<label class="radio">
			<input type="radio" name="radio" checked="">
			<span class="name">订制</span>
		</label>
		<label class="radio">
			<input type="radio" name="radio">
			<span class="name">预制</span>
		</label>

		<label class="radio">
			<input type="radio" name="radio">
			<span class="name">我的</span>
		</label>
	</div>
</template>

<script>
	export default {
		name: "TopBar",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.radio-inputs {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		border-radius: 0.5rem;
		background-color: #EEE;
		box-sizing: border-box;
		box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
		padding: 0.25rem;
		width: 300px;
		font-size: 14px;
	}

	.radio-inputs .radio {
		flex: 1 1 auto;
		text-align: center;
	}

	.radio-inputs .radio input {
		display: none;
	}

	.radio-inputs .radio .name {
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		border: none;
		padding: .5rem 0;
		color: rgba(51, 65, 85, 1);
		transition: all .15s ease-in-out;
	}

	.radio-inputs .radio input:checked+.name {
		background-color: #fff;
		font-weight: 600;
	}
</style>