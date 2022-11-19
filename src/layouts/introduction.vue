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
					<el-icon size="24"><ArrowLeftBold /></el-icon>
				</template>
			</el-button>
		</div>
	</div>
</template>

<style lang="scss">
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
		padding: 100px 0;
		padding-left: 200px;
		padding-bottom: 9.375rem;
		height: 100vh;
	}
}
</style>
