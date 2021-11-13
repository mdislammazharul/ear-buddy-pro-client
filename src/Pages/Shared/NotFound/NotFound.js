import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notFound} alt=""></img>
            <Link to="/"><Button variant="contained">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;