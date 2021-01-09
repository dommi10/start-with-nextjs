import React from "react";
import gql from "graphql-tag";
import { useQuery } from "urql";

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

  if (result.fetching) return <h4 className="w-full">Loading</h4>;

  if (result.error) return <span>Something Wrong!!</span>;

  return (
    <div className="flex flex-col items-center justify-between p-8">
      <span className="text-white">List of lands</span>
      {result.data.landpads.map((land) => (
        <div key={land.id}>
          <p>{land.details}</p>
        </div>
      ))}
    </div>
  );
};

export default LandPads;
