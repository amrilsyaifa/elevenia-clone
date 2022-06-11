import React from 'react';
import { Button } from 'antd';
import { useRoute } from 'wouter';
import { useAppSelector, useAppDispatch } from 'src/Hooks/useReduxHooks';
import { addDataCheckout, removeDataCheckout } from 'src/Store/Reducers/Checkout.Reducers';

const DetailProduct = () => {
  const data = useAppSelector((state) => state.checkout.data);
  const dispatch = useAppDispatch();

  const tempData = {
    url: 'https://ant.design/components/button/',
    prdNm: 'prdNm',
    sellerPrdCd: 'sellerPrdCd',
    selPrc: 'selPrc',
    stock: 'stock',
    prdSelQty: 'prdSelQty'
  };
  return (
    <div>
      <div>DetailProduct</div>
      <Button type="primary" onClick={() => dispatch(addDataCheckout(tempData))}>
        Add to Chart
      </Button>
      <Button type="primary" danger onClick={() => dispatch(removeDataCheckout(data.length - 1))}>
        Remove to Chart
      </Button>
    </div>
  );
};

export default DetailProduct;
