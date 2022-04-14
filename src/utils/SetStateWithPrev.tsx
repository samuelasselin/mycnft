import { Dispatch, SetStateAction } from "react";

export const SetStateWithPrev = (
  setState: Dispatch<SetStateAction<object>>,
  newState: object
) => {
  Object.entries(newState).forEach(([key, val]) => {
    setState((prevState) => {
      return { ...prevState, [key]: val };
    });
  });
};
