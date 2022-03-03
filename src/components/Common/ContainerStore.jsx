import React from "react";
import store from "./../../assets/img/store.jpg"
ContainerStore.propTypes = {};

function ContainerStore(props) {
  return (
    <div>
      <img
        alt=""
        src={store}
        className="container__store"
      />
    </div>
  );
}

export default ContainerStore;
