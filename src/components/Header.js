import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Settings from '@material-ui/icons/Settings';
import Home from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolBar: {
        background: 'linear-gradient(80deg, #FE6B8B 40%, #FF8E53 90%)',
        border: 0,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 50
    }
}));

function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header(props) {
    const navTo = (navTo) => {
        props.history.push(navTo);
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className={classes.toolBar}>
                  <Container maxWidth="sm">
                    <Toolbar >
                        <Typography onClick={() => navTo('/')} variant="h5" className={classes.title}>
                            <Home />
                        </Typography>
                        <Typography variant="h6" className={classes.title}> Bhagavad Geeta </Typography>
                        <Settings onClick={() => navTo('/settings')} color="inherit" />
                    </Toolbar>
                  </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
