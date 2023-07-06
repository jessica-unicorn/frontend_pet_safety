import React from 'react';
import { AppBar } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TopNavigation = () => {
	return (
		<Box>
			<AppBar>
				<ul id="nav-list">
          <li>San Carlos Pet Safety</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product-list">Product</Link>
          </li>
					<li>
            <Link to="/about">About</Link>
          </li>
				</ul>
			</AppBar>
		</Box>
	)
}

export default TopNavigation
