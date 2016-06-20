import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MenuItem = ({ href, children }) => (
  <li role="presentation">
    <Link to={href} role="menuitem">
      {children}
    </Link>
  </li>
);

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default MenuItem;
