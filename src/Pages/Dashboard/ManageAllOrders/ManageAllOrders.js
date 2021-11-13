import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setUsers(data))
        // if (users) {
        //     spinner = false;
        // }
    }, [])

    // if (spinner) {
    //     return <div className="d-flex justify-content-center my-3"><Spinner animation="border" variant="danger" /></div>
    // }
    // delete an user
    const handleDeleteUser = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete?');

        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    users.map(item => <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                                image={item.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography> */}
                                <Typography sx={{ mt: 2 }} variant="h7" component="div">
                                    Quantity: {item.quantity}
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="h7" component="div">
                                    Shipping Address: {item.address}
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="h7" component="div">
                                    Odered By: {item.userName}
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="h7" component="div">
                                    Email: {item.userEmail}
                                </Typography>
                                <Button sx={{ mt: 2 }} type="submit" variant="contained" onClick={() => handleDeleteUser(item._id)}>Delete Order</Button>
                            </CardContent>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Box >
    );
};

export default ManageAllOrders;