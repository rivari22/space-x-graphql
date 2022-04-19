import type { NextPage } from "next";
import { Card } from "../components/Card";
import { useGetLaunchesPastQuery } from "../graphql/generated/graphql";
import Link from "next/link";
import { InfiniteScroll } from "../components/InfiniteScroll";

const Home: NextPage = () => {
  const { loading, error, data, fetchMore } = useGetLaunchesPastQuery({
    variables: {
      limit: 3,
      offset: 0,
    },
  });

  if (loading) return <>Loading...</>;

  if (error) return <>error: {error}</>;

  return (
    <section className="h-[110vh]">
      <div className="hero h-[40vh] bg-base-200 mb-16 relative">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Yummy tech sharing</h1>
            <p className="py-6">Space X Graphql</p>
          </div>
        </div>
        <div className="cursor-pointer px-6 py-2 inline-block bg-black rounded-xl mb-16 absolute bottom-0 left-6">
          <Link href={"/user"} passHref>
            Go to user
          </Link>
        </div>
      </div>
      <InfiniteScroll
        dataLength={data?.launchesPast?.length || 0}
        fetchMore={() => {
          fetchMore({
            variables: {
              limit: 3,
              offset: data?.launchesPast?.length,
            },
            updateQuery: (
              prev: any,
              { fetchMoreResult }: { fetchMoreResult?: any }
            ) => {
              if (!fetchMoreResult) return prev;

              return {
                launchesPast: [
                  ...prev.launchesPast,
                  ...fetchMoreResult.launchesPast,
                ],
              };
            },
          });
        }}
      >
        {data?.launchesPast?.map((item, index) => (
          <Card
            key={index}
            title={`${item?.mission_name}`}
            desc={`${item?.launch_site?.site_name_long}`}
            link={`${item?.links?.wikipedia}`}
          />
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default Home;
