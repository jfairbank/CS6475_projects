import React, { Component, PropTypes } from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import OrbitControls from '../controls/OrbitControls';

export default class PhotosphereScene extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    imageSource: PropTypes.string.isRequired,
    useSphere: PropTypes.bool,
  };

  state = {
    ready: false,
  };

  componentDidMount() {
    this.initialize();
  }

  componentWillUpdate({ imageSource: nextImageSource }) {
    const { imageSource } = this.props;

    if (imageSource !== nextImageSource) {
      this.reset();
    }
  }

  onAnimate = () => {
    this.controls.update();
  };

  autoRotateSpeed = 1.0;
  cameraPosition = new THREE.Vector3(0.1, 0, 0);
  textureRepeat = new THREE.Vector2(-1, 1);

  reset() {
    this.setState({ ready: false });
    this.initialize();
  }

  initialize() {
    this.loadImage().then(() => {
      this.setState({ ready: true });
      this.initializeControls();
    });
  }

  loadImage() {
    return new Promise(resolve => {
      const image = document.createElement('img');
      image.onload = resolve;
      image.src = this.props.imageSource;
    });
  }

  initializeControls() {
    const { wrapper, camera } = this.refs;
    const controls = new OrbitControls(camera, wrapper);

    controls.noPan = false;
    controls.noZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = this.autoRotateSpeed;

    this.controls = controls;
  }

  render() {
    const { ready } = this.state;

    if (!ready) {
      return (
        <h2>Loading...</h2>
      );
    }

    const { width, height, imageSource, useSphere } = this.props;

    return (
      <div ref="wrapper">
        <React3
          mainCamera="camera"
          width={width}
          height={height}
          onAnimate={this.onAnimate}
        >
          <scene>
            <perspectiveCamera
              name="camera"
              ref="camera"
              fov={75}
              aspect={width / height}
              near={1}
              far={1000}
              position={this.cameraPosition}
            />

            <mesh>
              {useSphere ?
                <sphereGeometry
                  radius={16}
                  widthSegments={128}
                  heightSegments={128}
                /> :

                <cylinderGeometry
                  radiusTop={50}
                  radiusBottom={50}
                  radiusSegments={20}
                  heightSegments={32}
                />
              }

              <meshBasicMaterial
                side={THREE.BackSide}
              >
                <texture
                  url={imageSource}
                  wrapS={THREE.RepeatWrapping}
                  wrapT={THREE.RepeatWrapping}
                  repeat={this.textureRepeat}
                  anisotropy={16}
                />
              </meshBasicMaterial>
            </mesh>
          </scene>
        </React3>
      </div>
    );
  }
}
