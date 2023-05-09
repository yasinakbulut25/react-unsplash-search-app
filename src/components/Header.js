import React from "react";

function Header({ handleChange, valueInput, getApiResults }) {
  const submitForm = (e) => {
    e.preventDefault();
    getApiResults(valueInput);
  };
  return (
    <header className="header">
      <form onSubmit={submitForm}>
        <h1 className="title">
          What are you <span>looking</span> for?
        </h1>
        <div className="form-grid">
          <input
            type="search"
            name="search"
            placeholder="Aramak istediğinizi yazınız.."
            value={valueInput}
            onChange={handleChange}
          />
          <button className="submit-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;
