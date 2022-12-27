// 创建一个场景
const scene = new THREE.Scene()

// 创建一个相机 视点
const camera = new THREE.OrthographicCamera(
  -10,
  10,
  10,
  -10,
  1,
  1000
)
// 设置相机的位置
camera.position.set(0, 0, 20)
// 创建一个渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// 添加一个立方体
// 定义了一个立方体的对象
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)

// 创建材质
const cubeMaterial = new THREE.MeshLambertMaterial({
  color: 0xff0000,
  wireframe: false,
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

// 添加到场景里面
scene.add(cube)

// 添加一个球体
const sphereGeometry = new THREE.SphereGeometry(1, 10, 10)
const sphereMaterial = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  wireframe: false,
})

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

sphere.position.x = 3
sphere.position.y = 1

scene.add(sphere)

// 添加灯光
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(-10, 10, 10)
scene.add(spotLight)

const animation = () => {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  // 渲染
  renderer.render(scene, camera)

  requestAnimationFrame(animation)
}

animation()
