window.gltfLoader = new THREE.GLTFLoader();

class Logo extends THREE.Object3D {
  constructor() {
    super();

    this.loader = new THREE.GLTFLoader();
    this.loader.load("https://kuroiyuki48.github.io/cetaphil/assets/bj_logo_6.glb", (gltf) => {
      this.add(gltf.scene);
    });

    this.visible = false;
  }
}
window.gltfLoader.load("https://kuroiyuki48.github.io/cetaphil/assets/bj_logo_6.glb", function(gltf) {
  // const logo = gltf.scene.children.find(c => c.name === 'bj_logo_6')
  // logo.castShadow = true;
  window.bj_logo_6 = gltf.scene;
});

/**
 * Toggle on a class on the page to disable the "Enter AR"
 * button and display the unsupported browser message.
 */
function onNoXRDevice() {
  document.body.classList.add('unsupported');
}