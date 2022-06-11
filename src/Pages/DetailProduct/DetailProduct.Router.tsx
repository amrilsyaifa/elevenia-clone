import React from 'react';
import { Route } from 'wouter';
import PageRouter, { IPageRouter } from '../../Routers/PageRouter';
import DetailProduct from './DetailProduct';

const DetailProductRouter: React.FC<IPageRouter> = (props) => {
  return (
    <PageRouter {...props}>
      <Route path="/:id">
        <DetailProduct />
      </Route>
    </PageRouter>
  );
};

export default DetailProductRouter;
