import React from "react";

const CountryModal = (props) => {
  return (
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{props.name}</p>
        </header>
        <section class="modal-card-body"><img src={props.flag} alt=""></img></section>
        <footer class="modal-card-foot">
          <button class="button">Close</button>
        </footer>
      </div>
    </div>
  );
};

export default CountryModal;
