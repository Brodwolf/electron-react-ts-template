import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  isAuthenticated: false,
});

export { setGlobalState, useGlobalState };
