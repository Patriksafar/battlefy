import { css } from "emotion";

export const root = css`
  position: relative;
`;

export const container = css`
  min-height: 540px;
  padding: 24px;
  z-index: 1;
  position: relative;
`;

export const containerContent = css`
  max-width: 760px;
`;

export const landingImage = css`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 0;

  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background: rgba(0, 15, 30, 0.6);
  }
`;

export const landingImageContent = css`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
