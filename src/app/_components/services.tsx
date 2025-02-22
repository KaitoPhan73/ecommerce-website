"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { homepageList } from "@/constants/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const router = useRouter();

  const getCardVariants = (index: number): Variants => ({
    offscreen: {
      x: index % 2 === 0 ? -200 : 200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Tiêu đề */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-1xl font-semibold border-l-4 border-black dark:border-white pl-4 py-2">
          Trang web của chúng tôi có những gì?
        </h2>
        <p className="text-gray-600 dark:text-white text-lg mt-2">
          Các dịch vụ mà bạn sẽ được trải nghiệm khi đến với chúng tôi.
        </p>
      </div>

      {/* Danh sách dịch vụ */}
      <div className="mt-10 space-y-12">
        {homepageList.map((item, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={getCardVariants(index)}
            className="bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center"
          >
            {/* Ảnh */}
            <div className="md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Nội dung */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.description}
              </p>
              <Button
                onClick={() => router.push(item.link)}
                className="mt-4 flex items-center justify-center"
              >
                Xem thêm <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
