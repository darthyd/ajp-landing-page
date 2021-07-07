import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core/";
import FloatButton from "./FloatButton";

const useStyles = makeStyles(() => ({
  box: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#ddd",
    fontSize: "2.6vh",
    maxWidth: "95vh",
    margin: "0 auto",
  },
  mainText: {
    fontSize: "2.8vh",
    // padding: theme.spacing(2),
  },
  secondaryText: {
    fontSize: "2.8vh",
  },
  tel: {
    fontSize: "5vh",
    textDecoration: "none",
    color: "#ddd",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Box container className={classes.box}>
      <div>
        <h1>Assistência Técnica Especializada</h1>
        <p className={classes.mainText}>
          Manutenção e instalação em sistemas de irrigação e manutenção em poços
          artesianos em <strong>Presidente Prudente/SP</strong> e região.
        </p>
        <FloatButton />
        <Box my={3}>
          <p className={classes.secondaryText}>
            ou pelo telefone <br />
          </p>
          <a className={classes.tel} href="tel:18981733017">
            (18) 981733017
          </a>
        </Box>
      </div>
    </Box>
  );
}

export default Hero;