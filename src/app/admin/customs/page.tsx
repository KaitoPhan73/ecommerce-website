"use server";

import { DataTable } from "@/components/table/data-table";
import { columns } from "./components/columns";
import { getAllCustoms } from "@/api/custom";

export default async function CustomsPage(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    limit: props.searchParams.limit ? +props.searchParams.limit : 10,
  };

  const response = await getAllCustoms(params);

  return (
    <>
      <div className="flex h-full flex-1 flex-col">
        {/* <CardReports data={response.payload} /> */}
        <DataTable
          payload={{
            ...response.payload,
            page: params.page,
            limit: params.limit,
          }}
          columns={columns}
        />
      </div>
    </>
  );
}
