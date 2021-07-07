import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as ReactLogo } from "../icons/logo.svg";

function Logo(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ReactLogo {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </ReactLogo>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > svg": {
      margin: theme.spacing(4),
    },
  },
  appBar: {
    background: "none",
    boxShadow: "none",
  },
  text: {
    fontSize: "10vw",
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <Box container className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar variant="dense">
          <Logo
            style={{
              width: 120,
              height: 120,
              margin: "15px auto",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
