import React from 'react';

import { Global, css } from '@emotion/core';

const CSSReset = () => (
  <Global
    styles={css`
      body,
      html {
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default CSSReset;
