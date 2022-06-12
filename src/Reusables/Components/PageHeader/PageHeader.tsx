import { Typography, Input } from 'antd';
import React from 'react';
import Basket from '../Basket';
import { useAppSelector } from 'src/Hooks/useReduxHooks';
import { useAppDispatch } from 'src/Hooks/useReduxHooks';
import Style from './PageHeader.module.scss';
import { useLocation, useRoute } from 'wouter';
import { onChangeSearch } from 'src/Store/Reducers/Header.Reducers';

const { Text } = Typography;
const { Search } = Input;

const PageHeader: React.FC = () => {
  const [, go] = useLocation();
  const [match] = useRoute('/');
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.checkout.data);
  const search = useAppSelector((state) => state.header.search);

  const onNavigate = () => {
    go('/detail-product/checkout');
  };

  const onSearchChange = (e) => {
    dispatch(onChangeSearch(e.target.value));
  };

  return (
    <div className={Style['container']}>
      <div className={Style['wrapper-right-text']}>
        <div className={Style['wrapper-text']}>
          <Text className={Style['text']}>Login</Text>
          <Text className={Style['text']}>Logout</Text>
          <Basket total={data.length} onClick={onNavigate} />
        </div>
      </div>
      <div className={!match ? Style['header-wrapper-single'] : Style['header-wrapper']}>
        <img src="/assets/images/logo.png" alt="logo" onClick={() => go('/')} />
        {match && (
          <Search
            className={Style['search']}
            placeholder="Cari Produk"
            allowClear
            enterButton="Cari"
            size="large"
            value={search}
            onChange={onSearchChange}
          />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
