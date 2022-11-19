<template>
	<div class="department-content">ask大家哈可视对讲哈萨克大家哈萨克</div>
</template>

<script setup lang="ts">
const route = useRoute()

console.log(route.meta)
</script>

<style scoped lang="scss">
.department-content {
}
</style>

<route>
	{
		meta: {
			layout: 'custom'
		}
	}
</route>
