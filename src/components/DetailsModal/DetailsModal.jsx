import './DetailsModalStyles.css';

export const DetailsModal = ({ closePopup, news }) => {
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{news.author}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closePopup()}
            ></button>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              {news.content === null
                ? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                : news.content}
            </p>

            <div className="modal-footer">
              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Click the link here to see the entire article.
              </a>
              <i className="nav-link px-2 text-muted">Distributed by NewsAPI</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
