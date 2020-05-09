import { css } from '@emotion/core';

export default css`
  :root {
    --bezier-transition: cubic-bezier(0.4, 0, 0.2, 1);

    /* font families */
    --font-family-body: 'Open Sans', sans-serif;
    --font-family-header: 'IBM Plex Serif', serif;

    /* font sizes */
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
    height: 100vh;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
  }
`;
