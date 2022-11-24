<template>
	<div class="tabs">
		<div class="tabs-header">
			<div
				v-for="(tab, index) in props.tabs"
				:key="index"
				class="tab"
				:class="{ 'is-active': Number(props.value) === index }"
				@click="changeTab(index)"
			>
				<div class="icon"></div>
				<span>{{ tab.name }}</span>
			</div>
		</div>

		<div class="tab-content">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{ tabs: { name: string }[]; value: number | string }>(),
	{
		tabs: () => [],
		value: 0,
	}
)

const emits = defineEmits(['update:value'])

const changeTab = (index: string | number) => {
	emits('update:value', index)
}
</script>

<style lang="scss" scoped>
.tabs {
	::-webkit-scrollbar {
		display: none;
	}
	.tabs-header {
		display: flex;
		width: 200px;
		flex-direction: column;
		max-height: 700px;
		overflow-y: auto;
		scrollbar-width: none;
		padding-left: 15px;
		.tab {
			position: relative;
			margin-top: 54px;
			height: 30px;
			line-height: 30px;
			font-size: 20px;
			color: #3f3429;
			cursor: pointer;
			color: #85817e;
			margin-left: -15px;
			span {
				padding-left: 41px;
			}
			.icon {
				position: absolute;
				left: 0;
				top: 50%;
				height: 30px;
				width: 20px;
				transform: translateY(-50%);
				background: url('~/assets/tab-col-icon.png') no-repeat left center;
			}
			&.is-active {
				color: #3f3429;
				font-weight: bold;
				background: url('~/assets/tab-col-selected.png') no-repeat top center;
				.icon {
					background-image: url('~/assets/tab-col-icon-selected.png');
				}
			}
		}
	}
}
</style>
