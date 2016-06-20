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

  return (
    <SceneViewer
      scene={({ width, height }) => (
        <PhotosphereScene
          width={width}
          height={height}
          imageSource={sceneInfo.imageSource}
          useSphere={sceneInfo.useSphere}
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
