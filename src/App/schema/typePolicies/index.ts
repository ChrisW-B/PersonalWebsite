import { FieldReadFunction, TypePolicies } from '@apollo/client';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const merge: FieldReadFunction = (oldData, newData) => ({ ...oldData, ...newData });

const typePolicies: TypePolicies = {
  Photo: {
    keyFields: ['url'],
  },
  Query: {
    fields: {
      photoBlog: { merge },
      lastfm: { merge },
    },
  },
};
export default typePolicies;
