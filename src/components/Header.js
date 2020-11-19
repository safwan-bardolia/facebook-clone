import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { Avatar, IconButton } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDataLayerValue } from "../datalayer";

function Header() {

  // special syntax to pull info from DataLayer, (if we need to grab anything from DataLayer, we need to put into object)
  // dispatch: to dispatch action, by which we can update datalayer 
  const [{user}, dispatch] = useDataLayerValue();


  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header_middle">
        {/* currently this icon is active */}
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>

        {/* wrapped inside <IconButton> for nice animation */}
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
