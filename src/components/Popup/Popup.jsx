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
              The most enjoable was CSS styling ❤ Magic of Bootstrap saves so
              much time (at least for such beginners like me). <br />
              <br /> The hardest currently is Redux logic, so many requirements
              for easy things... Personally prefer playing with React, probably
              due to easiness of projects I've been working with. However I
              believe that with more programming experience my attitude will
              change 😊
              <br />
              <br />I am excited to see that happen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
