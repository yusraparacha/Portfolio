import * as THREE from 'three';
//used to load 3d graphics gltf files. 
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
//used to compress/decompresss any draco decompparessed/compressed 3d graphics for three.js renderer to work on. the gltf model for three js has draco already integrated into it thats why we need dracoloader 
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';

// //this is used for grabbing the model from the directory. import.meta.url ensures that the correct model is used. 
// const laptopUrl = new URL('untitled.glb', import.meta.url);

// let canvasContainer = document.getElementById('canvas_containerRatio');

// //this loads the webgl which is a worldwide used 3d graphic javascript api. antialias true is used to smoooth out the edges and produce a better quality resolution of the model.
// let renderer = new THREE.WebGLRenderer({ antialias: true });
// //declares the rendering width and height.
// renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
// //the pixelratioo for quality is set equal to windows pixel ratio to ensure that it catches the pixel quality for the screen
// renderer.setPixelRatio(window.devicePixelRatio);
// //canvas element that the renderer uses to display the model, it appends the renderers canvas element to html body
// canvasContainer.appendChild(renderer.domElement);

// //scree,object and prespective camera are the 3 main things for three.js
// const scene = new THREE.Scene();

// //here u set the : 
// const camera = new THREE.PerspectiveCamera(
//     //fov, aspect ratio, near clipping, far clipping
//     20,
//     canvasContainer.clientWidth / canvasContainer.clientHeight,
//     0.1,
//     1000
// );
// //x , y , z coordinate
// camera.position.set(10, 13, 43);
// // orientation of the camera, so it points to the specified point
// camera.lookAt(0, 2, 0);

// //creates spotlight, white light and its intensity
// const spotLight = new THREE.SpotLight(0xffffff, 25000);
// spotLight.position.set(20, -10, 40);
// //renders the spotlight to the scene
// scene.add(spotLight);

// const ambientLight = new THREE.AmbientLight(0xffffff, 5);
// scene.add(ambientLight);

// //this sets the background color of the canvas to be black with full transparency
// renderer.setClearColor(0x000000, 0);

// //DRACOLoader
// const dracoLoader = new DRACOLoader();
// //points to the path where the compressed files are, in this case googles draco loader
// dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/'); 

// // Set up GLTFLoader and assign DRACOLoader
// const assetLoader = new GLTFLoader();
// // this assigns the gltf loader to the dracoloader so the gltf will use the dracoloader to decompress any files etc
// assetLoader.setDRACOLoader(dracoLoader);
// let model;
// assetLoader.load(
//     //url of the model
//     laptopUrl.href,
//     //callback function that runs after the model has loaded successfully
//     function (gltf) {
//         //extracts the model
//         model = gltf.scene;
//         //adds the model
//         scene.add(model);

//         model.position.set(0, 0, 0); 
//         model.scale.set(1.3, 1.3, 1.3);    

//         //sets a variable for the speed and direction of movement along the yaxis
//         let y_Direction = 0.002;  

// function animate() {
//     //this requests the browser to call the animate function on loop.
//     requestAnimationFrame(animate);
//     //if the model has loaded in the browser
//     if (model) {
//         //this model updates the y direction of the model, if it is positive it will go up, if negative it will go down
//         model.position.y += y_Direction;
//         //boundary values between the movement of the model
//         if (model.position.y > 0 || model.position.y < -0.5) {
//             //if the model has gone above 0, it will reverse the direction making it go down, and if it goes below -0.5 it will start going back up
//             y_Direction = -y_Direction;
//         }
//     }
//     //it tells the renderer to draw the scene from the prespective camera and ensures that poistions of display are updated effectively
//     renderer.render(scene, camera);
// }
// //run the animate 
// //if there is an error for loading the model, it will display error. 
// animate();
//     },
//     undefined,
//     function (error) {
//         console.error(error);
//     }
// );
// // // Handle window resize
// // window.addEventListener('resize', function () {
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// // });

// // const raycaster = new THREE.Raycaster();
// // const pointer = new THREE.Vector2();

// // function onPointerMove (event) {

// // 	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// // 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

// // }
// // function onPointerOver () {
// //     raycaster.setFromCamera(pointer, camera);
// //     if (model) {
// //         const intersects = raycaster.intersectObject(model, true);
// //         //check if 
// //         if (intersects.length > 0) {
// //               model.scale.set(1.3, 1.3, 1.3)
// //         }
// //         else
// //         {
// //             model.scale.set(1,1,1);
// //         }
// // }
// // }
// // window.addEventListener('mousemove', onPointerMove , false);
// // window.addEventListener('pointermove', onPointerOver, false);


// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/loaders/DRACOLoader.js';

//this is used for grabbing the model from the directory. import.meta.url ensures that the correct model is used. 
const laptopUrl = new URL('untitled.glb', import.meta.url);

let canvasContainer = document.getElementById('canvas_containerRatio');

//this loads the webgl which is a worldwide used 3d graphic javascript api. antialias true is used to smoooth out the edges and produce a better quality resolution of the model.
let renderer = new THREE.WebGLRenderer({ antialias: true });
//declares the rendering width and height.
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
//the pixelratioo for quality is set equal to windows pixel ratio to ensure that it catches the pixel quality for the screen
renderer.setPixelRatio(window.devicePixelRatio);
//canvas element that the renderer uses to display the model, it appends the renderers canvas element to html body
canvasContainer.appendChild(renderer.domElement);

//scree,object and prespective camera are the 3 main things for three.js
const scene = new THREE.Scene();

//here u set the : 
const camera = new THREE.PerspectiveCamera(
    //fov, aspect ratio, near clipping, far clipping
    20,
    canvasContainer.clientWidth / canvasContainer.clientHeight,
    0.1,
    1000
);
//x , y , z coordinate
camera.position.set(10, 13, 43);
// orientation of the camera, so it points to the specified point
camera.lookAt(0, 2, 0);

//creates spotlight, white light and its intensity
const spotLight = new THREE.SpotLight(0xffffff, 25000);
spotLight.position.set(20, -10, 40);
//renders the spotlight to the scene
scene.add(spotLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);

//this sets the background color of the canvas to be black with full transparency
renderer.setClearColor(0x000000, 0);

//DRACOLoader
const dracoLoader = new DRACOLoader();
//points to the path where the compressed files are, in this case googles draco loader
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/'); 

// Set up GLTFLoader and assign DRACOLoader
const assetLoader = new GLTFLoader();
// this assigns the gltf loader to the dracoloader so the gltf will use the dracoloader to decompress any files etc
assetLoader.setDRACOLoader(dracoLoader);
let model;
assetLoader.load(
    //url of the model
    laptopUrl.href,
    //callback function that runs after the model has loaded successfully
    function (gltf) {
        //extracts the model
        model = gltf.scene;
        //adds the model
        scene.add(model);

        model.position.set(0, 0, 0); 
        model.scale.set(1.3, 1.3, 1.3);    

        //sets a variable for the speed and direction of movement along the yaxis
        let y_Direction = 0.002;  

function animate() {
    //this requests the browser to call the animate function on loop.
    requestAnimationFrame(animate);
    //if the model has loaded in the browser
    if (model) {
        //this model updates the y direction of the model, if it is positive it will go up, if negative it will go down
        model.position.y += y_Direction;
        //boundary values between the movement of the model
        if (model.position.y > 0 || model.position.y < -0.5) {
            //if the model has gone above 0, it will reverse the direction making it go down, and if it goes below -0.5 it will start going back up
            y_Direction = -y_Direction;
        }
    }
    //it tells the renderer to draw the scene from the prespective camera and ensures that poistions of display are updated effectively
    renderer.render(scene, camera);
}
//run the animate 
//if there is an error for loading the model, it will display error. 
animate();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
// // Handle window resize
// window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const raycaster = new THREE.Raycaster();
// const pointer = new THREE.Vector2();

// function onPointerMove (event) {

// 	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

// }
// function onPointerOver () {
//     raycaster.setFromCamera(pointer, camera);
//     if (model) {
//         const intersects = raycaster.intersectObject(model, true);
//         //check if 
//         if (intersects.length > 0) {
//               model.scale.set(1.3, 1.3, 1.3)
//         }
//         else
//         {
//             model.scale.set(1,1,1);
//         }
// }
// }
// window.addEventListener('mousemove', onPointerMove , false);
// window.addEventListener('pointermove', onPointerOver, false);