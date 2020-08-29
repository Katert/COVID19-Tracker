import React from "react";
import { motion } from "framer-motion";

const CountryModal = (props) => {
  return (
    <motion.div 
      className={props.isActive === true ? "modal is-active" : "modal"}
      initial={{opacity: -5}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
      >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.name}</p>
          <br />
        </header>
        <section className="modal-card-body">
          <img className="flag-image" src={props.flag} alt="" />
          <br />
          <div className="table-container">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <th>Total cases:</th>
                  <td>{props.totalCases}</td>
                </tr>
                <tr>
                  <th>Active cases:</th>
                  <td>{props.active}</td>
                </tr>
                <tr>
                  <th>Cases registered today:</th>
                  <td>{props.todayCases}</td>
                </tr>
                <tr>
                  <th>Total recovered:</th>
                  <td>{props.recovered}</td>
                </tr>
                <tr>
                  <th>Total deaths:</th>
                  <td>{props.deaths}</td>
                </tr>
                <tr>
                  <th>Deaths registered today:</th>
                  <td>{props.todayDeaths}</td>
                </tr>
                <tr>
                  <th>Critical cases:</th>
                  <td>{props.critical}</td>
                </tr>
                <tr>
                  <th>Tests taken:</th>
                  <td>{props.tests}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button">Close</button>
        </footer>
      </div>
    </motion.div>
  );
};

export default CountryModal;
