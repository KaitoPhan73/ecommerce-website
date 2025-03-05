"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  UpdateBaseModelSchema,
  TUpdateBaseModelRequest,
  TBaseModelResponse,
} from "@/schema/base-model.schema"; // Import schema tương ứng
import { ReloadIcon } from "@radix-ui/react-icons";
import { updateBaseModel } from "@/api/base-model";
import { TTableResponse } from "@/types/Table";
import { TCategoryResponse } from "@/schema/category.schema";
import { statusBaseModel } from "../../components/config";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";

interface FormUpdateBaseModelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialData: TBaseModelResponse;
  categories?: TTableResponse<TCategoryResponse>["listResult"];
}

export function FormUpdateBaseModel({
  className,
  initialData,
  categories,
  ...props
}: FormUpdateBaseModelProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  console.log("🚀 ~ initialData:", initialData)

  const [info, setInfo] = React.useState<any>(null);

  const form = useForm<TUpdateBaseModelRequest>({
    resolver: zodResolver(UpdateBaseModelSchema),
    defaultValues: {
      ...initialData,
      categoryID: categories?.find((item) => item.id === initialData.categoryId)?.id || "",
    }
      });
  React.useEffect(() => {
    if (info?.url) {
      form.setValue("image", info.url);
    }
  }, [info, form]);
  const onSubmit = async (data: TUpdateBaseModelRequest) => {
    setIsLoading(true);
    try {
      const response = await updateBaseModel(data); // Gọi hàm API cập nhật
      if (response.status === 200) {
        toast({
          title: "Cập nhật mẫu thành công",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to update base model: ${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  };
  console.log("initialData", initialData);
  return (
    <Form {...form}>
      <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-2">
            <FormField
              control={form.control}
              name="modelName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên Mẫu</FormLabel>
                  <FormControl>
                    <Input placeholder="Tên mẫu..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô Tả</FormLabel>
                  <FormControl>
                    <Input placeholder="Mô Tả..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="basePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Giá Cơ Bản</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Giá cơ bản..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categoryID"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel>Phân Loại</FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn phân loại" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories?.map((item, index) => (
                        <SelectItem key={index} value={item.id}>
                          {item.categoryName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel>Trạng thái</FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statusBaseModel.map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CldUploadWidget
              signatureEndpoint="/api/sign-image"
              onSuccess={(result) => {
                setInfo(result?.info);
              }}
            >
              {({ open }) => {
                return (
                  <Button type="button" onClick={() => open()}>
                    Upload an Image
                  </Button>
                );
              }}
            </CldUploadWidget>
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Cập Nhật
          </Button>
        </form>
      </div>
    </Form>
  );
}
