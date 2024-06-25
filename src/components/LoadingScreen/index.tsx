import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="primary" role="status">
      <span className="sr-only d-none">Carregando</span>
      </Spinner>
    </div>
  );
};

export default LoadingScreen;
