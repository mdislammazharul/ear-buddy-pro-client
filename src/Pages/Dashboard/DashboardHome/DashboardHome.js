import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <Box>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                Welcome to Dashboard
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <img style={{ width: '400px' }} src="https://i.ibb.co/rxwXfq8/Control-Panel-rafiki.png" alt="" />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                User Name: {user.displayName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email: {user.email}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardHome;