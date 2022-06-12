import React, { useEffect, useState } from 'react';
import { Button, Image, Card, Typography, Spin } from 'antd';
import { useRoute } from 'wouter';
import { useAppDispatch } from 'src/Hooks/useReduxHooks';
import { addDataCheckout } from 'src/Store/Reducers/Checkout.Reducers';
import Style from './DetailProduct.module.scss';
import { HeartOutlined } from '@ant-design/icons';
import useDetailProduct from './Hooks/useDetailProduct';
import { formatCurrency } from 'src/Reusables/Helpers/CurrencyHelper';
import { isEmpty } from 'src/Reusables/Helpers/CommonFunctions';

const { Text } = Typography;

const DetailProduct = () => {
  const [data, setData] = useState<any>({});
  const [displayImage, setDisplayImage] = useState('');
  const { onFetchData, isLoading } = useDetailProduct();
  const dispatch = useAppDispatch();
  const [match, params] = useRoute('/detail/:id');

  useEffect(() => {
    onFetchingData();
  }, []);

  const onFetchingData = async () => {
    if (params?.id) {
      const result: any = await onFetchData(params.id);
      setData(result);
      setDisplayImage(result.prdImage01);
    }
  };
  if (match) {
    return (
      <div>
        {isLoading ? (
          <div className={Style['loading']}>
            <Spin />
          </div>
        ) : !isEmpty(data) ? (
          <div>
            <div className={Style['title']}>{data.prdNm}</div>
            <div className={Style['container']}>
              <div className={Style['wrap-image']}>
                <Image width={300} src={displayImage || '/assets/images/default-image.jpeg'} />
                <div className={Style['wrap-image-small']}>
                  {data.prdImage01 && (
                    <Image
                      width={50}
                      src={data.prdImage01}
                      onClick={() => setDisplayImage(data.prdImage01)}
                      preview={false}
                    />
                  )}
                  {data.prdImage02 && (
                    <Image
                      width={50}
                      src={data.prdImage02}
                      onClick={() => setDisplayImage(data.prdImage02)}
                      preview={false}
                    />
                  )}
                  {data.prdImage03 && (
                    <Image
                      width={50}
                      src={data.prdImage03}
                      onClick={() => setDisplayImage(data.prdImage03)}
                      preview={false}
                    />
                  )}
                  {data.prdImage04 && (
                    <Image
                      width={50}
                      src={data.prdImage04}
                      onClick={() => setDisplayImage(data.prdImage04)}
                      preview={false}
                    />
                  )}
                </div>
                <div className={Style['wrap-box']}>
                  <Card className={Style['card']}>
                    <div className={Style['row']}>
                      <HeartOutlined />
                      <Text className={Style['spacer-left']}>Stok</Text>
                    </div>
                    <Text className={Style['total']}>({data.stock})</Text>
                  </Card>
                  <Card className={Style['card']}>
                    <div className={Style['row']}>
                      <HeartOutlined />
                      <Text className={Style['spacer-left']}>Terjual</Text>
                    </div>
                    <Text className={Style['total']}>({data?.prdSelQty})</Text>
                  </Card>
                </div>
              </div>
              <div className={Style['wrap-description']}>
                <div className={Style['row']}>
                  <Text className={Style['title']}>Harga</Text>
                  <Text className={Style['price']}>{formatCurrency(+data.selPrc)}</Text>
                </div>
                <div className={Style['row']}>
                  <Text className={Style['title']}>Cicilan</Text>
                  <Text>Cicilan mulai dari {formatCurrency(+data.selPrc)}</Text>
                </div>
                <div className={Style['description']}>
                  <div>Deskripsi</div>
                  <div dangerouslySetInnerHTML={{ __html: data.htmlDetail }} />
                </div>
                <Button type="primary" onClick={() => dispatch(addDataCheckout(data))}>
                  Add to Chart
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>data not found</div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default DetailProduct;
