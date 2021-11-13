import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';

let spinner = true;

const FAQ = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fast-island-52786.herokuapp.com/faq')
            .then(res => res.json())
            .then(data => setServices(data));
        if (services) {
            spinner = false;
        }
    }, []);

    if (spinner) {
        return <div className="d-flex justify-content-center my-3"><Spinner animation="border" variant="danger" /></div>
    }

    return (
        <Container id="faq">
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                Frequently Asked Question
            </Typography>
            <div className="row mx-5 mb-5">
                {
                    services.map(service =>
                        // console.log(service)
                        <Accordion className="text-center">
                            <Accordion.Item eventKey={service.id}>
                                <Accordion.Header>{service.name}</Accordion.Header>
                                <Accordion.Body>
                                    {service.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                }
            </div>
        </Container>
    );
};

export default FAQ;