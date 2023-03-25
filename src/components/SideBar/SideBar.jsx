import './SideBarStyles.css';
import ReactCountryFlag from 'react-country-flag';
import { nanoid } from 'nanoid';

export const SideBar = ({ countryCodeArray, passCountryCode }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary sidebar"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
          <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z"></path>
        </svg>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Country list
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="list-group">
            {countryCodeArray.map(item => (
              <button
                key={nanoid()}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => passCountryCode(item)}
              >
                <ReactCountryFlag
                  className="country-flag"
                  countryCode={item}
                  svg
                />
                <ReactCountryFlag countryCode={item} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
