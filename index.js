<div id="container"></div>
console.clear();

var renderer, scene, camera, distance, raycaster, projector;
//get our <DIV> container
var container = document.getElementById('container');
// Helper var wich we will use as a additional correction coefficient for objects and camera
var distance = 400;

function init() {
    //init render
    renderer = new THREE.WebGLRenderer({ antialias: true });
    //render window size
    renderer.setSize(window.innerWidth, window.innerHeight);
    //background color
    renderer.setClearColor(0x140b33, 1);
    //append render to the <DIV> container
    container.appendChild(renderer.domElement);

    //init scene, camera and camera position
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.2, 25000);
    camera.position.set(100, -400, 2000);
    //adding camera to the scene
    scene.add(camera);

    //LIGHTNING
    //first point light
    light = new THREE.PointLight(0xffffff, 1, 4000);
    light.position.set(50, 0, 0);
    //the second one
    light_two = new THREE.PointLight(0xffffff, 1, 4000);
    light_two.position.set(-100, 800, 800);
    //And another global lightning some sort of cripple GL
    lightAmbient = new THREE.AmbientLight(0x404040);
    scene.add(light, light_two, lightAmbient);


    //OBJECTS
    //here we add objects by functions which we will write below
    createSpheres();
    createDiamond();
    createSpace();

    //adding scene and camera to the render
    renderer.render(scene, camera);
};