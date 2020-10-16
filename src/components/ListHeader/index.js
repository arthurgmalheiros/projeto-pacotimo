/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";

import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

import { Container } from "./styles";

import logo from "../../assets/logo.svg";

export default function ListHeader({ filter, setFilter }) {
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef();

  const handleUnfocusInput = e => {
    if (e.target.value.split("").length === 0) {
      setShowInput(false);
    }
  };

  const handleClickIcon = () => {
    if (!showInput && inputRef.current) {
      inputRef.current.focus();
    }
    setShowInput(!showInput);
  };

  return (
    <Container showInput={showInput}>
      <div className="header-container">
        <img src={logo} alt="321Milhas invertido" />

        <FiSearch
          id="Search"
          size={25}
          color="#fff"
          onClick={handleClickIcon}
          data-testid="search-icon"
        />

        <input
          type="text"
          onBlur={handleUnfocusInput}
          placeholder="Pesquisar"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          ref={inputRef}
          data-testid="search-input"
        />
      </div>
    </Container>
  );
}

ListHeader.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func
};

ListHeader.defaultProps = {
  filter: "",
  setFilter: () => {}
};
