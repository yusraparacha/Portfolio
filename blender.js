
//three js

import * as THREE from 'three';
//used to load 3d graphics gltf files. 
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
//used to compress/decompresss any draco decompparessed/compressed 3d graphics for three.js renderer to work on. the gltf model for three js has draco already integrated into it thats why we need dracoloader 
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';

//this is used for grabbing the model from the directory. import.meta.url ensures that the correct model is used. 
const laptopUrl = new URL('blender_file.glb', import.meta.url);

let canvasContainer = document.getElementById('canvas_containerRatio');

//this loads the webgl which is a worldwide used 3d graphic javascript api. antialias true is used to smoooth out the edges and produce a better quality resolution of the model.
let renderer = new THREE.WebGLRenderer({ antialias: true });
//declares the rendering width and height. client means its the inner width/height of the element in pixels excluding borders or margins
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
camera.position.set(10, 13, 59);
// orientation of the camera, so it points to the specified point
camera.lookAt(0, 4.2, 0);

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

        model.position.set(1, -2, 8); 
        model.scale.set(2.3,2.3,2.3);    

        //sets a variable for the speed and direction of movement along the yaxis
        let y_Direction = 0.006;  

function animate() {
    //this requests the browser to call the animate function on loop.
    requestAnimationFrame(animate);
    //if the model has loaded in the browser
    if (model) {
        //this model updates the y direction of the model, if it is positive it will go up, if negative it will go down
        model.position.y += y_Direction;
        //boundary values between the movement of the model
        if (model.position.y > -2 || model.position.y < -3) {
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

// window.addEventListener('load', function() {
//     setTimeout(function () {
//         document.querySelector('.path').style.stroke = '#D7D4CD';
//         document.querySelector('.path').style.strokeWidth = '1';
//         document.querySelector('.path').style.fill = 'none';
//         document.querySelector('.path').style.strokeAasharray = '157';
//         document.querySelector('.path').style.strokeDashoffset = '157';
//         document.querySelector('.path').style.animation = 'draw 10s ease forwards';    
//     }, 2500)
// })


// window.addEventListener('load',function(){
//     setTimeout(function(){
//         document.querySelector('.main_content').style.visibility = 'visible';
//     },8400)
// });

document.getElementById('logos_').addEventListener('click', function()
    {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });
document.getElementById('house').addEventListener('click', function()
   {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });


document.querySelectorAll('.hamburger').forEach(hamburger => {
hamburger.addEventListener('click', function(){
// Get the target section ID from the data-scroll-to attribute
const target_section = this.getAttribute('data-scroll-to');
// get the target section element
const target_element = document.getElementById(target_section);
//scroll to the target element
target_element.scrollIntoView({ behavior : 'smooth' });
});
});

let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');
let cursor_text = document.querySelector('.cursor_text');

document.addEventListener('mousemove',function(e){
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    cursor_text.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
