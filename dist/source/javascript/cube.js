import * as THREE from 'three';

// create scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

// set rendered size (canvas)
renderer.setSize(window.innerWidth, window.innerHeight);

// append <canvas> to <body>
const body = document.querySelector("body");
body.appendChild(renderer.domElement)

// create a geometry figure and material to be covered by
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xf4c2c2 } );

// mesh geometry and material together
const cube = new THREE.Mesh( geometry, material );

// add cube to scene <canvas>
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();