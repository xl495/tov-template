<template>
	<div class="department-content">
		<div class="tabs-wrap">
			<tabs v-model:value="currentTab" :tabs="tabsData" />
		</div>
		<content-scroll style="margin-top: 68px"> </content-scroll>
		<div class="sub-tabs-wrap">
			<tabs-col v-model:value="currentSubTab" :tabs="subTabsData" />
		</div>
	</div>
</template>

<script setup lang="ts">
import tabs from '~/components/tabs.vue'
import tabsCol from '~/components/tabs-col.vue'
import contentScroll from '~/components/content-scroll.vue'

const tabsData = ref([
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

const currentTab = ref(0)

const currentSubTab = ref(0)

const subTabsData = ref([
	{
		name: '心内科',
	},
	{
		name: '神经内科',
	},
	{
		name: '呼吸内科',
	},
	{
		name: '消化内科',
	},
	{
		name: '肾内科',
	},
	{
		name: '内分泌科',
	},
	{
		name: '血液科',
	},
	{
		name: '心内科',
	},
	{
		name: '神经内科',
	},
	{
		name: '呼吸内科',
	},
	{
		name: '消化内科',
	},
	{
		name: '肾内科',
	},
	{
		name: '内分泌科',
	},
	{
		name: '血液科',
	},
])
</script>

<style scoped lang="scss">
.department-content {
	padding-left: 100px;
	.sub-tabs-wrap {
		position: absolute;
		top: 355px;
		left: 80px;
		bottom: 160px;
		overflow: hidden;
	}
}
</style>

<route>
	{
		meta: {
			layout: 'introduction',
			leftTitle: '科室简介'
		}
	}
</route>
