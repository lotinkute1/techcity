import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ForumIcon from "@mui/icons-material/Forum";
import { makeStyles } from "@mui/styles";

ButtonChatBox.propTypes = {
  handleClickChatButton: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed !important",
    bottom: 0,
    right: "10px",
    backgroundColor: "#fed700 !important",
    border: 0,
  },
}));

function ButtonChatBox(props) {
  const { handleClickChatButton } = props;
  const classes = useStyles();

  const onClickChatButton = () => {
    if (handleClickChatButton) handleClickChatButton();
  };
  return (
    <Button
      className={classes.root}
      onClick={onClickChatButton}
      variant="contained"
      size="large"
      startIcon={<ForumIcon />}
    >
      Chat
    </Button>
  );
}

export default ButtonChatBox;
