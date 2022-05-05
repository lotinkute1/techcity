import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import "./headerChatBox.css";
import { IconButton } from "@mui/material";

HeaderChatBox.propTypes = {
  handleCollapseChatBox: PropTypes.func,
};

function HeaderChatBox(props) {
  const { handleCollapseChatBox } = props;
  const onClickCollapseButton = () => {
    if (handleCollapseChatBox) handleCollapseChatBox();
  };
  return (
    <header className="chatbox__header">
      <p className="chatbox__heading">Chat</p>
      <IconButton size="small" onClick={onClickCollapseButton}>
        <ExpandMoreIcon />
      </IconButton>
    </header>
  );
}

export default HeaderChatBox;
