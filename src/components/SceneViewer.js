/* eslint-disable no-script-url */
import React, { Component, PropTypes } from 'react';

const style = {
  textAlign: 'center',
};

const h3Style = {
  marginTop: 5,
};

const imgStyle = {
  width: '100%',
};

const offsetHeight = 75;

export default class SceneContainer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    geometryType: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    scene: PropTypes.func.isRequired,
  };

  state = {
    viewerWidth: 0,
    viewerHeight: 0,
    isViewingImage: false,
  };

  componentDidMount() {
    this.updateDimensions();

    window.addEventListener('resize', this.onWindowResize, false);
  }

  componentWillUpdate({ name: nextName }) {
    const { name } = this.props;

    if (name !== nextName) {
      this.setState({ isViewingImage: false });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize = () => {
    this.updateDimensions();
  };

  toggleViewImage = () => {
    this.setState({ isViewingImage: !this.state.isViewingImage });
  };

  updateDimensions() {
    const { viewer } = this.refs;

    this.setState({
      viewerWidth: viewer.offsetWidth,
      viewerHeight: window.innerHeight - 100,
    });
  }

  renderChild() {
    if (this.state.isViewingImage) {
      const { imageSource, title } = this.props;

      return (
        <img
          src={imageSource}
          style={imgStyle}
          alt={title}
        />
      );
    }

    const {
      viewerWidth,
      viewerHeight,
    } = this.state;

    const { scene } = this.props;

    return scene({
      width: viewerWidth,
      // Offset for header h3
      height: viewerHeight - offsetHeight,
    });
  }

  render() {
    const { isViewingImage } = this.state;
    const { title, geometryType } = this.props;
    const child = this.renderChild();

    return (
      <div className="scene-container" style={style}>
        <h3 style={h3Style}>{title}</h3>
        <h4>Projected inside {geometryType}</h4>

        <h5>
          <a href="javascript:void(0)" onClick={this.toggleViewImage}>
            {isViewingImage
              ? 'View projected scene'
              : 'View original image'
            }
          </a>
        </h5>

        <div className="scene-container__content" ref="viewer">
          {child}
        </div>
      </div>
    );
  }
}
