import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
// let loader= new THREE.TextureLoader();
// let color=loader.load()
// let roughness=loader.load()

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { map:color,roughnessMap: roughness, } );
const material = new THREE.MeshBasicMaterial( { color:'red', wireframe:true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
const canvas=document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

window.addEventListener('resize',()=>{
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect=window.innerWidth/window,innerHeight;
  camera.updateProjectionMatrix()
})

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping=true;
function animate() {
  window.requestAnimationFrame(animate)
  renderer.render( scene, camera );
  cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
cube.rotation.z +=0.02
controls.update();
}
animate()