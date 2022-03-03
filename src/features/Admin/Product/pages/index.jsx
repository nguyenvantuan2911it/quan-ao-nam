import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom"
import { productAdminActions } from "../ProductAdminSlice";

ProductAdmin.propTypes = {};
function ProductAdmin(props) {
  const ListData = useSelector((state) => state.admin_product.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAdminActions.fetchData());
  }, [dispatch]);
  const handleRemoveItem = (id) => {
    console.log(id);
  };
  const handleGoToPage = (item) => {
    navigate(`/admin/product/${item.id}`);
  };
  return (
    <div>
      {ListData && (
        <>
          <Link to="/admin/product/add">Add Item</Link>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Discount</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ListData.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">
                      <img src={item.img} width="80px" alt="" />
                    </TableCell>
                    <TableCell align="right">{item.price}$</TableCell>
                    <TableCell align="right">{item.discount}</TableCell>
                    <TableCell align="right">{item.type}</TableCell>
                    <TableCell align="right">
                      <Stack spacing={1} direction="row">
                        <Button
                          variant="contained"
                          onClick={() => {
                            handleGoToPage(item);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            handleRemoveItem(item.id);
                          }}
                        >
                          Remove
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}

export default ProductAdmin;
