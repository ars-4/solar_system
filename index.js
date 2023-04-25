import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Elements
const canvas = document.getElementById('div');

// Images
import space from './assets/StarsBG.jpg';
import sun_texture from './assets/textures/sun.png';
import mercury_texture from './assets/textures/mercury.jpg';
import venus_texture from './assets/textures/venus.jpg';
import earth_texture from './assets/textures/earth.png';
import mars_texture from './assets/textures/mars.jpg';
import jupyter_texture from './assets/textures/jupiter.jpg';
import saturn_texture from './assets/textures/saturn.jpg';
import uranus_texture from './assets/textures/uranus.jpg';
import neptune_texture from './assets/textures/neptune.jpg';

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;


// Lights
const directionalLight_left = new THREE.DirectionalLight(0xffffff, 5);
directionalLight_left.position.set(0.01, 0, 0);
directionalLight_left.scale.set(0.2, 0.2, 0.2);
scene.add(directionalLight_left);

// const directionalLight_right = new THREE.DirectionalLight(0xf44336, 9);
// directionalLight_right.position.set(-0.01, 0, 0);
// directionalLight_right.scale.set(0.2, 0.2, 0.2);
// scene.add(directionalLight_right);

// const directionalLight_left_left = new THREE.DirectionalLight(0xf44336, 9);
// directionalLight_left_left.position.set(0, 0, -0.01);
// directionalLight_left_left.scale.set(0.2, 0.2, 0.2);
// scene.add(directionalLight_left_left);

// const dlightHelper = new THREE.DirectionalLightHelper(directionalLight_left_left, 5);
// scene.add(dlightHelper);
// const dlightHelper2 = new THREE.DirectionalLightHelper(directionalLight_left, 5);
// scene.add(dlightHelper2);
// const dlightHelper3 = new THREE.DirectionalLightHelper(directionalLight_right, 5);
// scene.add(dlightHelper3);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);


// Helpers
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// The Space
const textureLoader = new THREE.TextureLoader();
const spaceTexture = textureLoader.load(space);
scene.background = spaceTexture;


// The Sun
const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, map: textureLoader.load(sun_texture) });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Mercury: planet_zero
const planet_zero_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_zero_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(mercury_texture) });
const planet_zero = new THREE.Mesh(planet_zero_geometry, planet_zero_material);
planet_zero.position.x = 1.5;
scene.add(planet_zero);

// Venus: planet_one
const planet_one_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_one_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(venus_texture) });
const planet_one = new THREE.Mesh(planet_one_geometry, planet_one_material);
planet_one.position.x = 2;
scene.add(planet_one);

// Earth: planet_two
const planet_two_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_two_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(earth_texture) });
const planet_two = new THREE.Mesh(planet_two_geometry, planet_two_material);
planet_two.position.z = 2.5;
scene.add(planet_two);

// Mars: planet_three
const planet_three_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_three_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(mars_texture) });
const planet_three = new THREE.Mesh(planet_three_geometry, planet_three_material);
planet_three.position.z = 2.5;
scene.add(planet_three);

// Jupyter: planet_four
const planet_four_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_four_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(jupyter_texture) });
const planet_four = new THREE.Mesh(planet_four_geometry, planet_four_material);
planet_four.position.z = 2.5;
scene.add(planet_four);

// Saturn: planet_five
const planet_five_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_five_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(saturn_texture) });
const planet_five = new THREE.Mesh(planet_five_geometry, planet_five_material);
planet_five.position.z = 2.5;
scene.add(planet_five);

// Uranus: planet_six
const planet_six_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_six_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(uranus_texture) });
const planet_six = new THREE.Mesh(planet_six_geometry, planet_six_material);
planet_six.position.z = 2.5;
scene.add(planet_six);

// Neptune: planet_seven
const planet_seven_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const planet_seven_material = new THREE.MeshStandardMaterial({ map: textureLoader.load(neptune_texture) });
const planet_seven = new THREE.Mesh(planet_seven_geometry, planet_seven_material);
planet_seven.position.z = 2.5;
scene.add(planet_seven);




// Rendering
// renderer.render(scene, camera);
function planets_animation (time) {
    planet_zero.rotation.y += 0.01;
    planet_zero.position.set(1.5 * Math.sin(time / 1000), 0, 1.5 * Math.cos(time / 1000));
    planet_one.rotation.y += 0.01;
    planet_one.position.set(2 * Math.sin(time / 1500), 0, 2 * Math.cos(time / 1500));
    planet_two.rotation.y += 0.01;
    planet_two.position.set(2.5 * Math.sin(time / 2000), 0, 2.5 * Math.cos(time / 2000));
    planet_three.rotation.y += 0.01;
    planet_three.position.set(3 * Math.sin(time / 2500), 0, 3 * Math.cos(time / 2500));
    planet_four.rotation.y += 0.01;
    planet_four.position.set(3.5 * Math.sin(time / 3000), 0, 3.5 * Math.cos(time / 3000));
    planet_five.rotation.y += 0.01;
    planet_five.position.set(4 * Math.sin(time / 3500), 0, 4 * Math.cos(time / 3500));
    planet_six.rotation.y += 0.01;
    planet_six.position.set(4.5 * Math.sin(time / 4000), 0, 4.5 * Math.cos(time / 4000));
    planet_seven.rotation.y += 0.01;
    planet_seven.position.set(5 * Math.sin(time / 4500), 0, 5 * Math.cos(time / 4500));
    renderer.render(scene, camera);
    controls.update();
}

function animate(time) {
    // requestAnimationFrame(animate);
    sun.rotation.y += 0.01;
    directionalLight_left.position.set(1.5 * Math.sin(time / 1000), 0, 1.5 * Math.cos(time / 1000));
    planets_animation(time);
    renderer.render(scene, camera);
    controls.update();
}
renderer.setAnimationLoop(animate);