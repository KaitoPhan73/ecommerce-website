import Image from "next/image";
import React from "react";

const images = [
  "https://upload.wikimedia.org/wikipedia/en/8/8b/Magic_the_gathering-card_back.jpg",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Lionel_Messi_WC2022.jpg",
];

const Gallery = () => {
  return (
    <>
      <div className="max-w-4xl pt-24 pb-12 ">
        <h2 className="text-2xl text-gray-600 font-sans border-l border-black dark:text-white dark:border-white pl-12 py-4">
          Bộ sưu tập
        </h2>
        <p className="border-l-4 border-black pl-12 dark:text-white dark:border-white text-3xl font-light max-w-md py-4">
          Khoảnh khắc đẹp cùng chúng tôi
        </p>
      </div>
      <section className="rounded-lg bg-gray-50 dark:bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={300}
                className=" rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
