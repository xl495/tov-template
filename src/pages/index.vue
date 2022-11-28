<script setup lang="ts" name="index">
const links = ref<{ title: string; image: string; url: string }[]>([
	{
		title: '医院简介',
		image: 'hospital',
		url: '/introduction/hospital',
	},
	{
		title: '科室简介',
		image: 'department',
		url: '/introduction/department',
	},
	{
		title: '医师简介',
		image: 'doctor',
		url: '/introduction/doctor',
	},
	{
		title: '楼层导航',
		image: 'navigation',
		url: '/navigation',
	},
])

const getImage = (name: string): string => {
	return new URL(`/src/assets/index/${name}.png`, import.meta.url).href
}
</script>

<template>
	<div class="index-wrap">
		<div class="sidebar-link-wrap">
			<div class="sidebar-link">
				<div
					v-for="(item, index) in links"
					:key="index"
					class="sidebar-link-image"
					@click="$router.push(item.url)"
				>
					<el-image
						style="width: 386px; height: 164px"
						:src="getImage(item.image)"
						fit="contain"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.index-wrap {
	background: no-repeat url('../assets/index/bg.png') center;
	height: 100vh;
	max-height: 1080px;
	.sidebar-link-wrap {
		position: absolute;
		top: 0;
		left: 50px;
		bottom: 0;
		padding: 133px 0;
	}
	.sidebar-link {
		display: flex;
		flex-direction: column;
		width: 120px;
	}
	.sidebar-link-image {
		margin-top: 33px;
		cursor: pointer;
	}
}
</style>
