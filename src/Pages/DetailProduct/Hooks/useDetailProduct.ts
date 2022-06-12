import { useState } from 'react';
import { isEmpty } from 'src/Reusables/Helpers/CommonFunctions';
import XMLParser from 'react-xml-parser';
import Api from 'src/Reusables/Services/Api.Services';
import { IListDataProduct } from 'src/Pages/Home/Hooks/useHome';

const useDetailProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onFetchData = async (id: string) => {
    setIsLoading(true);
    try {
      let data: IListDataProduct = {
        prdNm: '',
        sellerPrdCd: '',
        selPrc: '',
        stock: '',
        prdSelQty: '',
        prdImage01: ''
      };
      const response = await Api.get(`prodservices/product/details/${id}`);
      const news = new XMLParser().parseFromString(response.data);
      if (!isEmpty(news.children) && news.children.length > 0 && Array.isArray(news.children)) {
        let productObject = {};
        for (const k in news.children) {
          productObject = Object.assign(productObject, {
            [news.children[k].name]: news.children[k].value
          });
        }
        data = productObject as IListDataProduct;
      }
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      return [];
    }
  };
  return { onFetchData, isLoading };
};

export default useDetailProduct;
