import React, { Component, PropTypes } from 'react';

export default class SceneContainer extends Component {
  static propTypes = {
    scene: PropTypes.func.isRequired,
  };

  state = {
    viewerWidth: 0,
    viewerHeight: 0,
  };

  componentDidMount() {
    this.updateDimensions();

    window.addEventListener('resize', this.onWindowResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize = () => {
    this.updateDimensions();
  };

  updateDimensions() {
    const { viewer } = this.refs;

    this.setState({
      viewerWidth: viewer.offsetWidth,
      viewerHeight: window.innerHeight - 100,
    });
  }

  render() {
    const {
      viewerWidth,
      viewerHeight,
    } = this.state;

    const { scene } = this.props;

    const child = scene({
      width: viewerWidth,
      height: viewerHeight,
    });

    return (
      <div className="scene-container">
        <div className="scene-container__content" ref="viewer">
          {child}
        </div>
      </div>
    );
  }
}
