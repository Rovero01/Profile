import { useState } from "react";
import {
  Express,
  Midtrans,
  MikroOrm,
  Nest,
  NextWhite,
  NextBlack,
  React,
  Prisma,
  Sequelize,
  Socket,
  TypeOrm,
  Vue,
  Rabbit,
  Mysql,
  Mongo,
  Postgre,
  Sjw,
  Ows,
} from "../Assets/png/index";

import "./content.css";
import borderBMaker from "../utils/border_b_maker";

export default function Content({ open }) {
  const [feature, setFeature] = useState({
    morewords: false,
    popUps: false,
    projects: 0,
  });

  const [light] = useState(false);

  const listPackage = {
    FrontEnd: [
      { src: React, name: "React JS", bg: "", width: "40vw", height: "40vh" },
      {
        src: light ? NextBlack : NextWhite,
        name: "Next JS",
        bg: "bg-white",
        width: "70vw",
        height: "70vh",
      },
      { src: Vue, name: "Vue JS", bg: "", width: "55vw", height: "55vh" },
      { src: Socket, name: "Socket.io", bg: "", width: "55vw", height: "55vh" },
    ],
    BackEnd: [
      {
        src: Express,
        name: "Express JS",
        bg: "bg-white",
        width: "70vw",
        height: "70vh",
      },
      { src: Nest, name: "Nest JS", bg: "", width: "60vw", height: "60vh" },
      {
        src: Sequelize,
        name: "Sequelize",
        bg: "",
        width: "90vw",
        height: "90vh",
      },
      { src: Prisma, name: "Prisma", bg: "", width: "50vw", height: "50vh" },
      {
        src: MikroOrm,
        name: "Mikro Orm",
        bg: "bg-white",
        width: "80vw",
        height: "80vh",
      },
      { src: TypeOrm, name: "Type Orm", bg: "", width: "60vw", height: "60vh" },
      { src: Rabbit, name: "Rabbit MQ", bg: "", width: "40vw", height: "40vh" },
      { src: Mysql, name: "My SQL", bg: "", width: "60vw", height: "60vh" },
      { src: Mongo, name: "Mongo DB", bg: "", width: "60vw", height: "60vh" },
      {
        src: Postgre,
        name: "Postgre SQL",
        bg: "",
        width: "60vw",
        height: "60vh",
      },
    ],
    '3rd-Party_Integration': [
      {src: Midtrans, name: "Midtrans", bg: "bg-white", width: "70vw", height: "70vh" }
    ],
    Web_Services: [
      { src: Ows, name: "OWS", bg: "", width: "200px" , height: "200px" }
    ],
  };

  const [listButtonProject] = useState([
    "E-commerce",
    "Health Care",
    "Telecommunication"
  ]);

  return (
    <div className="w-full h-full flex flex-col gap-20 py-40 px-32">
      <section
        className={`w-full h-96 flex justify-between ${
          open.body1
            ? "-translate-y-5 opacity-100 "
            : "translate-y-5 opacity-0 "
        } duration-500 ease-in-out`}
      >
        <div className="ini box kiri w-1/2 flex flex-col items-start gap-5">
          <div>
            <span className="med">Hi, i am Savero</span>
          </div>
          <div>
            <span className="big">
              I develop{" "}
              <span className="text-purple-600 font-semibold">
                web applications
              </span>{" "}
              for performance, speed, and reliability.
            </span>
            <div className="mt-5">
              I have rich experience in development web projects and app
              development
            </div>
          </div>
        </div>
        {/* box kanan */}
        <div className="w-1/2 flex items-center justify-center">
          <img width="500px" height="500px" alt="siganteng" src={Sjw}></img>
        </div>
        {/* box kanan */}
      </section>
      <span
        className={`text-center ${
          open.body2 ? "opacity-100" : "opacity-0"
        } ease-in-out duration-500`}
      >
        <span className="big">I'm Familiar With</span>
      </span>
      <section className="flex flex-wrap justify-between -mt-20">
          {Object.keys(listPackage).map((data) => {
            return (
              <div
                className={`h-fit flex flex-col items-center w-1/2 h-[500px] gap-10 py-16 ${
                  open.body2 ? " opacity-100 " : "opacity-0 "
                } duration-500 ease-in-out `}
              >
                <div className="flex flex-col w-full gap-12 pb-5">
                  <div className="w-full text-center">
                    <span className="big">{data.replace(/_/g,' ')}</span>
                  </div>
                  <div className="flex flex-wrap gap-5 px-10 justify-center">
                    {listPackage[data].map((data) => {
                      return (
                        <div className="w-fit flex flex-col items-center justify-center">
                          <div className="h-16 flex items-center">
                            <img
                              className={`${data.bg}`}
                              alt={data.name}
                              width={data.width}
                              height={data.height}
                              src={data.src}
                            />
                          </div>
                          <div>{data.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </section>

      <section className="w-full h-96 flex flex-col gap-10 -mt-10 ">
        <div
          className={`${
            open.body3 ? "opacity-100" : "opacity-0"
          } duration-500 ease-in-out text-center w-full text-4xl`}
        >
          <div>Portfolio</div>
          <span className="opacity-50 text-sm">Latest Projects</span>
        </div>
        <div
          className={`${
            open.body3 ? "opacity-100" : "opacity-0"
          } duration-500 ease-in-out flex justify-center w-full h-fit gap-5`}
        >
          {listButtonProject.map((data, index) => (
            <button
              onClick={() => setFeature({ ...feature, projects: index })}
              className={`${
                index === feature.projects
                  ? "opacity-100"
                  : "opacity-50 hover:bg-white hover:opacity-100 hover:text-black"
              } ease-in-out duration-500  p-3 rounded-xl`}
            >
              {data}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
