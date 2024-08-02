
import './ThankYou.css'; 

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="message">
        <h1>Thank You for Your Purchase!</h1>
        <div className="checkmark-container">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14 27l7 7 13-13"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;