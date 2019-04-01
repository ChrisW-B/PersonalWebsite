import { Global, css } from '@emotion/core';
import React from 'react';

const CSSReset = () => (
  <Global
    styles={css`
      body, html {
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default CSSReset;