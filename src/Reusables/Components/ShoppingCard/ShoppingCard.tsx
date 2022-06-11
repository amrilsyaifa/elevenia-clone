import { Typography, Card, Image } from 'antd';
import React from 'react';
import { EnvironmentOutlined, StockOutlined } from '@ant-design/icons';
import Style from './ShoppingCard.module.scss';

const { Text } = Typography;

interface IShoppingCard {
  isLoading?: boolean;
  url?: string;
  title: string;
  sellerItem: string;
  price: number;
  stock: string | number;
  sellCount: string | number;
}

const ShoppingCard: React.FC<IShoppingCard> = ({
  isLoading,
  title,
  sellerItem,
  price,
  stock,
  sellCount,
  url
}) => {
  return (
    <>
      <Card className={Style['card']} loading={isLoading}>
        <Image
          width={200}
          height={200}
          src="error"
          fallback={url || '/assets/images/default-image.jpeg'}
        />
        <div className={Style['title']}>
          <Text>{title}</Text>
        </div>
        <Text className={Style['percentage']}>Seller’s Item: {sellerItem || '-'}</Text>
        <div className={Style['wrapper-cost']}>
          <div className={Style['wrapper-price']}>
            <Text className={Style['price']}>{price}</Text>
          </div>
        </div>
        <div className={Style['wrapper-location']}>
          <div>
            <StockOutlined />
            <Text className={Style['name']}>Stok: {stock}</Text>
          </div>
          <div>
            <EnvironmentOutlined />
            <Text className={Style['name']}>Terjual: {sellCount}</Text>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ShoppingCard;
