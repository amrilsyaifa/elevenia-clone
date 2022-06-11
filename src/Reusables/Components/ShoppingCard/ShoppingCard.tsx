import { Typography, Card, Image } from 'antd';
import React from 'react';
import { ShopOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Style from './ShoppingCard.module.scss';

const { Text } = Typography;

interface IShoppingCard {
  isLoading: boolean;
  url?: string;
  title: string;
  percentage: number;
  oldPrice: number;
  price: number;
  storeName: string;
  location: string;
}

const ShoppingCard: React.FC<IShoppingCard> = ({
  isLoading,
  title,
  percentage,
  oldPrice,
  price,
  storeName,
  location,
  url
}) => {
  return (
    <>
      <Card style={{ width: 250, minHeight: 400 }} loading={isLoading}>
        <Image
          width={200}
          height={200}
          src="error"
          fallback={url || '/assets/images/default-image.jpeg'}
        />
        <div className={Style['title']}>
          <Text>{title}</Text>
        </div>
        <div className={Style['wrapper-cost']}>
          <Text className={Style['percentage']}>{percentage}%</Text>
          <div className={Style['wrapper-price']}>
            <Text className={Style['old-price']}>{oldPrice}</Text>
            <Text className={Style['price']}>{price}</Text>
          </div>
        </div>
        <div className={Style['wrapper-location']}>
          <div>
            <ShopOutlined />
            <Text className={Style['name']}>{storeName}</Text>
          </div>
          <div>
            <EnvironmentOutlined />
            <Text className={Style['name']}>{location}</Text>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ShoppingCard;
