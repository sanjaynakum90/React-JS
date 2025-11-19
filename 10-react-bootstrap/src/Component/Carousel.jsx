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
        {
            id: 4,
            title: "Tropical Beach Escape",
            image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
            descriptions:
                "Relax on white sandy beaches with turquoise waters and warm tropical breezes",
        },
        {
            id: 5,
            title: "Safari Wildlife Expedition",
            image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",
            descriptions:
                "Get close to exotic wildlife and breathtaking landscapes on an African safari",
        },
        {
            id: 6,
            title: "Snowy Winter Wonderland",
            image: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
            descriptions:
                "Experience snowy forests, cozy cabins, and magical winter views",
        },
        {
            id: 7,
            title: "Island Hopping Adventure",
            image: "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg",
            descriptions:
                "Discover hidden islands, crystal-clear waters, and unforgettable sunsets",
        },
        {
            id: 8,
            title: "Desert Dune Exploration",
            image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
            descriptions:
                "Ride across golden sand dunes and experience the vast beauty of the desert",
        }

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