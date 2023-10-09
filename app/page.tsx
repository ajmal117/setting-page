import Image from "next/image";
import Link from "next/link";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Qmark } from "@/components/icons";
import google from "../public/image/google.png";
import gicon from "../public/image/gicon.png";
import rect from "../public/image/Rect.png";
import zero from "../public/image/zero.png";
import qb from "../public/image/qb.png";
import csv from "../public/image/csv.png";
import { Engagement } from "../components/engagement";

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="flex flex-col lg:px-52 py-8 gap-12">
            <div className="flex flex-col gap-1">
              {/*single1 div refrence*/}
              <p className="font-semibold text-3xl">Integrations</p>
              <p className="font-normal text-base text-[#3F4C5A]">
                Missing your favorite Integration? You can request one{" "}
                <a href="" className="text-blue-500">
                  here
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {" "}
              {/*single2 div refrence*/}
              <div className="text-xl font-medium text-[#19154E] flex gap-2 ">
                <p> Identity and Single Sign On </p>
                <Link href="" className="my-auto">
                  <Qmark className={"px-2"} />
                </Link>
              </div>
              <div className="h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
                <div className="flex gap-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Image
                      width={34}
                      height={34}
                      alt="image"
                      src={google}
                      className=""
                    ></Image>
                  </div>
                  <div className="flex  justify-center flex-col">
                    <div className="flex gap-3 items-center">
                      <label
                        htmlFor=""
                        className="font-medium text-base text-[#19154E]"
                      >
                        Google Workspace
                      </label>
                      <Image
                        width={40}
                        height={24}
                        alt="image"
                        src={gicon}
                        className="hover:cursor-pointer"
                      ></Image>
                    </div>
                    <p className="font-normal text-base text-[#6B778C]">
                      Setup Google Workspace with one-click to work flawlessly
                      with Forescribe
                    </p>
                  </div>
                </div>
                <button className="w-28 h-10 bg-[#8B3DFF] rounded-md text-white">
                  Connect
                </button>
              </div>
              <div className="h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
                <div className="flex gap-3">
                  <div className="rounded-lg">
                    <Image
                      width={50}
                      height={50}
                      alt="image"
                      src={rect}
                      className=""
                    ></Image>
                  </div>
                  <div className="flex  justify-center flex-col">
                    <div className="flex gap-3 items-center">
                      <label
                        htmlFor=""
                        className="font-medium text-base text-[#19154E]"
                      >
                        Office 365
                      </label>
                      <Image
                        width={40}
                        height={24}
                        alt="image"
                        src={gicon}
                        className="hover:cursor-pointer"
                      ></Image>
                    </div>
                    <p className="font-normal text-base text-[#6B778C]">
                      Setup Office 365 if your organization depends on it as an
                      Identity provider
                    </p>
                  </div>
                </div>
                <button className="w-28 h-10 bg-[#8B3DFF] rounded-md text-white">
                  Connect
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {" "}
              {/*single 3 div refrence*/}
              <div className="text-xl font-medium text-[#19154E] flex gap-2 ">
                <p> Accounting </p>
                <Link href="" className="my-auto">
                  <Qmark className={"px-2"} />
                </Link>
              </div>
              <div className="h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
                <div className="flex gap-3 items-center">
                  <div className="p-2 h-12 flex items-center justify-center bg-[#13B5EA] rounded-lg">
                    <Image
                      width={34}
                      height={34}
                      alt="image"
                      src={zero}
                      className=""
                    ></Image>
                  </div>
                  <div className="flex  justify-center flex-col">
                    <div className="flex gap-3 items-center">
                      <label
                        htmlFor=""
                        className="font-medium text-base text-[#19154E]"
                      >
                        Xero
                      </label>
                      <Image
                        width={40}
                        height={24}
                        alt="image"
                        src={gicon}
                        className="hover:cursor-pointer"
                      ></Image>
                    </div>
                    <p className="font-normal text-base text-[#6B778C]">
                      Gather actionable information for every known Application
                      that persists in your books
                    </p>
                  </div>
                </div>
                <button className="w-28 h-10 bg-[#8B3DFF] rounded-md text-white">
                  Connect
                </button>
              </div>
              <div className="h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
                <div className="flex gap-3 items-center">
                  <div className="p-2 h-12 flex items-center bg-[#24A205] rounded-lg">
                    <Image
                      width={30}
                      height={38}
                      alt="image"
                      src={qb}
                      className=""
                    ></Image>
                  </div>
                  <div className="flex  justify-center flex-col">
                    <div className="flex gap-3 items-center">
                      <label
                        htmlFor=""
                        className="font-medium text-base text-[#19154E]"
                      >
                        Quickbooks
                      </label>
                      <Image
                        width={40}
                        height={24}
                        alt="image"
                        src={gicon}
                        className="hover:cursor-pointer"
                      ></Image>
                    </div>
                    <p className="font-normal text-base text-[#6B778C]">
                      Organize your App spend and gather actionable insights to
                      make informed decisions
                    </p>
                  </div>
                </div>
                <button className="w-28 h-10 bg-[#8B3DFF] rounded-md text-white">
                  Connect
                </button>
              </div>
              <div className="h-24 px-3  flex justify-between items-center bg-gradient-to-r from-[#EFEFEF] rounded-3xl">
                <div className="flex gap-3 items-center">
                  <div className="p-3 h-12 flex items-center justify-center bg-[#E1F0F1] rounded-lg">
                    <Image
                      width={26}
                      height={35}
                      alt="image"
                      src={csv}
                      className=""
                    ></Image>
                  </div>
                  <div className="flex  justify-center flex-col">
                    <div className="flex gap-3 items-center">
                      <label
                        htmlFor=""
                        className="font-medium text-base text-[#19154E]"
                      >
                        CSV
                      </label>
                      <Image
                        width={40}
                        height={24}
                        alt="image"
                        src={gicon}
                        className="hover:cursor-pointer"
                      ></Image>
                    </div>
                    <p className="font-normal text-base text-[#6B778C]">
                      Manually upload your transaction data every month and stay
                      aware of your App spend and usage
                    </p>
                  </div>
                </div>
                <button className="w-28 h-10 bg-[#8B3DFF] rounded-md text-white">
                  Connect
                </button>
              </div>
            </div>
            <Engagement />
          </div>
        </div>
      </div>
    </>
  );
}
