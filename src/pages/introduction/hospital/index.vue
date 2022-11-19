<template>
	<div class="hospital-content">
		啊科技时代回家卡莎扣税的哈萨克今安徽省打卡机圣诞卡就
		<div class="content-text" v-html="content"></div>
	</div>
</template>

<script setup lang="ts">
import { content } from '../info'
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
			layout: 'custom'
		}
	}
</route>
