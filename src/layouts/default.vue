<template>
	<div class="layout-wrap">
		<router-view v-slot="{ Component, route }">
			<Transition name="el-fade-in-linear">
				<div>
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
</style>
