import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { List, ListItem } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"sx={{backgroundColor:"white", color:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DEKA TEAM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
            <List sx={{display:"flex"}}>
              <ListItem>
                <MenuItem LinkComponent={"/"}>خانه</MenuItem>
              </ListItem>
              <ListItem>
                <MenuItem LinkComponent={"/"}>درباره ما</MenuItem>
              </ListItem>
              <ListItem>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{color:"black"}}
                >
                خدمات 
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>طراحی سایت</MenuItem>
                  <MenuItem onClick={handleClose}>طراحی گرافیک</MenuItem>
                  <MenuItem onClick={handleClose}>وردپرس</MenuItem>
                </Menu>
              </ListItem>
              <ListItem>
                <MenuItem LinkComponent={"/"}>تیم ما</MenuItem>
              </ListItem>
              <ListItem>
                <MenuItem LinkComponent={"/"}>بلاگ</MenuItem>
              </ListItem>
            </List>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DEKA TEAM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <List sx={{display:"flex"}}>
              <ListItem>
                <MenuItem LinkComponent={"/"}>خانه</MenuItem>
              </ListItem>
              <ListItem>
                <MenuItem LinkComponent={"/"}>درباره ما</MenuItem>
              </ListItem>
              <ListItem>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{color:"black"}}
                >
                  خدمات
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>طراحی سایت</MenuItem>
                  <MenuItem onClick={handleClose}>طراحی گرافیک</MenuItem>
                  <MenuItem onClick={handleClose}>وردپرس</MenuItem>
                </Menu>
              </ListItem>
              <ListItem>
                <MenuItem LinkComponent={"/"}>تیم ما</MenuItem>
              </ListItem>
              <ListItem>
                <MenuItem LinkComponent={"/"}>بلاگ</MenuItem>
              </ListItem>
            </List>
            <List>
              <menu>
              <Button variant="outlined">ارتباط با ما</Button>
              </menu>
            </List>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar2;
