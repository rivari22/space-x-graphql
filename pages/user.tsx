import type { NextPage } from "next";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useInsertUserMutationMutation,
} from "../graphql/generated/graphql";
import { uuid } from "uuidv4";
import { Card } from "../components/Card";
import { useCallback } from "react";
import Link from "next/link";

const User: NextPage = () => {
  const [insertUser] = useInsertUserMutationMutation();
  const [deleteUser] = useDeleteUserMutation();
  const { data, error, loading, refetch } = useGetUsersQuery();

  const handleDeleteUser = useCallback(async (id: string) => {
    const res = await deleteUser({ variables: { id } });

    if (res.errors) alert(`error: ${res.errors}`);
    else refetch();
  }, []);

  if (loading) return <>Loading...</>;

  if (error) return <>error: {error}</>;

  return (
    <section className="">
      <Link href={'/'} passHref>Back to homepage</Link>
      <div
        className="cursor-pointer mb-10 px-6 py-2 bg-black inline-block rounded-xl ml-4"
        onClick={async () => {
          const res = await insertUser({
            variables: {
              id: uuid(),
              name: "rivari-tech-sharing",
              rocket: "rocket",
              twitter: "spacex",
              timestamp: new Date(),
            },
          });

          if (res.errors) alert(`error: ${res.errors}`);
          else refetch();
        }}
      >
        Create account
      </div>
      <div className="flex flex-wrap gap-10 justify-center w-full relative">
        {data?.users?.map((item, index) => (
          <Card
            key={index}
            title={`${item?.name}`}
            desc={`${item?.rocket}`}
            delete={() => handleDeleteUser(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default User;
