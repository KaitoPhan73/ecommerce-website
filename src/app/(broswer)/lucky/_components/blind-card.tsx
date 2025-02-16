"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
type BlindCardProps = {
  data: {
    id: string;
    title?: string;
    price?: number;
    // ... các field khác từ API
  };
};
const BlindCard = ({ data }: BlindCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products?baseModelId=${data.id}`);
  };

  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-lg"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold">{"Túi Mù Bí Ẩn"}</CardTitle>
      </CardHeader>
      <CardContent className="h-96 w-full relative">
        <Image
          src="/images/cardiverse.jpg"
          alt="Mystery bag"
          layout="fill"
          objectFit="cover"
          className=" w-full h-full"
        />
      </CardContent>
    </Card>
  );
};

export default BlindCard;
