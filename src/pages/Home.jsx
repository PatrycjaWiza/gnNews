import './PageStyles.css';

import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { getNews } from 'api/services';
import { SideBar } from 'components/SideBar/SideBar';
import { Footer } from 'components/Footer/Footer';
import { countryCodeArray } from 'components/countryCodes';

export default function HomePage() {
  const [allNews, setAllNews] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [countryCode, setCountryCode] = useState('gb');
  // eslint-disable-next-line no-unused-vars
  // const [searchParams, setSearchParams] = useSearchParams('gb');
  const renderNews = async () => {
    try {
      const fetchNews = await getNews(countryCode);
      setAllNews([...allNews, ...fetchNews]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setAllNews([]);
  }, []);
  useEffect(() => {
    renderNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);
  // const searchValue = value => {
  //   setAllNews([]);
  //   countryCodeArray.map(
  //     country =>
  //       country === value &&
  //       setCountryCode(country) &&
  //       setSearchParams({ query: countryCode })
  //   );
  // };
  return (
    <>
      <SideBar countryCodeArray={countryCodeArray} />
      <div className="home container">
        <h2>Choose country from list to see the top headlines</h2>
      </div>
      <Footer noOfArticles="0" />
    </>
  );
}
