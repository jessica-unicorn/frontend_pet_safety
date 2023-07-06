import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { apiUrl, imageUrl } from '../../constants';

function ProductDetail() {
  const { product_id } = useParams();
  const [ productDetailData, setProductDetailData ] = useState({});

  useEffect(() => {
    fetch(`${apiUrl}/api/products/${product_id}`)
      .then(response => response.json())
      .then(data => {
        setProductDetailData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // run only once

  return (
    <Box>
      <Box>
        <Typography variant='h6'>
          {productDetailData.name}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant='captain'>
          {productDetailData.description}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <img src={imageUrl + '/product/' + productDetailData.image_name}  
          height="300"
          alt={productDetailData.name} />
      </Box>
    </Box>
  );
}

export default ProductDetail;
