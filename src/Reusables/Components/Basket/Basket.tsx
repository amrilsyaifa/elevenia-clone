import React from 'react';
import { Typography } from 'antd';
import Style from './Basket.module.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';

interface IBasket {
  total: number;
  onClick?: () => void;
}
const { Text } = Typography;

const Basket: React.FC<IBasket> = ({ total, onClick }) => {
  return (
    <div className={Style['container']} onClick={onClick} data-testid="basket">
      <div className={Style['wrapper-number']}>
        <Text className={Style['number']}>{total}</Text>
      </div>
      <ShoppingCartOutlined className={Style['shopping-icon']} />
    </div>
  );
};

export default Basket;
