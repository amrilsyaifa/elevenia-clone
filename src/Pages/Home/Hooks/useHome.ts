import { isEmpty } from 'src/Reusables/Helpers/CommonFunctions';
import XMLParser from 'react-xml-parser';
import Api from 'src/Reusables/Services/Api.Services';

const useHome = () => {
  const onFetchData = async () => {
    try {
      const data: any = [];
      const response = await Api.get('prodservices/product/listing?page=1');
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
              data.push(productObject);
            }
          }
        }
      }
      console.log('response ', data);
    } catch (error) {
      console.log('catch error ', error);
    }
  };

  return {
    onFetchData
  };
};

export default useHome;
