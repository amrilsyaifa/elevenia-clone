import { isEmpty } from 'src/Reusables/Helpers/CommonFunctions';
import { useState } from 'react';
import XMLParser from 'react-xml-parser';
import Api from 'src/Reusables/Services/Api.Services';

// url={item.url}
//                 title={item.prdNm}
//                 sellerItem={item.sellerPrdCd}
//                 price={item.selPrc}
//                 stock={item.stock}
//                 sellCount={item.prdSelQty}
export interface IListDataProduct {
  url?: string;
  prdNm: string;
  sellerPrdCd: string;
  selPrc: string;
  stock: string;
  prdSelQty: string;
}

const useHome = () => {
  const [page, setPage] = useState<number>(1);
  const onFetchData = async (params?: number) => {
    try {
      const data: IListDataProduct[] = [];
      const response = await Api.get(`prodservices/product/listing?page=${params || page}`);
      const news = new XMLParser().parseFromString(response.data);
      for (const i in news) {
        if (!isEmpty(news[i]) && news[i].length > 0 && Array.isArray(news[i])) {
          const news2 = news[i];
          for (const j in news2) {
            const product = news2[j].children;
            if (!isEmpty(product) && product.length > 0 && Array.isArray(product)) {
              let productObject = {};
              for (const k in product) {
                productObject = Object.assign(productObject, {
                  [product[k].name]: product[k].value
                });
              }
              data.push(productObject as IListDataProduct);
            }
          }
        }
      }
      return data;
    } catch (error) {
      return [];
    }
  };
  const loadMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const response = await onFetchData(nextPage);
    return response;
  };

  return {
    onFetchData,
    loadMoreData
  };
};

export default useHome;
