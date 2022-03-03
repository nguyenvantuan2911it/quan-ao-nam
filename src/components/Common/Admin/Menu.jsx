import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  dashbroad: {
    height: "30px",
  },
  student: {
    height: "30px",
  },
  nav__link: {
    textDecoration: "none",
  },
});

Menu.propTypes = {};

function Menu(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dashbroad}>
        <Link className={classes.nav__link} to="dashbroad">
          Dashboard
        </Link>
      </div>
      <div mt={2} className={classes.student}>
        <Link className={classes.nav__link} to="product">
          Student
        </Link>
      </div>
    </div>
  );
}

export default Menu;
