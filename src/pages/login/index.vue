<template>
	<div class="login">
		<div class="login-model">
			<el-form :model="model" label-width="120px">
				<el-form-item label="用户名">
					<el-input v-model="model.userName" />
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="model.password" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useLogin } from '~/api/login'
import { useUserStore } from '~/stores/createUser'

const userStore = useUserStore()

const router = useRouter()

const model = ref({
	userName: 'admin',
	password: '123456',
})

const isLoading = ref<boolean>(false)

const onSubmit = async () => {
	isLoading.value = true
	const data = await useLogin(model.value.userName, model.value.password)
	isLoading.value = false
	if (data.Data && data.Data.ApiToken) {
		ElMessage.success(data.Message)
		userStore.$patch((state) => {
			state.token = data.Data.ApiToken
			state.userInfo = data.Data
		})
		router.replace('/')
	}
}
</script>

<style lang="scss">
.login {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.login-model {
		height: 500px;
		width: 600px;
	}
}
</style>
