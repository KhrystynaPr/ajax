import React from 'react';

import './header.css';

const Header = ({onPersonChange, onPlanetChange, onStarshipChange}) => {
  return (
    <div className="header">
        <ul>
            <li onClick = {onPersonChange}>
                <a href="#">People</a>
            </li>
            <li onClick = {onPlanetChange}>
                <a href="#">Planets</a>
            </li>
            <li onClick = {onStarshipChange}>
                <a href="#">Starships</a>
            </li>
        </ul>
    </div>
  );
};

export default Header;
