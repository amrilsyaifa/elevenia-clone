import HomeRouter from './Pages/Home/Home.Router';
import DetailProductRouter from './Pages/DetailProduct/DetailProduct.Router';
import React, { Fragment } from 'react';
import Layout from './Layouts/Layout';
import { RouteWrapper } from './Routers/RouteWrapper';

const AppRouter = () => {
  return (
    <Fragment>
      <Layout>
        <RouteWrapper Render={HomeRouter} base="/" />
        <RouteWrapper Render={DetailProductRouter} base="/detail-product" />
      </Layout>
    </Fragment>
  );
};

export default AppRouter;
