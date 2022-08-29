import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useSelector } from "../hooks/useTypedSelector";
import { Link, useNavigate } from 'react-router-dom';
import { useActions } from "../hooks/useActions";

// This is a header component
// It has two main components:

//  If the user is logged in:
// 1. It shows the icon with the bar, which contains three main pages that client can go to
// Home Page, Login Page, Personal Page
// 2. Logout Button which redirects to Register Page

// If the user is not logged in:
// It has only the register button

const Header: React.FC = () => {
  const navigate= useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { logout } = useActions();
  const { token } = useSelector((state) => state.auth);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
          {token && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to='/login'>Login</MenuItem>
                <MenuItem component={Link} to='/home'>Home</MenuItem>
                <MenuItem component={Link} to='/user'>Personal Page</MenuItem>
              </Menu>
              <div>

              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogout}
                >
                  Logout
              </Button>
            </div>
          )}
          {!token && (
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogout}
              >
                Register
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;