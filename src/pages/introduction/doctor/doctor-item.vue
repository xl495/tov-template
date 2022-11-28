<template>
	<div class="doctor-item-wrap">
		<div class="doctor-item text-center" @click="emits('click', props)">
			<el-image
				:src="props.cover"
				style="width: 11.25rem; height: 15rem; border-radius: 8px"
				lazy
			>
				<template #placeholder>
					<div class="image-slot">Loading<span class="dot">...</span></div>
				</template>
			</el-image>
			<div class="name" v-text="props.name"></div>
			<div class="title" v-text="props.title"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IDoctor } from './types'

const props = withDefaults(defineProps<IDoctor>(), {
	cover:
		'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
	name: '李医生',
	title: '主任医师，博士生导师',
})

const emits = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.doctor-item-wrap {
	.doctor-item {
		padding-bottom: 35px;
		cursor: pointer;
		.name {
			font-size: 20px;
			font-weight: 600;
			color: #3f3429;
		}
		.title {
			font-weight: 400;
			color: #85817e;
		}
	}
}
</style>
