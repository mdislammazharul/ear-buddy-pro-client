import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Service = ({ service }) => {
    const { img, name, type, description, price, id } = service;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, mb: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Price: ${price}
                    </Typography>
                </CardContent>

                <NavLink to={`/purchase/${id}`}>
                    <Button className="mb-3" size="small">Book {name.toUpperCase()}</Button>
                </NavLink>
            </Card>
        </Grid >
    );
};

export default Service;