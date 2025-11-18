import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
    const carouselData = [
        {
            id: 1,
            title: "Serene Lake Retreat",
            image:
                "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
            descriptions:
                "Escape to peaceful lakes surrounded by lush greenery and fresh mountain air",
        },
        {
            id: 2,
            title: "Urban City Adventure",
            image:
                "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
            descriptions:
                "Explore modern architecture, vibrant streets, and cultural highlights in the city",
        },
        {
            id: 3,
            title: "Majestic Mountain Journey",
            image:
                "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg",
            descriptions:
                "Experience stunning mountain views, hiking trails, and nature’s beauty",
        },
    ];

    return (
        <Carousel>
            {carouselData.map((c) => {
                return (
                    <Carousel.Item key={c.id}>
                        <img
                            src={c.image}
                            alt={"image" + c.id}
                            style={{ width: "100%", height: "700px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>{c.title}</h3>
                            <p>{c.descriptions}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default UncontrolledExample;