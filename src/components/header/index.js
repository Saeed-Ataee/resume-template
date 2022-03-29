import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HideOnScroll from '../blocks/hide-on-scroll';
import Logo from '../blocks/logo';
import { Link } from '@mui/material';

export default function Header({sections, logoText}) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar
        className='app-bar'
        position='fixed'
        color='default'
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Logo text={logoText} />

            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                ml: 'auto',
                color: 'white',
              }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
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
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {sections?.map((page) => (
                  <MenuItem
                    key={`header-menu-${page}`}
                    component={Link}
                    onClick={handleCloseNavMenu}
                    href={`#${page}`}
                  >
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
              {sections?.map((page) => (
                <Button
                  key={`header-link-${page}`}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    minWidth: 'unset',
                    display: 'block',
                    '&:hover': {
                      color: '#00d779',
                    },
                  }}
                  href={`#${page}`}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
