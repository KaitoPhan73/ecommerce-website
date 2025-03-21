"use client";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useUrlParamChange } from "@/components/hooks/url";
import { formatPriceVND } from "@/lib/formatter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TBaseModelResponse } from "@/schema/base-model.schema";
import { TTableResponse } from "@/types/Table";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  search: z.string(), // Allow empty string
  baseModelId: z.string(),
  priceRange: z.array(z.number().min(1, { message: "Tiền phải lớn hơn 1" })),
});

type Props = {
  dataBaseModelSource: TTableResponse<TBaseModelResponse>;

  params: {
    page: number;
    limit: number;
    minPrice: number;
    maxPrice: number;
    name: string;
    baseModelId: string;
  };
};
type TFormValues = z.infer<typeof formSchema>;
const ProductFilter = ({ params, dataBaseModelSource }: Props) => {
  const { updateUrlParams } = useUrlParamChange();
  const searchParams = useSearchParams();
  const baseModelId = searchParams.get("baseModelId");
  const form = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: params.name || "",
      baseModelId: baseModelId
        ? baseModelId
        : dataBaseModelSource.listResult[0]?.id,
      priceRange: params.maxPrice ? [params.maxPrice] : [0],
    },
  });

  const onSubmit = (values: TFormValues) => {
    console.log("Form Values:", values);
    updateUrlParams({
      name: values.search,
      baseModelId: values.baseModelId,
      minPrice: 0, // Nếu có range từ-to
      maxPrice: values.priceRange[0], // Giá trị max
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-8">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={["item-1", "item-2"]}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Tìm sản phẩm</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Tên sản phẩm</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Nhập tên sản phẩm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Chọn mẫu bạn muốn</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="baseModelId"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn mẫu bạn muốn" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dataBaseModelSource.listResult.map((item, index) => (
                          <SelectItem key={index} value={item.id}>
                            {item.modelName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Tìm theo giá</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {field.value[0] > 0 &&
                        `( ${formatPriceVND(0)} - ${formatPriceVND(
                          field.value
                        )})`}
                    </FormLabel>

                    <p>{form.formState.errors.priceRange?.[0]?.message}</p>

                    <FormControl>
                      <Slider
                        min={0}
                        max={1000000}
                        step={10}
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                    </FormControl>
                    <div className="flex justify-between mt-2">
                      <span>{formatPriceVND(0)}</span>
                      <span>{formatPriceVND(1000000)}</span>
                    </div>
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button type="submit" className="mt-4 w-full">
          Áp dụng bộ lọc
        </Button>
      </form>
    </Form>
  );
};

export default ProductFilter;
