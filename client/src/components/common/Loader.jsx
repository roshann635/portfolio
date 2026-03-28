import './Loader.css';

const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="loader">
      <div className="loader__spinner">
        <div className="loader__ring" />
        <div className="loader__ring" />
        <div className="loader__core" />
      </div>
      <p className="loader__text">{text}</p>
    </div>
  );
};

export default Loader;
