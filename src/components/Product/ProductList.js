import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { map } from 'lodash';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InventoryIcon from '@mui/icons-material/Inventory';

import { apiUrl } from '../../constants';

function ProductList() {
  const [ productListData, setProductListData ] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${apiUrl}/api/products`)
      .then(response => response.json())
      .then(data => {
        setProductListData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // run only once

  const handleItemClick = (product_id) => {
    navigate(`/product-detail/${product_id}`);
  };

  const itemList = map(productListData, (d) => {
    return (
      <ListItem key={d.name} disablePadding>
        <ListItemButton onClick={() => handleItemClick(d.id)}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary={d.name} />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box>
      <List>
        {itemList}
      </List>
    </Box>
  );
}

export default ProductList;
