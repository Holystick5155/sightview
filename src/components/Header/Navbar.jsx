import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ChevronLeft, ChevronRight, ExitToApp, InboxOutlined, Settings, MailOutlined, MenuOutlined, KeyboardArrowDown, HomeOutlined, SchoolOutlined, LaptopOutlined, PublicOutlined, SportsSoccerOutlined, MusicNoteOutlined, EmojiPeopleOutlined, AccountCircleOutlined, CreateOutlined, ExploreOutlined, DescriptionOutlined, BusinessOutlined, EmojiEmotionsOutlined, EmojiObjectsOutlined, LocalHospitalOutlined, WbSunnyOutlined, FlightTakeoffOutlined, GavelOutlined, TrendingUpOutlined, SpaOutlined, LiveHelpOutlined, HelpOutlineOutlined, RateReviewOutlined, LocationOnOutlined, MuseumOutlined, FlareOutlined, SupervisorAccountOutlined, LocalDiningOutlined, FavoriteBorderOutlined, CollectionsBookmarkOutlined, SubjectOutlined, PersonPinOutlined, StarOutlineOutlined, HistoryOutlined, MapOutlined, WhatshotOutlined, MoodOutlined, EmojiEventsOutlined, QuestionAnswerOutlined, MovieOutlined, RecordVoiceOverOutlined, GroupAddOutlined, QueryBuilderOutlined, EditOutlined, PersonPinCircleOutlined } from "@material-ui/icons";
import {
  Box,
  Hidden,
  IconButton,
  InputBase,
  CircularProgress,
  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  Divider,
  ListItemIcon,
  Drawer,
  styled,
  useTheme,
  List,
  ListItem,
  ListItemText,
  CssBaseline
} from "@material-ui/core";

import { NavbarStyle } from "./navbarStyle";
//import image from "../../images/logo192.png";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Link, useNavigation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reduxACtions/actions/AuthActions";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const drawerWidth = 240;

export default function Navbar({ searchPostData, handleSearchOnChange }) {
  const theme = useTheme();
  const [openNav, setOpenNav] = useState(false);

  const handleDrawerOpen = () => {
    setOpenNav(true);
  }

  const handleDrawerClose = () => {
    setOpenNav(false);
  }
  const user = useSelector((state) => state.authReducer.authData);

  const classes = NavbarStyle();
  const [isOnChange, setIsOnChange] = useState(false);
  const [targetValue, setTargetValue] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    setIsOnChange(false);
  }, [searchPostData]);

  const handleLogOut = () => {
    dispatch(logout());
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [anchorElN, setAnchorElN] = useState(null);
  const openN = Boolean(anchorElN);

  const [anchorElA, setAnchorElA] = useState(null);
  const openA = Boolean(anchorElA);

  const [anchorElS, setAnchorElS] = useState(null);
  const openS = Boolean(anchorElS);

  const [anchorElP, setAnchorElP] = useState(null);
  const openP = Boolean(anchorElP);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElMore, setAnchorElMore] = useState(null);
  const openMore = Boolean(anchorElMore);

  const handleClickMore = (e) => {
    setAnchorElMore(e.currentTarget);

  };

  const handleCloseMore = () => {
    setAnchorElMore(null);
  };
  const handleClickNews = (e) => {
    setAnchorElN(e.currentTarget);

  };

  const handleCloseNews = () => {
    setAnchorElN(null);
  };

  const handleClickStories = (e) => {
    setAnchorElS(e.currentTarget);

  };

  const handleCloseStories = () => {
    setAnchorElS(null);
  };

  const handleClickArticles = (e) => {
    setAnchorElA(e.currentTarget);

  };

  const handleCloseArticles = () => {
    setAnchorElA(null);
  };

  const handleClickProfiles = (e) => {
    setAnchorElP(e.currentTarget);

  };

  const handleCloseProfiles = () => {
    setAnchorElP(null);
  };

  return (
    <AppBar position='fixed'>
      <CssBaseline />
      <div>
        <Link to='/' className={classes.link}>
          <Box className={classes.logoContainer}>
            {/* <img src={image} alt='react blog'className={classes.logo} /> */}
            <Typography variant='h6' className={classes.title} noWrap>
              Delviews
            </Typography>
          </Box>
        </Link>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexshrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openNav}
      >
        <DrawerHeader className={classes.header}>
          <h3>Delviews</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to='/' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <ListItem>
            <h3>News</h3>
          </ListItem>
          <Link to='/politics' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <GavelOutlined />
              </ListItemIcon>
              <ListItemText primary="Politics" />
            </ListItem>
          </Link>
          <Link to='/science' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <LaptopOutlined />
              </ListItemIcon>
              <ListItemText primary="Science/Tech" />
            </ListItem>
          </Link>

          <Link to='/business' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <BusinessOutlined />
              </ListItemIcon>
              <ListItemText primary="Business" />
            </ListItem>
          </Link>

          <Link to='/education' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <SchoolOutlined />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
          </Link>

          <Link to='/health' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <LocalHospitalOutlined />
              </ListItemIcon>
              <ListItemText primary="Health" />
            </ListItem>
          </Link>

          <Link to='/sports' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <SportsSoccerOutlined />
              </ListItemIcon>
              <ListItemText primary="Sports" />
            </ListItem>
          </Link>

          <Link to='/entertainment' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <MusicNoteOutlined />
              </ListItemIcon>
              <ListItemText primary="Entertainment" />
            </ListItem>
          </Link>

          <Link to='/culture' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <EmojiObjectsOutlined />
              </ListItemIcon>
              <ListItemText primary="Culture" />
            </ListItem>
          </Link>

          <Link to='/weather' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <WbSunnyOutlined />
              </ListItemIcon>
              <ListItemText primary="Weather" />
            </ListItem>
          </Link>

          <Link to='/travel' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <FlightTakeoffOutlined />
              </ListItemIcon>
              <ListItemText primary="Travel" />
            </ListItem>
          </Link>

          <Link to='/world' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <PublicOutlined />
              </ListItemIcon>
              <ListItemText primary="World Affairs" />
            </ListItem>
          </Link>

          <Link to='/local' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <PublicOutlined />
              </ListItemIcon>
              <ListItemText primary="Local News" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>

          <ListItem>
            <h3>Articles</h3>
          </ListItem>
          <Link to='/technoly' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <TrendingUpOutlined />
              </ListItemIcon>
              <ListItemText primary="Technology Trends" />
            </ListItem>
          </Link>

          <Link to='/lifestyle' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <SpaOutlined />
              </ListItemIcon>
              <ListItemText primary="Lifestyle" />
            </ListItem>
          </Link>

          <Link to='/how-to' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <LiveHelpOutlined />
              </ListItemIcon>
              <ListItemText primary="How-to Guides" />
            </ListItem>
          </Link>

          <Link to='/product-reviews' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <RateReviewOutlined />
              </ListItemIcon>
              <ListItemText primary="Product Reviews" />
            </ListItem>
          </Link>

          <Link to='/travel-destination' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <LocationOnOutlined />
              </ListItemIcon>
              <ListItemText primary="Travel Destinations" />
            </ListItem>
          </Link>

          <Link to='/food' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <LocalDiningOutlined />
              </ListItemIcon>
              <ListItemText primary="Food and Cooking" />
            </ListItem>
          </Link>

          <Link to='/history' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <MuseumOutlined />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>
          </Link>

          <Link to='/educational-articles' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <SchoolOutlined />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
          </Link>

          <Link to='/science-explainers' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <FlareOutlined />
              </ListItemIcon>
              <ListItemText primary="Science Explainers" />
            </ListItem>
          </Link>

          <Link to='/leadership' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <SupervisorAccountOutlined />
              </ListItemIcon>
              <ListItemText primary="Thought Leadership" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <ListItem>
            <h3>Stories</h3>
          </ListItem>
          <Link to='/romance' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <FavoriteBorderOutlined />
              </ListItemIcon>
              <ListItemText primary="Love and Romance" />
            </ListItem>
          </Link>

          <Link to='/happenings' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <PublicOutlined />
              </ListItemIcon>
              <ListItemText primary="Happenings" />
            </ListItem>
          </Link>

          <Link to='/fiction' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <CollectionsBookmarkOutlined />
              </ListItemIcon>
              <ListItemText primary="Fictional Narratives" />
            </ListItem>
          </Link>

          <Link to='/short-stories' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <SubjectOutlined />
              </ListItemIcon>
              <ListItemText primary="Short Stories" />
            </ListItem>
          </Link>

          <Link to='/personal-experience' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <PersonPinOutlined />
              </ListItemIcon>
              <ListItemText primary="Personal Experience" />
            </ListItem>
          </Link>

          <Link to='/' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <CreateOutlined />
              </ListItemIcon>
              <ListItemText primary="Creative Writing" />
            </ListItem>
          </Link>

          <Link to='/' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <StarOutlineOutlined />
              </ListItemIcon>
              <ListItemText primary="Fantasy and Sci-Fi" />
            </ListItem>
          </Link>

          <Link to='/mystery' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <MoodOutlined />
              </ListItemIcon>
              <ListItemText primary="Mystery and Thriller" />
            </ListItem>
          </Link>

          <Link to='/historical-fiction' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <HistoryOutlined />
              </ListItemIcon>
              <ListItemText primary="Historical Fiction" />
            </ListItem>
          </Link>

          <Link to='/adventure' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <MapOutlined />
              </ListItemIcon>
              <ListItemText primary="Adventure" />
            </ListItem>
          </Link>

          <Link to='/horror' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <WhatshotOutlined />
              </ListItemIcon>
              <ListItemText primary="Horror" />
            </ListItem>
          </Link>


        </List>
        <Divider />

        <List>
          <ListItem>
            <h3>Profiles</h3>
          </ListItem>
          <Link to='/spotlights' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <EmojiEventsOutlined />
              </ListItemIcon>
              <ListItemText primary="Author Spotlights" />
            </ListItem>
          </Link>

          <Link to='/qestion-answers' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <QuestionAnswerOutlined />
              </ListItemIcon>
              <ListItemText primary="Q&A Sessions" />
            </ListItem>
          </Link>

          <Link to='/behind-the-scene' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <MovieOutlined />
              </ListItemIcon>
              <ListItemText primary="Behind-the-Scenes" />
            </ListItem>
          </Link>

          <Link to='/personal-journeys' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <PersonPinCircleOutlined />
              </ListItemIcon>
              <ListItemText primary="Personal Journeys" />
            </ListItem>
          </Link>

          <Link to='/inspiration' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <EmojiObjectsOutlined />
              </ListItemIcon>
              <ListItemText primary="Inspirations and Influences" />
            </ListItem>
          </Link>

          <Link to='/writing-tips' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <EditOutlined />
              </ListItemIcon>
              <ListItemText primary="Writing Tips and Advice" />
            </ListItem>
          </Link>

          <Link to='/achievement' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <EmojiEventsOutlined />
              </ListItemIcon>
              <ListItemText primary="Achievements and Awards" />
            </ListItem>
          </Link>

          <Link to='/author-interview' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <RecordVoiceOverOutlined />
              </ListItemIcon>
              <ListItemText primary="Author Interview" />
            </ListItem>
          </Link>

          <Link to='/collaborations' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <GroupAddOutlined />
              </ListItemIcon>
              <ListItemText primary="Collaborations" />
            </ListItem>
          </Link>

          <Link to='/future-projects' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <QueryBuilderOutlined />
              </ListItemIcon>
              <ListItemText primary="Future Projects" />
            </ListItem>
          </Link>


          <Divider />
          <Link to='/future-projects' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <ExploreOutlined />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItem>
          </Link>

          <ListItem>
            {!user ? (
              <Link to='/auth' className={classes.link} onClick={handleDrawerClose}>
                <ListItem>
                  {/* <ListItemIcon>
                    <HomeOutlined />
                  </ListItemIcon> */}
                  <ListItemText primary="Login" />
                </ListItem>
              </Link>
            ) : (
              <Link to='/auth' className={classes.navLink}>
                <Typography variant='h6' className={classes.navItems} noWrap>
                  Logout
                </Typography>

              </Link>
            )}
          </ListItem>
        </List>
        {/* <List>
          {['Inbox', 'Starred', 'Send Email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Toolbar open={openNav}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}>
          <MenuOutlined />
        </IconButton>
        <DrawerHeader />
        <Link to='/home' className={classes.navLink}>
          <Hidden xsDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Home
            </Typography>
          </Hidden>
        </Link>

        {/* <Link to='/culture' className={classes.navLink}>
          <Hidden xsDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              World
            </Typography>
          </Hidden>
        </Link>
        <Link to='/politics' className={classes.navLink}>
          <Hidden xsDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              National (Ghana)
            </Typography>
          </Hidden>
        </Link>
        <Link to='/computers' className={classes.navLink}>
          <Hidden smDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Sci/Tech
            </Typography>
          </Hidden>
        </Link>
        <Link to='/sports' className={classes.navLink}>
          <Hidden mdDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Sports
            </Typography>
          </Hidden>
        </Link>
        <Link to='/music' className={classes.navLink}>
          <Hidden mdDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Entertainment
            </Typography>
          </Hidden>
        </Link> */}

        <Hidden xsDown>

          <Button
            id="basic-button"
            aria-controls={openN ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openN ? 'true' : undefined}
            onClick={handleClickNews}
            endIcon={<KeyboardArrowDown />}
            style={{
              color: "white",
              textTransform: 'capitalize',
              fontSize: "18px"
            }}
          >
            News
          </Button>


          <Menu
            id="basic-menu"
            anchorEl={anchorElN}
            open={openN}
            onClose={handleCloseNews}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: "50px"
            }}
          >
            <MenuItem onClick={handleCloseNews}>Politics</MenuItem>
            <MenuItem onClick={handleCloseNews}>Science & Technology</MenuItem>
            <MenuItem onClick={handleCloseNews}>Education</MenuItem>
            <MenuItem onClick={handleCloseNews}>Business</MenuItem>
            <MenuItem onClick={handleCloseNews}>Entertainment</MenuItem>
            <MenuItem onClick={handleCloseNews}>Religion</MenuItem>
            <MenuItem onClick={handleCloseNews}>Sports</MenuItem>
            <MenuItem onClick={handleCloseNews}>Travel</MenuItem>
            <MenuItem onClick={handleCloseNews}>Weather</MenuItem>
            <MenuItem onClick={handleCloseNews}>World Affairs</MenuItem>
            <MenuItem onClick={handleCloseNews}>Local News</MenuItem>
          </Menu>
        </Hidden>


        <Hidden xsDown>
          <Button
            id="basic-button"
            aria-controls={openA ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openA ? 'true' : undefined}
            onClick={handleClickArticles}
            endIcon={<KeyboardArrowDown />}
            style={{
              color: "white",
              textTransform: 'capitalize',
              fontSize: "18px"
            }}
          >
            Articles
          </Button>


          <Menu
            id="basic-menu"
            anchorEl={anchorElA}
            open={openA}
            onClose={handleCloseArticles}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: "50px"
            }}
          >

            <MenuItem onClick={handleCloseArticles}>Technology Trends</MenuItem>
            <MenuItem onClick={handleCloseArticles}>Science Explainers</MenuItem>
            <MenuItem onClick={handleCloseArticles}>Lifestyle</MenuItem>
            <MenuItem onClick={handleCloseArticles}>How-to Guides</MenuItem>
            <MenuItem onClick={handleCloseArticles}>Product Reviews</MenuItem>
            <MenuItem onClick={handleCloseArticles}>Travel Destinations</MenuItem>
            <MenuItem onClick={handleCloseArticles}>Food and Cooking</MenuItem>
            <MenuItem onClick={handleCloseArticles}>History</MenuItem>
            <MenuItem onClick={handleCloseArticles}>Education</MenuItem>
            <MenuItem onClick={handleCloseArticles}>Thought Leadership</MenuItem>
          </Menu>
        </Hidden>

        <Hidden smDown>
          <Button
            id="basic-button"
            aria-controls={openS ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openS ? 'true' : undefined}
            onClick={handleClickStories}
            endIcon={<KeyboardArrowDown />}
            style={{
              color: "white",
              textTransform: 'capitalize',
              fontSize: "18px"
            }}
          >
            Stories
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElS}
            open={openS}
            onClose={handleCloseStories}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: "50px"
            }}
          >
            <MenuItem onClick={handleCloseStories}>Love and Romance</MenuItem>
            <MenuItem onClick={handleCloseStories}>Happenings</MenuItem>
            <MenuItem onClick={handleCloseStories}>Fictional Narratives</MenuItem>
            <MenuItem onClick={handleCloseStories}>Short Stories</MenuItem>
            <MenuItem onClick={handleCloseStories}>Personal Experience</MenuItem>
            <MenuItem onClick={handleCloseStories}>Creative Writing</MenuItem>
            <MenuItem onClick={handleCloseStories}>Fantasy and Sci-Fi</MenuItem>
            <MenuItem onClick={handleCloseStories}>Mystery and Thriller</MenuItem>
            <MenuItem onClick={handleCloseStories}>Historical Fiction</MenuItem>
            <MenuItem onClick={handleCloseStories}>Adventure</MenuItem>
            <MenuItem onClick={handleCloseStories}>Horror</MenuItem>
          </Menu>
        </Hidden>

        <Hidden smDown>

          <Button
            id="basic-button"
            aria-controls={openP ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openP ? 'true' : undefined}
            onClick={handleClickProfiles}
            endIcon={<KeyboardArrowDown />}
            style={{
              color: "white",
              textTransform: 'capitalize',
              fontSize: "18px"
            }}
          >
            Profiles
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElP}
            open={openP}
            onClose={handleCloseProfiles}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: "50px"
            }}
          >

            <MenuItem onClick={handleCloseProfiles}>Author Spotlights</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Q&A Sessions</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Behind-the-Scenes</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Personal Journeys</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Inspirations and Influences</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Writing Tips and Advice</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Achievements and Awards</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Author Interview</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Collaborations</MenuItem>
            <MenuItem onClick={handleCloseProfiles}>Future Projects</MenuItem>
          </Menu>
        </Hidden>

        <Hidden smDown>
          <Button
            id="basic-button"
            aria-controls={openMore ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMore ? 'true' : undefined}
            onClick={handleClickMore}
            endIcon={<KeyboardArrowDown />}
            style={{
              color: "white",
              textTransform: 'capitalize',
              fontSize: "18px"
            }}
          >
            Others
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElMore}
            open={openMore}
            onClose={handleCloseMore}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: "50px"
            }}
          >
            <MenuItem onClick={handleCloseMore}>Blogs</MenuItem>
            <MenuItem onClick={handleCloseMore}>Videos</MenuItem>
            <MenuItem onClick={handleCloseMore}>Gallery</MenuItem>
            <MenuItem onClick={handleCloseMore}>Explore</MenuItem>
          </Menu>
        </Hidden>

        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            {!isOnChange ? (
              <SearchIcon />
            ) : (
              <CircularProgress
                style={{
                  width: "20px",
                  height: "20px",
                  color: "white",
                }}
              />
            )}
          </div>


          <InputBase
            placeholder='search ...'
            inputProps={{ "aria-details": "search" }}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={({ target }) => {
              handleSearchOnChange(target);
              setIsOnChange(true);
              setTargetValue(target.value);
            }}
          />
          {targetValue.length > 0 ? (
            <Box className={classes.infoMsg}>
              {searchPostData.length === 0 ? (
                <Typography variant='body2' align='center' color='error'>
                  No Record Found !!
                </Typography>
              ) : (
                <Typography variant='body2' align='center' color='inherit'>
                  Found {searchPostData.length} Found ...
                </Typography>
              )}
            </Box>
          ) : null}
        </div>

        {user && user.user.isAdmin === true ? (
          <>
            <Hidden smDown>
              <Button
                component={Link}
                to='/addpost'
                variant='contained'
                color='secondary'
                startIcon={<PostAddIcon />}
                className={classes.button}>
                Add Post
              </Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton component={Link} to='/addpost' color='inherit'>
                <PostAddIcon />
              </IconButton>
            </Hidden>
          </>
        ) : " "}




        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} style={{ marginLeft: "5px" }}>
            <Hidden mdDown>
              <Typography variant='h6' className={classes.navItems} noWrap>{user.user.username}</Typography>
            </Hidden>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <Avatar sx={{ width: 32, height: 32 }}>{user.user.username.charAt(0).toUpperCase()}</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        )}

        {user ? <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          style={{ marginTop: "65px" }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 100,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar style={{ marginRight: 10 }} />
            {user.user.firstname + ' ' + user.user.lastname}
          </MenuItem>
          <MenuItem>
            <Avatar style={{ marginRight: 10 }} /> My Account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontsize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <ListItemIcon>
              <ExitToApp fontsize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>

        </Menu> : null}

      </Toolbar>
    </AppBar >
  );
}
