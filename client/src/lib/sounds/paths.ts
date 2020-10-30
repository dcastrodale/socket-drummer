import { Instruments } from "lib/instruments/instruments.types";

interface SoundPathShape extends Record<Instruments, string> {}

export const SoundPaths: SoundPathShape = {
  [Instruments.BD]:
    "https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Kick.mp3",
};
