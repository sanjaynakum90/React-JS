import { Container, Spinner } from 'react-bootstrap';

const LoadingPage = () => {
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
        >
            <div className="text-center">
                <Spinner
                    animation="border"
                    variant="primary"
                    style={{ width: '4rem', height: '4rem' }}
                    className="mb-4"
                />

                <h3 className="fw-bold text-primary mb-2">Loading...</h3>
                <p className="text-muted">Please wait while we prepare your content</p>
            </div>
        </Container>
    );
};

export default LoadingPage;