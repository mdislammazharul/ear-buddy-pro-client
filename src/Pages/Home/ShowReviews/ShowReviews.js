import { Card, CardContent, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                Customer Reviews
            </Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{
                            maxWidth: 345, mb: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                        }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {review.productName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {review.description}
                                </Typography>
                                <Rating name="half-rating-read" value={review.rating} precision={0.5} readOnly />
                                <Typography variant="body2" color="text.secondary">
                                    Reviewed by
                                </Typography>
                                <Typography variant="body2">
                                    {review.userName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default ShowReviews;