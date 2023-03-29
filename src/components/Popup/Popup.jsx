import './PopupStyles.css';

export const Popup = ({ closePopup }) => {
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Likes and Dislikes</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closePopup()}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              The most enjoable for me is to find a logic path to accomplish
              certain task. Seeing then results of clickable application makes
              me very satisfied and happy of my work. This is what moves me
              forward and motivates. <br />
              <br /> The hardest for me right now is Redux, so many requirements
              which at the beginning may be somehow confusing... However I do
              understand the easiness of using one store in more complex
              projects when passing through props between components can be a
              burden.
              <br />
              <br />I am excited to see myself becoming experienced (fluent)
              programmer.😃
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
