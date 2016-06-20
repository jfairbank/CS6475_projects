import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavItem = ({ href, children }) => (
  <li role="presentation">
    <Link to={href}>
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default NavItem;
