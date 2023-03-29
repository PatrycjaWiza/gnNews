import './PageStyles.css';
import './CountryPageStyles.css';

import { getNews } from 'api/services';
import { List } from 'components/List/List';
import { useEffect } from 'react';
import { useState } from 'react';
import { DetailsModal } from 'components/DetailsModal/DetailsModal';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import { selectViewState } from 'redux/selector';
import { useSelector } from 'react-redux';
import { Grid } from 'components/Grid/Grid';
import ReactCountryFlag from 'react-country-flag';

export default function CountryPage() {
  const { countryCode } = useParams();
  const [allNews, setAllNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [idN, setId] = useState('');
  const totalNews = Object.keys(allNews).length;
  const viewStyle = useSelector(selectViewState);
  const renderNews = async () => {
    try {
      setLoading(true);
      const fetchNews = await getNews(countryCode);
      setAllNews([...allNews, ...fetchNews]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setAllNews([]);
  }, []);
  useEffect(() => {
    renderNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  return (
    <>
      <div className="container">
        <h2>
          Top headlines from {countryCode.toUpperCase()}{' '}
          <ReactCountryFlag
            className="country-flag"
            countryCode={countryCode}
            svg
          />
        </h2>
        <ul
          className={
            viewStyle === 'list'
              ? 'list-group list-group-flush'
              : 'row row-cols-1 row-cols-sm-2 row-cols-md-4'
          }
        >
          {allNews.map(n =>
            viewStyle === 'list' ? (
              <List
                key={nanoid()}
                news={n}
                getNewsDetails={() => setOpenModal(true) & setId(n.title)}
              />
            ) : (
              <Grid
                key={nanoid()}
                news={n}
                getNewsDetails={() => setOpenModal(true) & setId(n.title)}
              />
            )
          )}
        </ul>
        {error && <p>{error.message}</p>}
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
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
      </div>
      <Footer noOfArticles={totalNews} />
    </>
  );
}
