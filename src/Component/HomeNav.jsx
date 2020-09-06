import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Badge,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { resetCount } from "../redux/Count/Count";

const HomeNav = () => {
  const count = useSelector((state) => state.Count.count);
  const dispatch = useDispatch();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar style={{ display: "flex" }}>
        <Typography style={{ flexGrow: "2", fontSize: "1.3rem" }}>
          <span style={{ fontSize: "2rem" }}>The Expense Tracker</span> <br />
          An application that helps to keep an accurate record of your money
          inflow and outflow
        </Typography>
        <IconButton
          aria-label="show 4 new mails"
          style={{ color: "white" }}
          onClick={() => dispatch(resetCount())}
        >
          <Badge badgeContent={count} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HomeNav;
