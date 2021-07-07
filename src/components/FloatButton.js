import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },
  fab: {
    backgroundColor: green[400],
    color: "#ddd",
    width: "50vh",
    height: "8vh",
    fontSize: "2vh",
    fontWeight: "bold",
    "&:hover": {
      color: green[400],
    },
  },
  iconButton: {
    marginRight: theme.spacing(1),
    fontSize: "5vh",
  },
}));

function FloatButton() {
  const classes = useStyles();

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5518996356796"
      target="_blank"
      className={classes.root}
      rel="noreferrer"
    >
      <Fab
        className={classes.fab}
        variant="extended"
        size="inherit"
        aria-label="whatsapp"
      >
        <WhatsAppIcon className={classes.iconButton} />
        <span>Entre em contato pelo WhatsApp</span>
      </Fab>
    </a>
  );
}

export default FloatButton;
