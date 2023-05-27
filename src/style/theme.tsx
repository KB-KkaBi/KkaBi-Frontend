import { css } from "styled-components";

const colors = {
  main: "#FCAF16",
  whiteYellow: "#FCF9EB",
  green: "#BAEAAE",
  blue: "#D0E9FF",
  darkPink: "#F8C5C2",
  darkYellow: "#FBC86A",
  darkBlue: "#A7D5FF",
  deepBlue: "#6EB1E1",
};

const fonts = {
  title: css`
    font-family: "KOTRAHOPE";
    font-style: normal;
    font-weight: 400;
    font-size: 8rem;
    line-height: 4.8rem;
  `,
  text: css`
    font-family: "KOTRAHOPE";
    font-style: normal;
    font-weight: 400;
    font-size: 4.6rem;
    line-height: 5.4rem;
  `,
  button: css`
    font-family: "KOTRAHOPE";
    font-style: normal;
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 5.2rem;
  `,
  cardTitle: css`
    font-family: "KOTRAHOPE";
    font-style: normal;
    font-weight: 400;
    font-size: 6rem;
    line-height: 4.8rem;
  `,
  quiz: css`
    font-family: "KOTRAHOPE";
    font-style: normal;
    font-weight: 400;
    font-size: 6rem;
    line-height: 7rem;
  `,
  log: css`
    font-family: "KOTRAHOPE";
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 4rem;
  `,
  won: css`
    font-family: "yg-jalnan";
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.6rem;
  `,
};

export const theme = {
  colors,
  fonts,
};
