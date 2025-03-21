"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from "sonner";
import { TBaseModelResponse } from "@/schema/base-model.schema";
import { deleteBaseModel } from "@/api/base-model";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function RowActionBaseModel<TData extends TBaseModelResponse>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const handleViewDetail = () => {
    router.push(`/admin/base-models/${row.original.id}`);
  };
  const handleDelete = async () => {
    try {
      await deleteBaseModel(row.original.id);
      toast("Xóa thành công", {
        description: `Bạn đã xóa mẫu ${row.original.modelName}`,
      });
    } catch (error) {
      toast.error("Có lỗi xảy ra khi xóa mẫu."); // Thông báo lỗi
      console.error("Error deleting category:", error); // In ra lỗi để kiểm tra nếu cần
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem className="group" onClick={handleViewDetail}>
          Xem chi tiết
          <DropdownMenuShortcut>
            {/* Biểu tượng thay đổi dựa vào trạng thái hover */}
            <span className="group-hover:hidden">
              <TbEyeClosed className=" h-4 w-4" />
            </span>
            <span className="hidden group-hover:inline">
              <FaEye className=" h-4 w-4 " />
            </span>
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={task.name}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>
          {row.original.status === "ACTIVE" ? "Xóa" : "Đã xóa"}
          <DropdownMenuShortcut>
            <FaDeleteLeft className=" h-4 w-4 " />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
