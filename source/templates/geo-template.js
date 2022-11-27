import * as THREE from 'https://unpkg.com/three@0.146.0/build/three.module.js';

// create scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

// set rendered size (canvas)
renderer.setSize(window.innerWidth, window.innerHeight);

// append <canvas> to <body>
const body = document.querySelector("body"); // TODO: change selector
body.appendChild(renderer.domElement)

// create a geometry figure and material to be covered by
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // TODO: change geometry
const material = new THREE.MeshBasicMaterial( { color: 0xf4c2c2 } ); // TODO: change material

// game loop
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();