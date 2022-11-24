<template>
	<div class="hospital-content">
		<div
			v-if="result"
			v-loading="loading"
			class="content-text"
			v-html="result.NewsContent"
		></div>
	</div>
</template>

<script setup lang="ts">
import { useRequest } from 'vue-request'
import { getNewsList } from '~/api/news'

const { data, loading } = await useRequest(getNewsList, {
	manual: false,
})

const result = computed(() => {
	if (!data.value) return
	return data.value?.Data.find((item: any) => {
		return item.NewsTitle === '医院简介'
	})
})
</script>

<style scoped lang="scss">
.hospital-content {
	// padding: 111px;
	overflow-y: auto;
	max-height: 100%;
	margin-right: 70px;
	padding-right: 30px;
}
</style>
<route>
	{
		meta: {
			layout: 'custom',
			title: '医院简介'
		}
	}
</route>
