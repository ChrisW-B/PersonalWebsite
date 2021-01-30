import { css } from '@emotion/react';
import styled from '@emotion/styled';

const IOSFullHeight = css`
  /* need to use -webkit-fill-available for safari, where the address bar does not affect vh value */
  /* stylelint-disable value-no-vendor-prefix, plugin/no-unsupported-browser-features */
  height: -webkit-fill-available;
  height: 100vh;
  max-height: 100vh;
  max-height: -webkit-fill-available;
  min-height: 100vh;
  min-height: -webkit-fill-available;
`;

export default css`
  :root {
    --bezier-transition: cubic-bezier(0.4, 0, 0.2, 1);

    /* font families */
    --font-family-body: 'Open Sans', sans-serif;
    --font-family-header: 'IBM Plex Serif', serif;

    /* font sizes */
    --list-text: 0.8rem;
    --description-text: 1.4rem;
    --body-text: 1.6rem;
    --subhead-text: 2rem;
    --section-header-text: 2.6rem;
    --page-title-scroll: 2.8rem;
    --page-title-small: 6rem;
    --page-title-medium: 8rem;
    --page-title-large: 12rem;

    /* light mode colors */
    --light-mode-cyan: #00c3d8;
    --light-mode-cyan-70: #00c3d8b3;
    --light-mode-dark: #1a0b00;
    --light-mode-light-grey: #f9fcfc;
    --light-mode-light-grey-00: #f9fcfc00;
    --light-mode-link-blue: #2f4351;
    --light-mode-rose: #ba2742;
    --light-mode-rose-50: #ba274280;
    --light-mode-white: #ffff;
    --light-mode-white-00: #fff0;

    /* dark mode colors */
    --dark-mode-cyan: #00c3d8;
    --dark-mode-cyan-70: #00c3d8b3;
    --dark-mode-dark: #ffff;
    --dark-mode-light-grey: #2a353d;
    --dark-mode-light-grey-00: #2a353d00;
    --dark-mode-link-blue: #ffff;
    --dark-mode-rose: #ba2742;
    --dark-mode-rose-50: #ba274280;
    --dark-mode-white: #252729;
    --dark-mode-white-00: #1a0b0000;
  }
  html,
  body {
    font-family: var(--font-family-body);
    /* stylelint-disable unit-whitelist */
    font-size: 10px;
    /* stylelint-enable unit-whitelist */
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    ${IOSFullHeight};
  }
`;

const lightModeCSS = css`
  /* Light mode vars */
  --cyan: var(--light-mode-cyan);
  --cyan-70: var(--light-mode-cyan-70);
  --dark: var(--light-mode-dark);
  --light-grey: var(--light-mode-light-grey);
  --light-grey-00: var(--light-mode-light-grey-00);
  --link-blue: var(--light-mode-link-blue);
  --rose: var(--light-mode-rose);
  --rose-50: var(--light-mode-rose-50);
  --white: var(--light-mode-white);
  --white-00: var(--light-mode-white-00);
`;

const darkModeCSS = css`
  /* dark mode vars */
  --cyan: var(--dark-mode-cyan);
  --cyan-70: var(--dark-mode-cyan-70);
  --dark: var(--dark-mode-dark);
  --light-grey: var(--dark-mode-light-grey);
  --light-grey-00: var(--dark-mode-light-grey-00);
  --link-blue: var(--dark-mode-link-blue);
  --rose: var(--dark-mode-rose);
  --rose-50: var(--dark-mode-rose-50);
  --white: var(--dark-mode-white);
  --white-00: var(--dark-mode-white-00);
`;

// just for ssr
const emptyCSS = css``;

export const NightModeStyles = styled.div<{ lightMode: boolean; isClient: boolean }>`
  ${(props) => (props.isClient ? (props.lightMode ? lightModeCSS : darkModeCSS) : emptyCSS)};
  background-color: var(--white);
  color: var(--dark);
  transition: all 0.25s var(--bezier-transition);
`;
