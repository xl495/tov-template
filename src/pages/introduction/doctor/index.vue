<template>
	<div class="doctor-wrap">
		<div class="tabs-wrap">
			<tabs v-model:value="currentTab" :tabs="tabsData" @change="changeTab" />
		</div>
		<content-scroll v-show="!isShowDetails" style="margin-top: 68px">
			<div class="doctor-list">
				<doctor-item
					v-for="(doctor, index) in doctorData"
					:key="index"
					:cover="doctor.cover"
					:name="doctor.name"
					:title="doctor.title"
					@click="handleDoctorClick"
				/>
			</div>
		</content-scroll>
		<content-scroll
			v-if="isShowDetails"
			style="margin-top: 68px; position: relative"
		>
			<div class="doctor-details-wrap">
				<div class="doctor-details-avatar">
					<el-skeleton-item
						v-if="doctorDetails.id === 0"
						animated
						variant="image"
						style="width: 240px; height: 240px"
					/>
					<el-image
						v-else
						:src="doctorDetails.cover"
						style="width: 11.25rem; height: 15rem; border-radius: 8px"
						lazy
					>
						<template #placeholder>
							<div class="image-slot">Loading<span class="dot">...</span></div>
						</template>
					</el-image>
				</div>
				<div v-if="doctorDetails.id === 0" class="doctor-details-content">
					<el-skeleton :rows="5" animated />
				</div>
				<div v-else class="doctor-details-content">
					<div class="doctor-details-content-header">
						<div
							class="doctor-details-content-name"
							:class="[`size-${doctorDetails.name.length}`]"
						>
							{{ doctorDetails.name }}
						</div>
						<div class="doctor-details-content-title">
							{{ doctorDetails.title }}
						</div>
					</div>
					<div
						class="doctor-details-content--content"
						v-html="doctorDetails.content"
					></div>
				</div>
			</div>
		</content-scroll>

		<div v-if="isShowDetails" class="back-wrap" style="left: 160px">
			<el-button
				class="back"
				color="linear-gradient(45deg, #ECC98C, #D0A064);"
				size="large"
				circle
				@click=";(isShowDetails = false), (doctorDetails.id = 0)"
			>
				<template #icon>
					<el-icon size="24"><Back /></el-icon>
				</template>
			</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import tabs from '~/components/tabs.vue'

import doctorItem from './doctor-item.vue'

import contentScroll from '~/components/content-scroll.vue'
import { IDoctor } from './types'

const tabsData = ref([
	{
		name: '内科',
	},
	{
		name: '外科',
	},
	{
		name: '妇科',
	},
	{
		name: '男科',
	},
	{
		name: '儿科',
	},
	{
		name: '眼科',
	},
	{
		name: '耳鼻咽喉科',
	},
	{
		name: '口腔科',
	},
	{
		name: '皮肤科',
	},
	{
		name: '康复医学科',
	},
	{
		name: '中医科',
	},
	{
		name: '麻醉科',
	},
	{
		name: '医学影像科',
	},
	{
		name: '医学检验科',
	},
])

const doctorData = ref<IDoctor[]>([
	{
		cover:
			'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
		name: '李医生',
		title: '主任医师，博士生导师',
	},
])

const currentTab = ref(0)

const isShowDetails = ref<boolean>(false)

const doctorDetails = ref<{
	id: string | number
	cover: string
	name: string
	title: string
	content: string
}>({
	id: 0,
	cover:
		'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
	name: '李医生',
	title: '主任医师，博士生导师',
	content: `<p>a钻研学习医学科学技术，挽救生命以治病为业的人，一般指临床医师。按照卫生部、卫健委、医政部有关医疗卫生管理条例的法律法规，主持医患沟通，学术讨论，新技术推广、预后分析、公众教育、护理示教、康复培训、出院教育、执行卫生防疫、计生、大病早期识别干预等法律政治责任、承担部分课题研究等工作，预防出生缺陷提高人口素质，治病救人，履行病情如实告知、合理检查、合理开药、正确诊断，积极治疗的责任。提高医生职业风险和医疗事故安全法律意识，避免误诊漏诊、控制医源性继发损害、纠正违章作业等法律责任，通过定期临床理论考试，技能考核培训，能够熟练掌握临床必要的医学技能和必要的医学理论，如影像学、解剖学、病理学、医学遗传学、药物化学、康复医学、生育保健学、临床法医学等，取得执业资格，不得夸大病情，吓唬病人，延误时机造成事故，要按照行业规范开展诊疗活动。医生，古代称大夫或郎中，新中国成立后我国涌现了大量赤脚医生，一度达到150多万名。现在“大夫”一词在北方人中也常用。钻研学习医学科学技术，挽救生命以治病为业的人，一般指临床医师。按照卫生部、卫健委、医政部有关医疗卫生管理条例的法律法规，主持医患沟通，学术讨论，新技术推广、预后分析、公众教育、护理示教、康复培训、出院教育、执行卫生防疫、计生、大病早期识别干预等法律政治责任、承担部分课题研究等工作，预防出生缺陷提高人口素质，治病救人，履行病情如实告知、合理检查、合理开药、正确诊断，积极治疗的责任。提高医生职业风险和医疗事故安全法律意识，避免误诊漏诊、控制医源性继发损害、纠正违章作业等法律责任，通过定期临床理论考试，技能考核培训，能够熟练掌握临床必要的医学技能和必要的医学理论，如影像学、解剖学、病理学、医学遗传学、药物化学、康复医学、生育保健学、临床法医学等，取得执业资格，不得夸大病情，吓唬病人，延误时机造成事故，要按照行业规范开展诊疗活动。医生，古代称大夫或郎中，新中国成立后我国涌现了大量赤脚医生，一度达到150多万名。现在“大夫”一词在北方人中也常用。</p>`,
})

for (let index = 0; index < 20; index++) {
	doctorData.value.push(doctorData.value[0])
}

const handleDoctorClick = (e: any) => {
	console.log(e)
	isShowDetails.value = true
	setTimeout(() => {
		doctorDetails.value.id = 1
	}, 2000)
}

const changeTab = () => {
	isShowDetails.value = false
	doctorDetails.value.id = 0
}
</script>

<style lang="scss" scoped>
.doctor-wrap {
	padding-left: 70px;
	.doctor-list {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		padding: 54px 0;
		padding-right: 0;
	}
	.doctor-details {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2;
	}

	.doctor-details-wrap {
		padding-top: 46px;
		padding-left: 56px;
		display: flex;

		.doctor-details-content {
			flex: 1;
			margin-left: 62px;
		}
		.doctor-details-content-header {
			display: flex;
			.doctor-details-content-name {
				height: 48px;
				line-height: 44px;
				width: 146px;
				text-align: center;
				font-size: 28px;
				font-family: Source Han Serif CN;
				font-weight: 600;
				color: #3f3429;
				background: url('~/assets/doctor-name.png') no-repeat;
				background-size: 100% 100%;
				&.size-3 {
					font-size: 28px;
				}
				&.size-4 {
					font-size: 26px;
				}
				&.size-5 {
					font-size: 24px;
				}
				&.size-6 {
					font-size: 20px;
				}
			}
			.doctor-details-content-title {
				margin-left: 16px;
				line-height: 44px;
				font-size: 20px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #85817e;
			}
		}

		.doctor-details-content--content {
			margin-top: 22px;
			padding-right: 41px;
			line-height: 40px;
			overflow-y: auto;
		}
	}
}
</style>
<route>
	{
	meta: {
		layout: 'introduction',
		leftTitle: '医师介绍'
	}
}
</route>
