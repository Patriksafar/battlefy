import { css } from "emotion";

const cutsize = 16;

export const media = css`
  height: 140px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -${cutsize / 2}px;
    right: -${cutsize / 2}px;
    height: ${cutsize}px;
    width: ${cutsize}px;
    background: red;
    border-radius: 50%;
    background: #181618;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -${cutsize / 2}px;
    left: -${cutsize / 2}px;
    height: ${cutsize}px;
    width: ${cutsize}px;
    background: red;
    border-radius: 50%;
    background: #181618;
  }
`;
