import { useState } from 'react';
import XMLParser from 'react-xml-parser';
import Api from 'src/Reusables/Services/Api.Services';

const useDetailProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onFetchData = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await Api.get(`prodservices/product/details/${id}`);
      const news = new XMLParser().parseFromString(response.data);
      console.log('isi news ', news);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return [];
    }
  };
  return { onFetchData, isLoading };
};

export default useDetailProduct;
