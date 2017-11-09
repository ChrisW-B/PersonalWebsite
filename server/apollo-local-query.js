import { ApolloLink, Observable } from 'apollo-link';
import { execute } from 'graphql';

export default class LocalLink extends ApolloLink {
  constructor(schema, context, rootValue) {
    super();

    this.schema = schema;
    this.context = context;
    this.rootValue = rootValue;
  }

  request(operation) {
    const { schema, rootValue, context } = this;
    const { query, variables, operationName } = operation;

    return new Observable((observer) => {
      let canceled = false;
      execute(schema, query, rootValue, context, variables, operationName)
        .then((result) => {
          if (canceled) return null;
          observer.next(result);
          observer.complete();
          return result;
        })
        .catch((err) => {
          if (!canceled) observer.error(err);
          return null;
        });

      return () => {
        canceled = true;
      };
    });
  }
}