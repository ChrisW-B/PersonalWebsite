import 'babel-polyfill';

const queryHandler = async (query) => {
  const res = await fetch(`/graphql`, {
    method: `POST`,
    headers: { 'Content-Type': `application/json` },
    body: JSON.stringify({ query })
  });

  const json = await res.json();

  return json.data;
};

export default queryHandler;