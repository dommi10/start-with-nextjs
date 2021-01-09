import Link from "next/link";
import { withUrqlClient } from "next-urql";
import LandPads from "../components/launch";

const IndexPage = () => (
  <div>
    <head>
      <Link href="/about">
        <a href="/">About</a>
      </Link>
    </head>
    <LandPads />
  </div>
);

export default withUrqlClient(() => ({
  url: "https://api.spacex.land/graphql/"
}))(IndexPage);
