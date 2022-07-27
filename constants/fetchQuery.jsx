export default async function fetchQuery(queryList) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: queryList,
    }),
  };

  const res = await fetch("http://localhost:1337/graphql", fetchParams);
  const data = await res.json();

  return data;
}
