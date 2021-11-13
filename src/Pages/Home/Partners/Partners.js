import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import JBL from '../../../images/JBL-logos.jpg';
import bose from '../../../images/bose_logo.jpg'
import beats from '../../../images/beats_logo.jpg'

const partners = [
    {
        name: 'JBL',
        description: 'JBL Professional serves the studio, installed sound, tour sound, portable sound, cars, production, disc jockey, cinema markets, etc. JBL is owned by Harman International Industries a subsidary of Samsung Electronics.',
        img: JBL
    },
    {
        name: 'BOSE',
        description: 'A prototype Bose product was used to prevent hearing loss in pilots during the first non-stop around-the-world flight in the Rutan Voyager. The company was the first to release active noise cancelling headphones as a consumer product.',
        img: bose
    },
    {
        name: 'BEATS',
        description: 'Beats Electronics LLC is an American consumer audio products manufacturer headquartered in Culver City, California. The company was founded by music producer Dr. Dre and record company executive Jimmy Iovine. Since 2014, it has been an Apple subsidiary.',
        img: beats
    }
]


const Partners = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                    Our Partners
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        partners.map(service => <Grid item xs={4} sm={4} md={4}>
                            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                                    image={service.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Partners;