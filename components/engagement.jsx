import React from "react";
import Image from "next/image";
import Link from "next/link";
import zoom from "../public/image/zoom.png";
import slack from "../public/image/slack.png";
import jira from "../public/image/jira.png";
import { Qmark } from "@/components/icons";

export const Engagement = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {" "}
        {/*single 3 div refrence*/}
        <div className="text-xl font-medium text-[#19154E] flex gap-2 ">
          <p> Engagement </p>
          <Link href="" className="my-auto">
            <Qmark className={"px-2"} />
          </Link>
        </div>
        <div className="opacity-50  h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
          <div className="flex gap-3 items-center">
            <div className="p-2 h-12 flex items-center justify-center bg-[#13B5EA] rounded-lg">
              <Image
                width={34}
                height={34}
                alt="image"
                src={zoom}
                className=""
              ></Image>
            </div>
            <div className="flex  justify-center flex-col">
              <div className="flex gap-3 items-center">
                <label
                  htmlFor=""
                  className="font-medium text-base text-[#19154E]"
                >
                  Zoom
                </label>
              </div>
              <p className="font-normal text-base text-[#6B778C]">
                Gather actionable insights off Zoom and stay aware of its user
                engagement and analyse spend
              </p>
            </div>
          </div>
        </div>
        <div className=" opacity-50 h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
          <div className="flex gap-3 items-center">
            <div className=" h-12 flex items-center rounded-lg">
              <Image
                width={46}
                height={46}
                alt="image"
                src={slack}
                className="rounded-lg"
              ></Image>
            </div>
            <div className="flex  justify-center flex-col">
              <div className="flex gap-3 items-center">
                <label
                  htmlFor=""
                  className="font-medium text-base text-[#19154E]"
                >
                  Slack
                </label>
              </div>
              <p className="font-normal text-base text-[#6B778C]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="opacity-50 h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
          <div className="flex gap-3 items-center">
            <div className=" h-12 flex items-center justify-center bg-[#E1F0F1] rounded-lg">
              <Image
                width={52}
                height={52}
                alt="image"
                src={jira}
                className=""
              ></Image>
            </div>
            <div className="flex  justify-center flex-col">
              <div className="flex gap-3 items-center">
                <label
                  htmlFor=""
                  className="font-medium text-base text-[#19154E]"
                >
                  Jira
                </label>
              </div>
              <p className="font-normal text-base text-[#6B778C]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
