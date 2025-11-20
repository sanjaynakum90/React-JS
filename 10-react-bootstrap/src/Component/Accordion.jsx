import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

function AccordionComponent() {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        What travel packages do you offer?
                    </Accordion.Header>
                    <Accordion.Body>
                        We offer a wide range of travel packages including family tours,
                        honeymoon trips, adventure tours, corporate travel, and customized
                        packages based on your interests and budget. You can also request
                        tailor-made itineraries for any destination worldwide.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Can I customize my travel itinerary?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes, absolutely! You can fully customize your itinerary by choosing
                        destinations, hotel types, number of days, activities, and other
                        preferences. Our team will assist you in crafting the perfect trip
                        according to your needs.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Do you provide visa and travel insurance services?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes, we provide complete visa assistance, travel insurance, flight
                        bookings, and hotel reservations. We ensure a hassle-free travel
                        experience so you can focus on enjoying your trip.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is your cancellation policy?</Accordion.Header>
                    <Accordion.Body>
                        Cancellations made 15 days before the travel date are eligible for a
                        full refund. Cancellations made between 7-14 days may incur partial
                        charges. Last-minute cancellations (less than 7 days) are subject to
                        hotel, flight, and booking deductions.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default AccordionComponent;