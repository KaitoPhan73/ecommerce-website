"use server";

import { cookies } from "next/headers";
import { getAllCategories } from "@/api/category";
import { columns } from "./_components/columns";
import CategoryIndex from "./_components";
export default async function ProductsPage(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    limit: props.searchParams.limit ? +props.searchParams.limit : 10,
  };

  const response = await getAllCategories(params);

  return (
    <>
      <CategoryIndex
        columns={columns}
        payload={response.payload}
        params={params}
      />
    </>
  );
}
