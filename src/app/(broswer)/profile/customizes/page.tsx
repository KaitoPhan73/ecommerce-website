import { Separator } from "@/components/ui/separator";
import CustomList from "./_components/custom-list";
import { cookies } from "next/headers";
import { getAllCustomsByUserId } from "@/api/custom";

async function page(props: any) {
  const cookieStore = cookies();
  const storeUser = cookieStore.get("user")?.value;
  const userId = JSON.parse(storeUser!).id;
  const params = {
    page: props.searchParams.page || 1,
    limit: props.searchParams.pageSize || 6,
  };
  const response = await getAllCustomsByUserId(userId, params);
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Lịch sử thiết kế của tôi</h3>
        <h3 className="text-lg font-medium">
          ( Nhấn vào ảnh để xem chi tiết )
        </h3>
      </div>
      <Separator />
      <CustomList data={response.payload} params={params} />
    </div>
  );
}

export default page;
