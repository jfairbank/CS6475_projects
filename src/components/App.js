import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { scenes } from '../data/scenes';

import {
  MenuItem,
  Navbar,
  Nav,
  NavDropdown,
  Grid,
} from 'react-bootstrap';

const App = ({ children }) => (
  <div className="app">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            CS6475
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <NavDropdown
            id="photospheres-dropdown"
            title="Photospheres"
          >
            {scenes.map(scene => (
              <LinkContainer
                key={scene.name}
                to={`/scene/${scene.name}`}
              >
                <MenuItem>
                  {scene.title}
                </MenuItem>
              </LinkContainer>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Grid className="main-container">
      {children}
    </Grid>
  </div>
);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
