import { Dispatch, SetStateAction } from "react";

export const alertMessageTimeOutHandler = (
  setState: Dispatch<SetStateAction<{}>>,
  time: number
) => {
  setState(true);
  setTimeout(() => setState(false), time);
};
