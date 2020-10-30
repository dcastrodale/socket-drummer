import React from "react";
import { Instruments } from "lib/instruments/instruments.types";
import { createInstrument } from "lib/instruments/";
import { Drum } from "components/atoms/Drum";

export const BassDrum: React.FC = () => {
  const Instrument = createInstrument(Drum);

  return (
    <>
      <Instrument type={Instruments.BD} />
    </>
  );
};
