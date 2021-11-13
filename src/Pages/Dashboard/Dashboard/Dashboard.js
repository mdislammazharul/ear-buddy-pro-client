import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Pay from '../Pay/Pay';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddReviews from '../AddReviews/AddReviews';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {!admin && <Box>
                <Button sx={{ mt: 1, mb: 1, ':hover': { color: 'white', } }} component={Link} to="/home" variant="contained">Home</Button> <br />
                <Button sx={{ mb: 1, ':hover': { color: 'white', } }} component={Link} to={`${url}/pay`} variant="contained" color="primary">Pay</Button> <br />
                <Button sx={{ mb: 1, ':hover': { color: 'white', } }} component={Link} to={`${url}/myOrders`} variant="contained" color="primary">My Orders</Button>
                <Button sx={{ mb: 1, ':hover': { color: 'white', } }} component={Link} to={`${url}/reviews`} variant="contained" color="primary">Reviews</Button>
            </Box>
            }
            {admin && <Box>
                <Button sx={{ mt: 1, mb: 1, ':hover': { color: 'white', } }} component={Link} to="/home" variant="contained">Home</Button>
                <Button sx={{ mb: 1, ':hover': { color: 'white', } }} component={Link} to={`${url}/manageAllOrders`} variant="contained">Manage All Orders</Button>
                <Button sx={{ mb: 1, ':hover': { color: 'white', } }} component={Link} to={`${url}/addProducts`} variant="contained">Add A Product</Button>
                <Button sx={{ mb: 1, ':hover': { color: 'white', } }} component={Link} to={`${url}/makeAdmin`} variant="contained">Make Admin</Button>
                <Button sx={{ mb: 1, ':hover': { color: 'white', } }} component={Link} to={`${url}/manageProducts`} variant="contained">Manage Products</Button>
            </Box>}
            <Button onClick={logout} variant="contained" color="secondary">Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route exact path={`${path}/reviews`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${url}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    {/* have to add button & path on the upper portion of this file */}
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
