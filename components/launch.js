import React from "react";
import gql from "graphql-tag";
import { useQuery } from "url";

const queryLanch = gql`
  query landpads($limit: Int) {
    landpads(limit: $limit) {
      details
      id
    }
  }
`;

const LandPads = () => {
  const [result] = useQuery({ query: queryLanch, variables: { limit: 10 } });

  console.log({ result });

  if (result.fetching || !result.data) return <h4>Loading</h4>;

  if (result.error) return <span>Something Wrong!!</span>;

  return (
    <>
      <span>List of lands</span>
      {result.data.map((land) => (
        <div key={land.id}>
          <p>{land.details}</p>
        </div>
      ))}
    </>
  );
};

export default LandPads;
