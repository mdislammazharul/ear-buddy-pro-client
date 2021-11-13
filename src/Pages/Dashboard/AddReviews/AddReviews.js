import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddReviews = () => {
    const { user } = useAuth();
    const userName = user.displayName;
    const productNameRef = useRef();
    const descriptionRef = useRef();
    const ratingRef = useRef();

    const handleAddReview = e => {
        const ratingString = ratingRef.current.value;
        const rating = parseFloat(ratingString);
        const productName = productNameRef.current.value;
        const description = descriptionRef.current.value;

        if (productName !== "" && description !== "" && rating !== "") {
            const newReview = { userName, productName, description, rating };
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newReview)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Review added Successfully.')
                        e.target.reset();
                    }
                })
            e.preventDefault();
        }
        else {
            alert('Please Fill All the Information')
        }

    }
    return (
        <div>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                Add Your Review
            </Typography>
            <form onSubmit={handleAddReview}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                    }}
                >
                    <TextField
                        sx={{
                            width: '50%',
                            m: 3
                        }}
                        required
                        id="outlined-required"
                        label="Product Name"
                        inputRef={productNameRef}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            m: 3
                        }}
                        multiline={true}
                        row={3}
                        required
                        id="outlined-required"
                        label="Review Description"
                        inputRef={descriptionRef}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            m: 3
                        }}
                        required
                        id="outlined-required"
                        label="Rating (Numbers Only)"
                        inputRef={ratingRef}
                    />
                    <Button type="submit" variant="contained">Add Review</Button>
                </Box>
            </form>
        </div>
    );
};

export default AddReviews;