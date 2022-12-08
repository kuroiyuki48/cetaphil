class Reticle extends THREE.Object3D {
  constructor() {
    super();

    this.loader = new THREE.GLTFLoader();
    
    this.loader.load("https://kuroiyuki48.github.io/cetaphil/assets/bj_logo_6.glb", (gltf) => {
      this.add(gltf.scene);
    });

    this.visible = false;
  }
}


/**
 * Toggle on a class on the page to disable the "Enter AR"
 * button and display the unsupported browser message.
 */
function onNoXRDevice() {
  document.body.classList.add('unsupported');
}