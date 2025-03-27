import * as React from 'react';
import PropTypes from 'prop-types';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avatar, 
  Button, 
  Tooltip, 
  MenuItem, 
  Switch
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Brightness4 as Brightness4Icon, 
  Brightness7 as Brightness7Icon 
} from '@mui/icons-material';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Define navigation and user settings as constants
const NAV_ITEMS = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projects', section: 'projects' },
  { label: 'Contact', section: 'contact' }
];

const USER_SETTINGS = [
  { label: 'Profile', action: () => {} },
  { label: 'Settings', action: () => {} },
  { label: 'Logout', action: () => {} }
];

function ResponsiveAppBar({ 
  toggleDarkMode, 
  profileImage,
  userName 
}) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseMenu = (setter) => {
    setter(null);
  };

  const renderNavLinks = (isMobile) => (
    <>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.section}
          to={item.section}
          smooth={true}
          duration={500}
          offset={-64}
          style={{ textDecoration: 'none' }}
        >
          {isMobile ? (
            <MenuItem onClick={() => handleCloseMenu(setAnchorElNav)}>
              <Typography textAlign="center">{item.label}</Typography>
            </MenuItem>
          ) : (
            <Button
              onClick={() => handleCloseMenu(setAnchorElNav)}
              sx={{ 
                my: 2, 
                color: theme.palette.text.primary, 
                display: 'block',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }}
            >
              {item.label}
            </Button>
          )}
        </Link>
      ))}
    </>
  );

  return (
    <Box sx={{ position: 'fixed', width: '100%', zIndex: theme.zIndex.appBar }}>
      <AppBar 
        position="relative"
        sx={{ 
          bgcolor: 'transparent',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Background overlay with blur effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: theme.palette.background.paper,
            opacity: scrollTrigger ? 0.91 : 0,
            transition: 'opacity 0.3s ease',
            backdropFilter: scrollTrigger ? 'blur(15px)' : 'none',
          }}
        />
        
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: theme.palette.text.primary,
                textDecoration: 'none',
                zIndex: 1,
              }}
            >
              WMDev
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, zIndex: 1 }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseMenu(setAnchorElNav)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {renderNavLinks(true)}
              </Menu>
            </Box>

            {/* Mobile Logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: theme.palette.text.primary,
                textDecoration: 'none',
                zIndex: 1,
              }}
            >
              WMDev
            </Typography>

            {/* Desktop Navigation Links */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, zIndex: 1 }}>
              {renderNavLinks(false)}
            </Box>

            {/* User Menu and Theme Toggle */}
            <Box sx={{ flexGrow: 0, zIndex: 1 }}>
              <Tooltip title="Open user menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar 
                    alt={userName} 
                    src={profileImage} 
                    sx={{ 
                      border: `2px solid ${theme.palette.primary.main}`,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }} 
                  />
                </IconButton>
              </Tooltip>
              
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => handleCloseMenu(setAnchorElUser)}
              >
                {USER_SETTINGS.map((setting) => (
                  <MenuItem 
                    key={setting.label} 
                    onClick={() => {
                      setting.action();
                      handleCloseMenu(setAnchorElUser);
                    }}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
                
                {/* Theme Toggle */}
                <MenuItem>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    <Switch
                      checked={theme.palette.mode === 'dark'}
                      onChange={toggleDarkMode}
                      color="default"
                      sx={{ mx: 1 }}
                    />
                    <Typography>
                      {theme.palette.mode === 'dark' ? 'Dark' : 'Light'} Mode
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

// PropTypes for type checking
ResponsiveAppBar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  profileImage: PropTypes.string,
  userName: PropTypes.string
};

// Default props
ResponsiveAppBar.defaultProps = {
  profileImage: '/assets/passport-.png',
  userName: 'User'
};

export default ResponsiveAppBar;