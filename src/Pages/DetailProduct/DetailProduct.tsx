import React from 'react';
import { Button, Image, Card, Typography } from 'antd';
import { useRoute } from 'wouter';
import { useAppDispatch } from 'src/Hooks/useReduxHooks';
import { addDataCheckout } from 'src/Store/Reducers/Checkout.Reducers';
import Style from './DetailProduct.module.scss';
import { HeartOutlined } from '@ant-design/icons';

const { Text } = Typography;

const DetailProduct = () => {
  const dispatch = useAppDispatch();

  const tempData = {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    prdNm: 'prdNm',
    sellerPrdCd: 'sellerPrdCd',
    selPrc: 'selPrc',
    stock: 'stock',
    prdSelQty: 'prdSelQty'
  };
  return (
    <div>
      <div className={Style['title']}>
        Commodo ullamco velit occaecat eu ad fugiat excepteur reprehenderit mollit ullamco nulla.
      </div>
      <div className={Style['container']}>
        <div className={Style['wrap-image']}>
          <Image
            width={300}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div className={Style['wrap-box']}>
            <Card className={Style['card']}>
              <div className={Style['row']}>
                <HeartOutlined />
                <Text className={Style['spacer-left']}>Wish List</Text>
              </div>
              <Text className={Style['total']}>(0)</Text>
            </Card>
            <Card className={Style['card']}>
              <div className={Style['row']}>
                <HeartOutlined />
                <Text className={Style['spacer-left']}>Q&A Product</Text>
              </div>
              <Text className={Style['total']}>(0)</Text>
            </Card>
          </div>
        </div>
        <div className={Style['wrap-description']}>
          <div className={Style['row']}>
            <Text className={Style['title']}>Harga</Text>
            <Text className={Style['price']}>Rp. 112.300</Text>
          </div>
          <div className={Style['row']}>
            <Text className={Style['title']}>Cicilan</Text>
            <Text>Cicilan mulai dari Rp.100.000</Text>
          </div>
          <div className={Style['description']}>
            <div>Deskripsi</div>
            <div>
              Commodo incididunt incididunt minim Lorem nulla duis ullamco veniam et occaecat
              exercitation non. Aute nulla dolore pariatur commodo aute fugiat Lorem aliqua aute
              fugiat ipsum cillum. Voluptate esse do aliqua voluptate laboris eu ex labore ea ad in
              ex. Ea qui sint Lorem duis aliquip excepteur pariatur reprehenderit aliqua ut laborum
              sit commodo.
            </div>
          </div>
          <Button type="primary" onClick={() => dispatch(addDataCheckout(tempData))}>
            Add to Chart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
