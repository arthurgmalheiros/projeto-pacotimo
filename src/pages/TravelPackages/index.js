import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import PackageActions from "../../store/ducks/packages";

import ListHeader from "../../components/ListHeader";
import { Container } from "./styles";

const TravelPackages = ({ getPackagesRequest }) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    if (!state.packages.packages) {
      dispatch(getPackagesRequest());
    } else {
      let pckg = state.packages.packages;
      if (filter) {
        const filterLower = filter.toLowerCase();
        const filtered = pckg.filter((value, index) => {
          if (value.id) {
            if (
              value.city.toLowerCase().includes(filterLower) ||
              value.arrivalAirport.toLowerCase().includes(filterLower) ||
              value.departureAirport.toLowerCase().includes(filterLower) ||
              value.hotel.toLowerCase().includes(filterLower)
            ) {
              return value;
            }
          }
        });
        setPackages(filtered);
      } else setPackages(pckg);
    }
  }, [dispatch, getPackagesRequest, state, filter]);

  return (
    <>
      <ListHeader
        filter={filter}
        setFilter={setFilter}
        flights={packages}
        setFlights={setPackages}
      />
      <Container>
        {packages.map(p => {
          return p.id ? (
            <div className="card" key={p.id} data-testid="enterprise-card">
              <div className="logo">
                <img src={p.imageUrl} alt="321Milhas invertido" />
              </div>
              <div className="description">
                <h1 style={{ gridArea: "city" }}>{p.city}</h1>
                <NumberFormat
                  value={p.price}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  prefix={"R$"}
                  renderText={value => <span>{value}</span>}
                />
                <p style={{ gridArea: "inboundDate", justifySelf: "end" }}>
                  Ida {new Date(p.inboundDate).toLocaleDateString()}
                </p>
                <p style={{ gridArea: "outboundDate" }}>
                  Volta {new Date(p.outboundDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </Container>
    </>
  );
};

TravelPackages.propTypes = {
  getPackagesRequest: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(PackageActions, dispatch);

export default connect(null, mapDispatchToProps)(TravelPackages);
