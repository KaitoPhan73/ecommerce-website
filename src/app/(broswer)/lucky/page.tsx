import React from "react";
import BlindCard from "./_components/blind-card";
import { getAllBaseModelsActive } from "@/api/base-model";

// Hàm để random array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Page = async (props: any) => {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    limit: props.searchParams.limit ? +props.searchParams.limit : 6,
  };

  const productResponse = await getAllBaseModelsActive(params);

  // Random items array
  const randomizedItems = shuffleArray(productResponse.payload.listResult);

  return (
    <section className="flex flex-1 justify-center items-center min-h-screen">
      <div className="px-2 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomizedItems.map((item, index) => (
            <BlindCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
