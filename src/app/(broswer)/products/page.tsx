import React from "react";
import { TabTypeProducts } from "./_components/tabs";
import ListProducts from "./_components/list-products";
import { getAllProductsForUser } from "@/api/product";
import { getAllCategoriesActive } from "@/api/category";
import ProductFilter from "./_components/product-filter";
import { getAllBaseModelsActive } from "@/api/base-model";
const page = async (props: any) => {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    limit: props.searchParams.limit ? +props.searchParams.limit : 6,
    minPrice: props.searchParams.minPrice && props.searchParams.minPrice,
    maxPrice: props.searchParams.maxPrice && props.searchParams.maxPrice,
    name: props.searchParams.name && props.searchParams.name,
    baseModelId:
      props.searchParams.baseModelId && props.searchParams.baseModelId,
  };
  const productData = getAllProductsForUser(params);
  const baseModelData = getAllBaseModelsActive();

  // Initiate both requests in parallel
  const [productResponse, baseModelResponse] = await Promise.all([
    productData,
    baseModelData,
  ]);

  return (
    <section className="flex flex-1 gap-8 mb-8">
      <div className="w-[20%]">
        <ProductFilter
          params={params}
          dataBaseModelSource={baseModelResponse.payload}
        />
      </div>
      <div className="mt-14 flex-1 px-2">
        <ListProducts dataSource={productResponse.payload} params={params} />
      </div>
    </section>
  );
};

export default page;
