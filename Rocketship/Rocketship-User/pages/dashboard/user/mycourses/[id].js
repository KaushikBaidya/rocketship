import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineFieldTime,
  AiOutlinePlaySquare,
} from "react-icons/ai";
import ReactPlayer from "react-player";

const ContinueCourse = () => {
  const [link, setLink] = useState("https://www.youtube.com/embed/J6uam9jEmDU");
  console.log(link);
  const router = useRouter();
  // console.log(router);
  const { id } = router.query;
  const datas = [
    {
      _id: "0282e0e58a5c404fbd15261f11c2ab6a",
      course_id: "01",
      course_name: "PROFESSIONAL GRAPHIC DESIGN",
      content_title:
        "Graphicriver and freelancing marketplace base graphic design & design concept development based curriculum.",
      image_url: "https://i.ibb.co/Zzt5KG8/graphic.png",
      details:
        "Graphic designing is a combination of symbols, images, and text to form visual representations of messages and ideas. The graphic designing field is considered as an extended field of visual communication and communication design. Graphic designers create and combine symbols, images, and text to represent an idea or message. Graphic design course allows creating a logo, flyer, brochure, catalog, business card, posters, branding of a product or business, corporate graphic, website, UI, UX, web banner, digital marketing campaign related ad, Photoshop, vector and vector illustration, infographic, technical illustration, and visualization.",
      course_fee: "30,000.00",
      total_class: "40 classes",
      duration: "5 month",
      content_links: [
        {
          video_title: "Javascript",
          video_link: "https://www.youtube.com/embed/J6uam9jEmDU",
        },
        {
          video_title: "React",
          video_link: "https://www.youtube.com/embed/O0rvesNrzP0",
        },
        {
          video_title: "Next",
          video_link: "https://www.youtube.com/embed/ko5lL2MQKCU",
        },
      ],
    },
  ];
  // console.log(datas[0].content_links);
  return (
    <div className="card w-full max-w-screen-xl py-4 mb-4">
      <h1>Course video</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
        <div className="flex p-5 gap-3 flex-col cursor-pointer bg-gray-300 col-span-1 rounded-lg md:w-full">
          <div className="font-bold text-xl md:text-lg">
            {datas[0].course_name}
          </div>
          {datas[0]?.content_links?.map((data) => (
            <>
              <div className="flex justify-center items-center gap-2">
                {/* <AiOutlinePlaySquare className="w-10" /> */}
                <div
                  className="flex gap-4 bg-slate-700 rounded-xl text-white"
                  onClick={() => setLink(data.video_link)}
                >
                  <Image
                    src={datas[0].image_url}
                    width={150}
                    height={150}
                    alt="image"
                    className="rounded-l"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <p>{data.video_title} tutorial</p>
                    <div className="flex gap-2 items-center justify-start">
                      <div className="flex gap-1 items-center">
                        <AiOutlineFieldTime /> <p> 10:42</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="col-span-2">
          <ReactPlayer
            className="rounded-lg"
            playing
            width={"100%"}
            height={"100%"}
            controls
            url={link}
          />
          {/* <iframe
            // width="100%"
            // height="100%"
            className="aspect-video w-full md:w-full"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default ContinueCourse;
