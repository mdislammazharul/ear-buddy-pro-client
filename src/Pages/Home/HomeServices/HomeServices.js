import { Card, Container, CardContent, CardMedia, Grid, Typography, CardActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const HomeServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const sliceServices = services.slice(0, 6);
    return (
        <Container>
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