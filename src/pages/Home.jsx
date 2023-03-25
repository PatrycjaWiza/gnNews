import './PageStyles.css';

import { getNews } from 'api/services';
import { SideBar } from 'components/SideBar/SideBar';
import { List } from 'components/List/List';
import { useEffect } from 'react';
import { useState } from 'react';
import { DetailsModal } from 'components/DetailsModal/DetailsModal';
import { nanoid } from 'nanoid';
import { Footer } from 'components/Footer/Footer';

export default function HomePage() {
  const [allNews, setAllNews] = useState([]);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [idN, setId] = useState('');
  const [countryCode, setCountryCode] = useState('gb');
  const totalNews = Object.keys(allNews).length;
  const renderNews = async () => {
    try {
      const fetchNews = await getNews(countryCode);
      setAllNews([...allNews, ...fetchNews]);
      console.log(allNews);
    } catch (error) {
      setError(error);
    }
  };
  const countryCodeArray = [
    'au',
    'be',
    'cz',
    'de',
    'fr',
    'gb',
    'gr',
    'it',
    'jp',
    'kr',
    'lt',
    'lv',
    'pl',
    'se',
    'sk',
    'us',
  ];
  useEffect(() => {
    setAllNews([]);
  }, []);
  useEffect(() => {
    renderNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);
  const searchValue = value => {
    setAllNews([]);
    countryCodeArray.map(
      country => country === value && setCountryCode(country)
    );
  };
  return (
    <>
      <SideBar
        countryCodeArray={countryCodeArray}
        passCountryCode={searchValue}
      />
      <h2>Top headlines</h2>
      <ul className="list-group list-group-flush">
        {allNews.map(n => (
          <List
            key={nanoid()}
            news={n}
            getNewsDetails={() => setOpenModal(true) & setId(n.title)}
          />
        ))}
      </ul>
      {error && <p>{error.message}</p>}
      {openModal &&
        allNews.map(
          n =>
            n.title === idN && (
              <DetailsModal
                key={nanoid()}
                news={n}
                closePopup={() => setOpenModal(false)}
              />
            )
        )}
      <Footer noOfArticles={totalNews} />
    </>
  );
}
