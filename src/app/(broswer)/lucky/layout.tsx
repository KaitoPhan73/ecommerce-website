import React from "react";
import PageTitle from "@/components/page-tittle";
const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <PageTitle title="Liệu Bạn Có May Mắn ?" />
      <div>{children}</div>
    </>
  );
};

export default ProductLayout;
