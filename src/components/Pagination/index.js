import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Index = ({ recipes, setPageData, pageData,isOn }) => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [dessanding, setDessanding] = useState()

  useEffect(() => {
    if (isOn==true) {
      const Dessanding =
        recipes && recipes.sort((a, b) =>
          b["recipe-name"].localeCompare(a["recipe-name"])
        );
        setDessanding(Dessanding);
    } else {
      const Assending =
        recipes && recipes.sort((a, b) =>
          a["recipe-name"].localeCompare(b["recipe-name"])
        );
        setDessanding(Assending);
    }
  }, [isOn, recipes]);

  useEffect(() => {
    const pagedataCount = Math.ceil(dessanding && dessanding.length / 10);

    setPageCount(pagedataCount);
    if (page) {
      const LIMIT = 10;
      const skip = LIMIT * page;
      const dataSkip =
      dessanding &&
      dessanding.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataSkip);
    }
  }, [page, dessanding, isOn]);

  return (
    <>
      {pageData && (
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            defaultPage={page}
            onChange={(event, value) => setPage(value)}
            size="large"
          />
        </Stack>
      )}
    </>
  );
};

export default Index;
