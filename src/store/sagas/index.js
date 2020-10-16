import { all, takeLatest } from "redux-saga/effects";

import { getPackages } from "./packages";
import { PackageTypes } from "../ducks/packages";

export default function* rootSaga() {
  return yield all([
    takeLatest(PackageTypes.GET_PACKAGES_REQUEST, getPackages)
  ]);
}
