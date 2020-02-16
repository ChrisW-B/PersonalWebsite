declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}
export {};

declare module '*.svg' {
  import React = require('react');

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module '*.png';
declare module '*.jpg';
