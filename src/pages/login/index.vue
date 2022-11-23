<template>
	<div>
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
</template>

<script setup lang="ts">
import { useLogin } from '~/api/login'

const model = ref({
	userName: 'admin',
	password: '123456',
})

const onSubmit = async () => {
	const data = await useLogin(model.value.userName, model.value.password)

	console.log(data)
}
</script>

<style scoped></style>
