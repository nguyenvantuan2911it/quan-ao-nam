import { makeStyles } from "@mui/styles";
import React from "react";
import { Route, Routes } from "react-router";
import Header from "../../components/Common/Admin/Header";
import Menu from "../../components/Common/Admin/Menu";
import Dashbroad from "./Dashbroad/pages";
import AddEditProduct from "./Product/pages/AddEditProduct";
import ProductAdmin from "./Product/pages";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gridTemplateRows: "50px 1fr",
    gridTemplateAreas: `'header header'
                        'nav   main '`,
  },
  header: {
    gridArea: "header",
  },
  nav: {
    gridArea: "nav",
  },
  main: {
    gridArea: "main",
    marginRight: "250px",
    marginLeft: "150px",
  },
});
AdminPage.propTypes = {};

function AdminPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.nav}>
        <Menu />
      </div>
      <div mr={10} className={classes.main}>
        <Routes>
          <Route path="dashbroad" element={<Dashbroad />} />
          <Route path="product" exact element={<ProductAdmin />} />
          <Route path="product/add" element={<AddEditProduct />} />
          <Route path="product/:id" element={<AddEditProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPage;
