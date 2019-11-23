declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}
declare module '*.gql' {
  import graphql = require('graphql');
  const content: any;
  export default content;
}
declare module '*.graphql' {
  import graphql = require('graphql');
  const content: any;
  export default content;
}
export {};
