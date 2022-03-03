import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SearchItem from "./components/SearchItem";
import { searchActions } from "./SearchSlice";
Search.propTypes = {};

function Search(props) {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [name_like, keyword] = name.split("=");
  const SearchList = useSelector((state) => state.search.list);
  const loading = useSelector((state) => state.search.loading);
  useEffect(() => {
    dispatch(searchActions.fetchData({ [name_like]: keyword }));
  }, [keyword, dispatch, name_like]);
  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="loading"> </div>
        </div>
      ) : (
        <div>{SearchList && <SearchItem SearchList={SearchList} />}</div>
      )}
    </>
  );
}

export default Search;
