import React, { useEffect, useState } from 'react';
import { List, Spin, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import ShoppingCard from 'src/Reusables/Components/ShoppingCard';
import useHome, { IListDataProduct } from './Hooks/useHome';
import Style from './Home.module.scss';

const Home = () => {
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
          renderItem={(item: any) => (
            <List.Item>
              <ShoppingCard
                url={item.url}
                title={item.prdNm}
                sellerItem={item.sellerPrdCd}
                price={item.selPrc}
                stock={item.stock}
                sellCount={item.prdSelQty}
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Home;
