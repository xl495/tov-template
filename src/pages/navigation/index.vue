<template>
	<div class="navigation-wrap" @click="isFocus = false">
		<div class="navigation-bar-wrap">
			<div class="navigation-bar">
				<div class="navigation-input-wrap" @click.stop>
					<input class="navigation-input" type="text" @focus="isFocus = true" />
					<button class="navigation-input-btn">导航</button>
				</div>
				<button class="navigation-input-back">回到当前位置</button>
			</div>
			<el-collapse-transition>
				<div v-if="isFocus" class="tabs-wrap" @click.stop="isFocus = true">
					<div class="mian-tabs">
						<tabs v-model:value="currentTab" :tabs="tabsData" />
					</div>
					<el-divider style="--el-border-color: #9f6c30; border-top-width: 2px">
						<span style="color: #ada8a5; font-size: 20px">子科室</span>
					</el-divider>
					<div class="sub-tabs">
						<div class="sub-tab">心内科</div>
					</div>
				</div>
			</el-collapse-transition>
		</div>

		<content-scroll style="margin-top: 68px; position: relative">
			<div class="floor-wrap">
				<tabs v-model:value="currentFloorTab" :tabs="floorTabsData" />
			</div>
			<div class="storey-wrap">
				<div class="storey-line"></div>
				<div class="storey">123</div>
			</div>
			<div class="model-wrap">
				<model-map />
			</div>
		</content-scroll>
	</div>
</template>

<script setup lang="ts">
import modelMap from './model-map.vue'

type ItabType = {
	name: string
}[]

const tabsData = ref<ItabType>([
	{
		name: '内科',
	},
	{
		name: '外科',
	},
	{
		name: '妇科',
	},
	{
		name: '男科',
	},
	{
		name: '儿科',
	},
	{
		name: '眼科',
	},
	{
		name: '耳鼻咽喉科',
	},
	{
		name: '口腔科',
	},
	{
		name: '皮肤科',
	},
	{
		name: '康复医学科',
	},
	{
		name: '中医科',
	},
	{
		name: '麻醉科',
	},
	{
		name: '医学影像科',
	},
	{
		name: '医学检验科',
	},
])

const floorTabsData = ref<ItabType>([
	{
		name: '院区总览',
	},
	{
		name: 'A楼',
	},
	{
		name: 'B楼',
	},
	{
		name: 'C楼',
	},
])

const currentFloorTab = ref(0)

const isFocus = ref<boolean>(false)

const currentTab = ref(0)
</script>

<style scoped></style>

<route>
	{
		meta: {
			layout: 'introduction',
			leftTitle: '楼层导航',
		}
	}
</route>

<style lang="scss">
.navigation-wrap {
	width: 100%;
	padding-left: 75px;
	.navigation-bar-wrap {
		position: relative;
	}
	.tabs-wrap {
		position: absolute;
		top: calc(100% + 7px);
		left: 0;
		right: 94px;
		z-index: 1000;
		background: #ffffff;
		border: 2px solid #be9864;
		box-shadow: 0px 10px 26px 0px rgba(63, 52, 41, 0.3);
		border-radius: 12px;
		.mian-tabs {
			padding: 24px 0;
			display: flex;
			justify-content: center;
		}
	}

	.navigation-bar {
		display: flex;
		justify-content: space-between;
		padding-right: 94px;
		.navigation-input-wrap {
			width: 642px;
			height: 58px;
			background: #ffffff;
			border: 2px solid #be9864;
			border-radius: 28px;
			position: relative;
			.navigation-input {
				border-radius: 28px;
				height: 100%;
				width: 100%;
				padding: 0 24px;
				font-size: 24px;
				font-weight: 500;
				color: #3f3429;
			}
			.navigation-input-btn {
				position: absolute;
				top: 5px;
				right: 5px;
				width: 80px;
				height: 44px;
				background: linear-gradient(-90deg, #ecc98c, #c9975c);
				border-radius: 22px;
				font-size: 20px;
				font-family: Source Han Serif CN;
				font-weight: 600;
				color: #3f3429;
			}
		}
		.navigation-input-back {
			margin-top: 5px;
			font-size: 20px;
			font-family: Source Han Serif CN;
			font-weight: 600;
			color: #3f3429;
			width: 160px;
			height: 44px;
			background: linear-gradient(-90deg, #ecc98c, #c9975c);
			border-radius: 22px;
		}
	}

	.floor-wrap {
		position: absolute;
		top: 40px;
		left: 36px;
		right: 0;
		z-index: 2;
	}

	.storey-wrap {
		position: absolute;
		top: 110px;
		left: 0;
		right: 0;
		.storey {
			position: relative;
			z-index: 2;
		}
		.storey-line {
			position: absolute;
			top: 12px;
			left: 0;
			height: 2px;
			width: 1550px;
			background-color: #be9864;
		}
	}

	.model-wrap {
		width: 100%;
		height: 100%;
	}
}
</style>
