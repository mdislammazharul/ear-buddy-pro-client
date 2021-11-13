import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

let spinner = true;

const Services = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fast-island-52786.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
        if (services) {
            spinner = false;
        }
    }, [])

    if (spinner) {
        return <div className="d-flex justify-content-center my-3"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                Our Products
            </Typography>
            <Grid container spacing={2}>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </Grid>
        </Container>
    );
};

export default Services;