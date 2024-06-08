import { useState } from "react";
import {
  Express,
  Midtrans,
  MikroOrm,
  Nest,
  Next,
  Prisma,
  React,
  Sequelize,
  Socket,
  TypeOrm,
  Vue,
} from "../Assets/png/index";

export default function Content() {
  const [feature, setFeature] = useState({
    morewords: false,
  });

  const listPackage = {
    frontend: [
      { src: Next, name:'Next', bg: 'bg-white', height: 32 },
      { src: Express, name:'', bg: 'bg-white', height: 32 },
      { src: Vue, name:'', bg: '', height: 32 },
    ],
    backend: [
      { src: Midtrans, name:'', bg: '', height: 24 },
      { src: MikroOrm, name:'', bg: 'bg-white', height: 'fit' },
      { src: Nest, name:'', bg: '', height: 20 },
      { src: Prisma, name:'', bg: '', height: 20 },
      { src: Sequelize, name:'', bg: '', height: 20 },
      { src: Socket, name:'', bg: '', height: 20 },
      { src: TypeOrm, name:'', bg: '', height: 20 },
    ],
  };
  return (
    <div className="w-full h-full flex flex-col gap-20 p-40">
      <section className="w-full h-fit flex justify-between border ">
        <div className="ini box kiri w-1/2 flex flex-col items-start gap-5">
          <span className="text-3xl">Greetings !</span>
          <span className="text-xl">
            I have been working as a fullstack web developer since 2023 with
            JavaScript. Lately, I have been working on some projects focusing on
            e-commerce and medical and laboratory support.
          </span>
          {feature.morewords ? null : (
            <button onClick={() => setFeature({ ...feature, morewords: true })}>
              more about me ...
            </button>
          )}
          <span
            className={`text-justify ${
              feature.morewords
                ? "translate-y-5 opacity-100 "
                : "-translate-y-5 opacity-0"
            } duration-500 ease-in-out`}
          >
            Keenly committed to understanding coding based on user needs, I've
            transitioned to web development from <strong>chemistry</strong> and
            discovered a passion for website development and coding. Bringing
            practices from my chemistry background, such as{" "}
            <strong> applying attention to detail</strong>, <br />
            <strong>problem-solving skills</strong>, and a goal-focused
            approach, I <strong>ensure user satisfaction</strong> by delivering
            efficient and effective solutions.
          </span>
        </div>
        <div className="ini box kanan">empty content </div>
      </section>

      <section className="w-full h-fit flex justify-between border ">
        <div className="ini box kiri flex flex-col items-center w-1/2 h-[500px] border">
          <span className="text-4xl">Front-end</span>
          <div className="flex flex-wrap">
            {listPackage.frontend.map((data) => {
              return (
                <div className="w-fit border">
                  <img
                    className={`w-fit h-${data.height} ${data.bg}`}
                    src={data.src}
                  />
                  <div>{}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ini box kanan flex flex-col items-center w-1/2 h-[500px]">
          <span className="text-4xl">Back-end</span>
          <div className="flex flex-wrap">
            {listPackage.backend.map((data) => {
              return (
                <div className="w-1/4 h-20 border">
                  <img
                    className={`w-fit h-${data.height} ${data.bg}`}
                    src={data.src}
                  />
                  <div>{}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
