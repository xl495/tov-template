<script setup lang="ts">
const links = ref<{ title: string; url: string }[]>([
	{
		title: '医院简介',
		url: '/introduction/hospital',
	},
	{
		title: '科室简介',
		url: '/introduction/department',
	},
	{
		title: '医师简介',
		url: '/introduction/doctor',
	},
	{
		title: '楼层导航',
		url: '/navigation',
	},
])
</script>

<template>
	<div class="index-wrap">
		<span>111</span>
		<div class="sidebar-link">
			<el-button
				v-for="(item, index) in links"
				:key="index"
				@click="$router.push(item.url)"
			>
				{{ item.title }}</el-button
			>
		</div>
	</div>
</template>
