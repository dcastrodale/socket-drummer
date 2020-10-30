import React from "react";
import { Instruments } from "lib/instruments/instruments.types";
import { Subtract } from "utility-types";

const playSound = (type: Instruments) => {
  console.log(`TODO: play ${type}`);
};

interface InstrumentProps {
  type: Instruments;
}

export function createInstrument<T extends InstrumentProps>(
  Component: React.ComponentType<Subtract<T, InstrumentProps>>
): React.FC<T> {
  return (props: T) => (
    <>
      <Component {...(props as T)} onClick={() => playSound(props.type)} />
      {
        // TODO: Render Audio component here
      }
    </>
  );
}
