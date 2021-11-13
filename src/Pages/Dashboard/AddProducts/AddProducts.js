import React, { useRef } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AddProducts = () => {
    const idRef = useRef();
    const nameRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleAddReview = e => {
        const idString = idRef.current.value;
        const id = parseInt(idString);
        const name = nameRef.current.value;
        const type = typeRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;

        if (id !== "null" && name !== "" && type !== "" && description !== "" && price !== "" && img !== "") {
            const newServices = { id, img, name, type, description, price };
            fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newServices)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Services added Successfully.')
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
            <h1>Add a Product</h1>
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
                        label="Product Id"
                        inputRef={idRef}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            m: 3
                        }}
                        required
                        id="outlined-required"
                        label="Product Name"
                        inputRef={nameRef}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            m: 3
                        }}
                        required
                        id="outlined-required"
                        label="Product Type"
                        inputRef={typeRef}
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
                        label="Product Description"
                        inputRef={descriptionRef}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            m: 3
                        }}
                        required
                        id="outlined-required"
                        label="Image URL"
                        inputRef={imgRef}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            m: 3
                        }}
                        required
                        id="outlined-required"
                        label="Product Cost"
                        inputRef={priceRef}
                    />
                    <Button type="submit" variant="contained">Add Product</Button>
                </Box>
            </form >
        </div >
    );
};

export default AddProducts;