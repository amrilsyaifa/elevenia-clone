import React, { useEffect, useState } from 'react';
import { List, Spin, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import ShoppingCard from 'src/Reusables/Components/ShoppingCard';
import useHome, { IListDataProduct } from './Hooks/useHome';
import Style from './Home.module.scss';
import { useAppDispatch } from 'src/Hooks/useReduxHooks';
import { addDataCheckout } from 'src/Store/Reducers/Checkout.Reducers';
import { useLocation } from 'wouter';

const Home = () => {
  const [, setLocation] = useLocation();
  const dispatch = useAppDispatch();
  const { onFetchData, loadMoreData } = useHome();

  const [data, setData] = useState<IListDataProduct[]>([]);

  useEffect(() => {
    onFetchingData();
  }, []);

  const onFetchingData = async () => {
    const response = await onFetchData();
    setData(response);
  };

  const onLoadMoreData = async () => {
    const response: IListDataProduct[] = await loadMoreData();
    const newData: IListDataProduct[] = [...data, ...response];
    setData(newData);
  };

  const onNavigate = (event, item: IListDataProduct) => {
    console.log('isi ', item);
    setLocation(`detail-product/detail/${item.prdNo}`);
  };

  const onAddToChart = (event, item: IListDataProduct) => {
    event.stopPropagation();
    dispatch(addDataCheckout(item));
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={onLoadMoreData}
        hasMore={data.length < 200}
        loader={
          <div className={Style['loading-wrapper']}>
            <Spin tip="Loading..." />
          </div>
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv">
        <List
          grid={{
            gutter: 4,
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4
          }}
          dataSource={data}
          renderItem={(item: IListDataProduct) => (
            <List.Item>
              <ShoppingCard
                url={item.prdImage01}
                title={item.prdNm}
                sellerItem={item.sellerPrdCd}
                price={item.selPrc}
                stock={item.stock}
                sellCount={item.prdSelQty}
                onClick={(e) => onNavigate(e, item)}
                onAddToCart={(e) => onAddToChart(e, item)}
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Home;
