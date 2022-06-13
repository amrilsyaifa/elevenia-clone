import { Typography, Card, Image, Button } from 'antd';
import React from 'react';
import { EnvironmentOutlined, StockOutlined } from '@ant-design/icons';
import Style from './ShoppingCard.module.scss';
import { formatCurrency } from 'src/Reusables/Helpers/CurrencyHelper';

const { Text } = Typography;

interface IShoppingCard {
  isLoading?: boolean;
  url?: string;
  title: string;
  sellerItem: string;
  price: number | string;
  stock: string | number;
  sellCount: string | number;
  ProductOptionDetails?: string;
  onAddToCart?: (e) => void;
  onClick: (e) => void;
}

const ShoppingCard: React.FC<IShoppingCard> = ({
  isLoading,
  title,
  sellerItem,
  price,
  stock,
  sellCount,
  url,
  ProductOptionDetails,
  onClick,
  onAddToCart
}) => {
  return (
    <>
      <Card className={Style['card']} loading={isLoading} onClick={onClick} data-testid="click">
        <Image
          width={200}
          height={200}
          src="error"
          fallback={url || '/assets/images/default-image.jpeg'}
        />
        <div className={Style['wrapper-title']}>
          <div className={Style['title']}>
            <Text>{title}</Text>
          </div>
          <Text className={Style['percentage']}>SKU: {sellerItem || '-'}</Text>
          <Text className={Style['description']}>Deskripsi: </Text>
          <div>{ProductOptionDetails || '-'}</div>
        </div>
        <div className={Style['wrapper-cost']}></div>
        <div className={Style['row']}>
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
          <div className={Style['wrapper-price']}>
            <Text className={Style['price']} data-testid="currency">
              {formatCurrency(+price)}
            </Text>
          </div>
        </div>
        <div className={Style['button']}>
          <Button type="primary" onClick={onAddToCart} data-testid="add">
            Add to Chart
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ShoppingCard;
