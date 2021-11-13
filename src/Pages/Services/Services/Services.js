import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const Services = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
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