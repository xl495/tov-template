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
				<span class="tab-text">{{ tab.name }}</span>
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

const emits = defineEmits(['update:value', 'change'])

const changeTab = (index: string | number) => {
	emits('update:value', index)
	emits('change', index)
}
</script>

<style lang="scss" scoped>
.tabs {
	.tabs-header {
		display: grid;
		grid-template-columns: repeat(7, 200px);
		row-gap: 27px;
		column-gap: 12px;
		.tab {
			height: 40px;
			line-height: 40px;
			text-align: center;
			background: url('~/assets/tab.png') no-repeat top center;
			font-size: 20spx;
			font-family: Source Han Serif CN;
			font-weight: 600;
			color: #3f3429;
			cursor: pointer;
			&.is-active {
				background-image: url('~/assets/tab-selected.png');
			}
		}
	}
}
</style>
