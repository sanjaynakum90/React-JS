import { Container, Button } from 'react-bootstrap';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="text-center">
                <div className="mb-4">
                    <i className="bi bi-exclamation-triangle-fill text-danger" style={{ fontSize: '5rem' }}></i>
                </div>

                <h1 className="display-4 fw-bold mb-3">Oops! Something went wrong</h1>

                <p className="text-muted fs-5 mb-4">
                    {error?.statusText || error?.message || "We couldn't find the page you're looking for."}
                </p>

                {error?.status && (
                    <p className="text-muted mb-4">
                        Error Code: <span className="fw-bold">{error.status}</span>
                    </p>
                )}

                <div className="d-flex gap-3 justify-content-center">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => navigate('/')}
                    >
                        <i className="bi bi-house-door me-2"></i>
                        Go Home
                    </Button>

                    <Button
                        variant="outline-secondary"
                        size="lg"
                        onClick={() => navigate(-1)}
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Go Back
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default ErrorElement;