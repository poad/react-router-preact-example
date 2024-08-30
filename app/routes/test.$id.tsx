import {
  ClientLoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from '@remix-run/react';

export async function clientLoader({
  params: { id },
}: ClientLoaderFunctionArgs) {
  return id; // "123"
}

export default function Component() {
  const id = useLoaderData<typeof clientLoader>();
  return (
    <>
      <h1>Post: {id}</h1>
      <Outlet />
    </>
  );
}
