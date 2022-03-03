import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productApi from "../../api/productApi";

Details.propTypes = {};

function Details(props) {
  const {id} = useParams();

  const [details, SetDetails] = useState();
  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await productApi.getById(id.substring(0, id.length - 1),id);
        SetDetails(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return <>{details && <div></div>}</>;
}

export default Details;
