import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Box } from "@material-ui/core";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/images/bg.jpg`})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Box container py={4} className={classes.container}>
        <Hero />
      </Box>
    </div>
  );
}

export default App;
