import { useEffect, useState } from 'react';
import './FooterStyles.css';

export const Footer = ({ noOfArticles }) => {
  const [time, setTime] = useState(new Date());
  const [theTime, setTheTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    const updatedTime = time.toLocaleTimeString('pl', {
      hour: 'numeric',
      hour12: false,
      minute: 'numeric',
    });
    setTheTime(updatedTime);
    return clearInterval(timer);
  }, [time]);

  setInterval(() => {
    setTime(new Date()) && console.log(theTime);
  }, 60000);

  return (
    <footer>
      <ul className="nav border-bottom">
        <li className="nav-item">
          <p className="nav-link px-1 text-muted">current time: {theTime}</p>
        </li>
        <li className="nav-item">
          <p className="nav-link px-2 text-muted">
            total articles: {noOfArticles}
          </p>
        </li>
      </ul>
      <p className="text-center text-muted">© 2023 gnNews, Inc</p>
    </footer>
  );
};
