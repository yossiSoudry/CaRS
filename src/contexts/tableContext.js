import React, { createContext, useContext, useState } from "react";

const StateTableContext = createContext();

export const TableContext = ({ children, values, setValues }) => {
  const [pageNum, setPageNum] = useState(1);
  const [limitForReq, setLimitForReq] = useState(
    localStorage.limitForReq || 10
  );
  const [reverse, setReverse] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [highPageNum, setHighPageNum] = useState(0);
  const [items, setItems] = useState(limitForReq);
  const [sortBy, setSortBy] = useState("");

  return (
    <StateTableContext.Provider
      value={{
        pageNum,
        setPageNum,
        limitForReq,
        setLimitForReq,
        reverse,
        setReverse,
        openForm,
        setOpenForm,
        values,
        setValues,
        highPageNum,
        setHighPageNum,
        items,
        setItems,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </StateTableContext.Provider>
  );
};

export const useStateTableContext = () => useContext(StateTableContext);
