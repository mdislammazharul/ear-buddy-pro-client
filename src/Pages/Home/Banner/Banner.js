import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Start Your Audiophile <br />
                            Journey Here
                        </Typography>
                        <Typography variant="h6" sx={{
                            my: 3, fontSize: 13, fontWeight: 500, color: 'text.secondary'
                        }}>
                            At Headphones.com, we only want to show you products that are in stock and ready to ship.All of our products ship with same - day shipping and shipping is free* in North America.From Focal, Moondrop, Sennheiser, Hifiman and more, we will get you the best headphones with the best shipping.
                        </Typography>
                        <Button variant="contained">About Us</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://i.ibb.co/zJ32bmW/bose.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.ibb.co/x1ZJ6fG/jabra.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.ibb.co/MpC0zGs/brandon-romanchuk-x-INf9a-Sm9-KI-unsplash.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;