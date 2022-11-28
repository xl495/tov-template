<template>
	<div id="container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
// @ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// @ts-ignore
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// @ts-ignore
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

nextTick(() => {
	let mixer: any

	const clock = new THREE.Clock()
	const container = document.getElementById('container')!
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(1550, 730)
	renderer.outputEncoding = THREE.sRGBEncoding
	container.appendChild(renderer.domElement)

	const pmremGenerator = new THREE.PMREMGenerator(renderer)

	const scene = new THREE.Scene()
	// scene.background = new THREE.Color(0xbfe3dd)
	scene.environment = pmremGenerator.fromScene(
		new RoomEnvironment(),
		0.04
	).texture

	const camera = new THREE.PerspectiveCamera(
		2,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	)
	camera.position.set(10, 5, 30)

	const controls = new OrbitControls(camera, renderer.domElement)
	controls.target.set(0, 0, 0)
	controls.update()
	controls.enablePan = false
	controls.enableDamping = true

	const dracoLoader = new DRACOLoader()
	dracoLoader.setDecoderPath('js/libs/draco/gltf/')

	const loader = new GLTFLoader()
	loader.setDRACOLoader(dracoLoader)
	loader.load(
		'/models/gltf/model3.glb',
		function (gltf: any) {
			console.log('gltf.animations', gltf.animations)
			const model = gltf.scene
			model.position.set(0, 0, 1)
			model.scale.set(0.1, 0.1, 0.1)
			scene.add(model)

			mixer = new THREE.AnimationMixer(model)
			mixer.clipAction(gltf.animations[0]).play()

			animate()
		},
		undefined,
		function (e: any) {
			console.error(e)
		}
	)

	window.onresize = function () {
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()

		renderer.setSize(1550, 730)
	}

	function animate() {
		requestAnimationFrame(animate)

		// console.log('animate', animate)

		const delta = clock.getDelta()

		mixer.update(delta)

		controls.update()

		renderer.render(scene, camera)
	}
})
</script>

<style lang="scss" scoped>
#container {
	position: absolute;
	bottom: 0;
	right: 0;
	top: 0;
	left: 0;
}
</style>
