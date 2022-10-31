import Image from "next/image";
import React from "react";
import Service from "../../public/blog1.jpeg";

const SinglePage = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-28 items-center justify-center flex-col">
        <Image
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={Service}
          width={700}
          height={300}
        />
        <div class="text-left lg:w-2/3 w-full mt-5">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p class="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
