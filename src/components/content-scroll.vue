<template>
	<div class="content-wrap">
		<div class="content-bg">
			<div class="container">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content-wrap {
	.content-bg {
		background: url('~/assets/content-bg.png') no-repeat left top;
		height: 730px;
		width: 1550px;
		padding: 12px;
		.container {
			max-height: 100%;
			overflow-y: auto;
		}
	}
}
</style>
