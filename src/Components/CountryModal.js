import React from "react";

const CountryModal = props => {

    return (
      <div className={props.isActive === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{props.name}</p><br/>
          </header>
          <section className="modal-card-body">
            <img className="flag-image" src={props.flag} alt=""/>
            <br/>
            <div className="table-container">
            <table className="table is-fullwidth">
              <thead>
                <tr><th>Statistics</th></tr><br/>
              </thead>
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
                  <th>Cases today:</th>
                  <td>{props.todayCases}</td>
                </tr>
                <tr>
                  <th>Total deaths:</th>
                  <td>{props.deaths}</td>
                </tr>
                <tr>
                  <th>Deaths today:</th>
                  <td>{props.todayDeaths}</td>
                </tr>
                <tr>
                  <th>Recovered:</th>
                  <td>{props.recovered}</td>
                </tr>
                <tr>
                  <th>Critical cases:</th>
                  <td>{props.critical}</td>
                </tr>
                <tr>
                  <th>Tests taken (might not be registered if 0):</th>
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
      </div>
    );
  
};

export default CountryModal;
