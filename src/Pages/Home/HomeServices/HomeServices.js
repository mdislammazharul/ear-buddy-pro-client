import { Card, Container, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Spinner } from 'react-bootstrap';

let spinner = true;

const HomeServices = () => {
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

    const sliceServices = services.slice(0, 6);
    return (
        <Container id="homeServices">
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                Available Products
            </Typography>
            <Grid container spacing={2}>
                {
                    sliceServices.map(service => <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345, mb: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={service.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {service.name}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {service.type}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Price: ${service.price}
                                </Typography>
                            </CardContent>

                            <NavLink to={`/purchase/${service.id}`}>
                                <Button className="mb-3" size="small">Book {service.name.toUpperCase()}</Button>
                            </NavLink>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container >
    );
};

export default HomeServices;