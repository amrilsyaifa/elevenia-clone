import React from 'react';
import { Image, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from 'src/Hooks/useReduxHooks';
import { removeDataCheckout } from 'src/Store/Reducers/Checkout.Reducers';
import Style from './Checkout.module.scss';

const Checkout = () => {
  const data = useAppSelector((state) => state.checkout.data);
  const dispatch = useAppDispatch();

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, idx) => (
        <List.Item
          actions={[
            <div
              key="list-loadmore-edit"
              className={Style['wraper-button']}
              onClick={() => dispatch(removeDataCheckout(idx))}>
              <DeleteOutlined className={Style['icon']} />
            </div>
          ]}>
          <List.Item.Meta
            avatar={
              <Image
                src={item.url || item.prdImage01 || '/assets/images/default-image.jpeg'}
                width={60}
              />
            }
            title={<a href={item.prdNm}>{item.prdNm}</a>}
            description={'-'}
          />
        </List.Item>
      )}
    />
  );
};

export default Checkout;
