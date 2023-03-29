import './ListStyles.css';

export const List = ({ news, getNewsDetails }) => {
  const date = news.publishedAt;
  const array = date.split('T');
  array.pop();
  const publishedDate = array.join('');
  return (
    <li onClick={() => getNewsDetails()} className="list-group-item">
      <h3>{news.title}</h3>
      <p>
        {news.source.name}, {publishedDate}
      </p>
    </li>
  );
};
