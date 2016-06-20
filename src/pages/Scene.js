import React, { PropTypes } from 'react';
import { scenesMap } from '../data/scenes';
import SceneViewer from '../components/SceneViewer';
import PhotosphereScene from '../components/PhotosphereScene';

export default function Scene({ params: { name } }) {
  const sceneInfo = scenesMap[name];

  if (!sceneInfo) {
    return (
      <h2>Scene {name} not found</h2>
    );
  }

  const geometryType = sceneInfo.useCylinder ? 'cylinder' : 'sphere';

  return (
    <SceneViewer
      title={sceneInfo.title}
      imageSource={sceneInfo.imageSource}
      geometryType={geometryType}
      scene={({ width, height }) => (
        <PhotosphereScene
          width={width}
          height={height}
          imageSource={sceneInfo.imageSource}
          useCylinder={sceneInfo.useCylinder}
        />
      )}
    />
  );
}

Scene.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
