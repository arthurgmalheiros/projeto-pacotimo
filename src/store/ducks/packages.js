import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getPackagesRequest: null,
  getPackagesSuccess: ["packages"]
});

export const PackageTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  packages: null
});

/* Reducers */

export const success = (state, { packages }) => {
  return { ...state, packages };
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PACKAGES_SUCCESS]: success
});
