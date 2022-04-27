import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';
import { makeStyles } from "@mui/styles";


ButtonChatBox.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed !important",
    bottom: 0,
    right: "10px",
    backgroundColor: '#fed700 !important',
    border: 0
  },
}));

function ButtonChatBox(props) {
  const classes = useStyles();

  return (
      <Button className={classes.root} variant="contained" size="large" startIcon={<ForumIcon />}>
        Chat
      </Button>
  );
}

export default ButtonChatBox;
