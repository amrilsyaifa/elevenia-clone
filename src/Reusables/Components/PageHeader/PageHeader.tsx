import { Typography, Input } from 'antd';
import React from 'react';
import Basket from '../Basket';
import { useAppSelector } from 'src/Hooks/useReduxHooks';
import Style from './PageHeader.module.scss';

const { Text } = Typography;
const { Search } = Input;

const PageHeader: React.FC = () => {
  const onSearch = (value: string) => console.log(value);
  const data = useAppSelector((state) => state.checkout.data);
  return (
    <div className={Style['container']}>
      <div className={Style['wrapper-right-text']}>
        <div className={Style['wrapper-text']}>
          <Text className={Style['text']}>Login</Text>
          <Text className={Style['text']}>Logout</Text>
          <Basket total={data.length} />
        </div>
      </div>
      <div className={Style['header-wrapper']}>
        <img src="/assets/images/logo.png" alt="logo" />
        <Search
          className={Style['search']}
          placeholder="Cari Produk"
          allowClear
          enterButton="Cari"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default PageHeader;
