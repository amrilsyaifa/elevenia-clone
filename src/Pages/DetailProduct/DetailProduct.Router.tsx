import React from 'react';
import { Route } from 'wouter';
import PageRouter, { IPageRouter } from '../../Routers/PageRouter';
import DetailProduct from './DetailProduct';
import Checkout from './Pages/Checkout/Checkout';

const DetailProductRouter: React.FC<IPageRouter> = (props) => {
  return (
    <PageRouter {...props}>
      <Route path="/detail/:id">
        <DetailProduct />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
    </PageRouter>
  );
};

export default DetailProductRouter;
