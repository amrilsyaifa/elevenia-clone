import React from 'react';
import { useRoute } from 'wouter';

const DetailProduct = () => {
  const [match, params] = useRoute('/:id');

  console.log('params ', params, match);
  return <div>DetailProduct</div>;
};

export default DetailProduct;
