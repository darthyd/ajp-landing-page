import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: green[400],
    color: "#ddd",
    width: "50vh",
    height: "8vh",
    fontSize: "2vh",
    // position: "absolute",
    // padding: theme.spacing(2),
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
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
    <div className={classes.root}>
      <Fab
        className={classes.fab}
        variant="extended"
        size="inherit"
        aria-label="whatsapp"
      >
        <WhatsAppIcon className={classes.iconButton} />
        <span>Entre em contato pelo WhatsApp</span>
      </Fab>
    </div>
  );
}

export default FloatButton;
