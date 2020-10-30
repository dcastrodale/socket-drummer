import React from "react";

import { Instruments } from "lib/instruments/instruments.types";
import { SoundPaths } from "lib/sounds/paths";

interface SoundProps {
  instrument: Instruments;
}
export default ({ instrument }: SoundProps) => {
  return (
    <>
      <audio src={SoundPaths[instrument]} />
    </>
  );
};
