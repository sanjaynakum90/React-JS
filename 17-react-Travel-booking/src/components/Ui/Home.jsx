import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
    return (
        <Carousel fade className="carousel-container">
            <Carousel.Item>
                <video className="d-block w-100 p-3 carousel-media "  autoPlay loop muted style={{ height: '600px', objectFit: 'cover', borderRadius: 'px' }}>
                    <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Carousel.Caption className="carousel-caption-overlay">
                    <h3 className="display-5 fw-bold text-white mb-3">Explore Amazing Destinations</h3>
                    <p className="fs-5 text-light">Discover the world's most beautiful places with us.</p>
                    <button className="btn btn-light btn-lg mt-3">Explore Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='rounded-4'>
                <img 
                    className="d-block w-100 p-3 carousel-media" 
                    src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1920" 
                    alt="Beautiful beach destination"  
                    style={{ height: '600px', objectFit: 'cover', borderRadius: '50px' }}
                />
                <Carousel.Caption className="carousel-caption-overlay">
                    <h3 className="display-5 fw-bold text-white mb-3">Tropical Paradise</h3>
                    <p className="fs-5 text-light">Relax on pristine beaches and crystal clear waters.</p>
                    <button className="btn btn-light btn-lg mt-3">Book Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100 p-3 carousel-media" 
                    src="https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg" 
                    alt="Mountain landscape" 
                    style={{ height: '600px', objectFit: 'cover', borderRadius: '50px' }}
                />
                <Carousel.Caption className="carousel-caption-overlay">
                    <h3 className="display-5 fw-bold text-white mb-3">Mountain Adventures</h3>
                    <p className="fs-5 text-light">Experience breathtaking views and unforgettable journeys.</p>
                    <button className="btn btn-light btn-lg mt-3">Discover More</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;