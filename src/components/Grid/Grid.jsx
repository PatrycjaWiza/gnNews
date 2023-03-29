import './GridStyles.css';

export const Grid = ({ news, getNewsDetails }) => {
  const date = news.publishedAt;
  const array = date.split('T');
  array.pop();
  const publishedDate = array.join('');
  return (
    <li onClick={() => getNewsDetails()} className="card col">
      <img
        src={
          news.urlToimage
            ? news.urlToimage
            : 'https://vignette3.wikia.nocookie.net/canadians-vs-vampires/images/a/a4/Not_available_icon.jpg/revision/latest?cb=20130403054528'
        }
        className="card-img-top"
        alt={news.title}
      />

      <div className="card-body">
        <h3 className="card-title">{news.title}</h3>
        <p className="card-subtitle mb-2 text-muted">
          {news.source.name}, {publishedDate}
        </p>
        <p className="card-text">
          {news.description
            ? news.description
            : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        </p>
      </div>
    </li>
  );
};
