import Image from "next/image";
import Forescribe from "./icons";
// import { ReactComponent as Rewards } from '../../assets/svg/dashboard/rewards.svg';
import { 
  Insight,
  Application,
  Renewal,
  Transaction,
  Employee,
  Account,
  Webx,
  Downdrop,
  Inter
} from "./icons";

export default function Sidebar() {
  return (
    <>
      <div>
        <div className=" ">
          <Forescribe
            className={
              "flex justify-center py-4   h-[71px] w-72  border border-b-0"
            }
          />
          <div className="h-screen w-72 flex flex-col justify-between border border-b-0">
            <div className="  gap-4 pt-10  flex flex-col  items-center ">
              <div className=" flex gap-2 rounded-md active:bg-violet-50 hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-64">
                <Insight className={""} />
                <p className="font-normal text-base text-[#19154E]">Insight</p>
              </div>
              <div className="flex gap-2  px-5 py-3 h-12   w-64">
                <p className=" ps-2 font-normal text-xs text-slate-500">MENU</p>
              </div>
              <div className="flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-64">
                <Application className={""} />
                <p className="font-normal text-base text-[#19154E]">
                  Applications
                </p>
              </div>
              <div className="flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-64">
                <Renewal className={""} />
                <p className="font-normal text-base text-[#19154E]">Renewals</p>
              </div>
              <div className="flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-64">
                <Transaction className={""} />
                <p className="font-normal text-base text-[#19154E]">
                  Transactions
                </p>
              </div>
              <div className="flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-64">
                <Employee className={""} />
                <p className="font-normal text-base text-[#19154E]">
                  Employees
                </p>
              </div>
              <div className="flex gap-2 px-5 py-3 h-12   w-64">
                <p className=" ps-2 font-normal text-xs text-slate-500">
                  SETTINGS
                </p>
              </div>
              <div className="flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-64">
                <Inter className={""} />
                <p className="font-normal text-base text-[#19154E]">Integrations</p>
              </div>
              <div className="flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-64">
                <Account className={""} />
                <p className="font-normal text-base text-[#19154E]">Account</p>
              </div>
            </div>
            <div className="w-72  border  pt-3 border-b-0 flex flex-col  items-center ">
              <div className="flex gap-2 rounded-md   px-5 py-3  w-64">
                <div className="my-auto h-8 w-8 bg-[#8B3DFF] flex justify-center items-center rounded-md">
                  <Webx className={""} />
                </div>
                <div>
                  <p className="font-normal text-lg text-[#19154E] ">
                    Webx Startship
                  </p>
                  <p className="font-normal text-sm ">charlie@webx.com</p>
                </div>
                <div className="my-auto ms-5 ">
                  <button>
                    <Downdrop className={"hover:bg-red-400"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
