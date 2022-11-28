<script lang="ts" setup>
const route = useRoute()

const leftTitle = ref({
	title: route.meta.leftTitle || '医院简介',
	subTitle: route.meta.leftSubTitle || 'Hospital profile',
})
</script>
<template>
	<div class="layout-introduction-wrap">
		<router-view v-slot="{ Component, route }">
			<Transition name="el-fade-in-linear">
				<div class="content">
					<keep-alive>
						<suspense>
							<template #default>
								<component :is="Component" :key="route.path" />
							</template>
							<template #fallback> Loading... </template>
						</suspense>
					</keep-alive>
				</div>
			</Transition>
		</router-view>
		<div class="back-wrap">
			<el-button
				class="back"
				color="linear-gradient(45deg, #ECC98C, #D0A064);"
				size="large"
				circle
				@click="$router.back()"
			>
				<template #icon>
					<el-icon size="24"><House /></el-icon>
				</template>
			</el-button>
		</div>
		<div class="title-wrap">
			<div class="sub-title">{{ leftTitle.subTitle }}</div>
			<div class="title">{{ leftTitle.title }}</div>
		</div>
	</div>
</template>

<style lang="scss">
.title-wrap {
	position: absolute;
	top: 65px;
	left: 68px;
	display: flex;
	flex-direction: row;
	.sub-title {
		writing-mode: vertical-lr;
		color: #845f38;
		width: 18px;
		font-size: 18px;
		letter-spacing: 1px;
		font-weight: 500;
	}
	.title {
		padding-left: 6px;
		writing-mode: vertical-rl;
		font-size: 50px;
		color: #3c3e49;
	}
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
.layout-introduction-wrap {
	.content {
		padding: 60px 0;
		padding-left: 200px;
		padding-bottom: 9.375rem;
		height: 100vh;
	}
}
</style>
