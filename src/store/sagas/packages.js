import { call, put, all } from "redux-saga/effects";
import axios from "axios";

import PackageActions from "../ducks/packages";

export function* getPackages() {
  try {
    let [flights, iataCodes, hotels] = yield all([
      call(
        axios.get,
        "https://5f637566363f0000162d8b16.mockapi.io/milhas321/api/v1/flights"
      ),
      call(
        axios.get,
        "https://5f637566363f0000162d8b16.mockapi.io/milhas321/api/v1/iataCodes"
      ),
      call(
        axios.get,
        "https://5f637566363f0000162d8b16.mockapi.io/milhas321/api/v1/hotels"
      )
    ]);

    // Assumindo que todos os pacotes terão Belo Horizonte como origem.
    flights = flights.data.filter(f => f.departureAirport === "CNF");

    // Somando o preço dos hotéis de destino com o preço do voo para montar os pacotes.
    let packages = flights.filter(f => {
      let hotel = hotels.data.find(h => h.iata === f.arrivalAirport);
      f.hotel = hotel.name;
      return (f.price += hotel.pricePerNight);
    });

    // Separando os pacotes por destino nos respectivos arrays.
    let groupByIataCode = iataCodes.data.map(i => {
      let p = packages.filter(p => p.arrivalAirport === i.id);
      // Incluindo o nome da cidade e a imgUrl dela.
      p.filter(p => {
        p.imageUrl = i.imageUrl;
        return (p.city = i.city);
      });
      return p;
    });

    // Filtrando os pacotes para que apareça apenas um card para cada destino, com o menor preço possível.
    packages = groupByIataCode.map(test => {
      let min = test.map(tt => tt.price);
      return test.length ? test.find(t => t.price === Math.min(...min)) : "";
    });

    yield put(PackageActions.getPackagesSuccess(packages));
  } catch (error) {
    console.log(error);
  }
}
