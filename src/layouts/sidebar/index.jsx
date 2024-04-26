import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiFillAlert, AiOutlineAppstore } from "react-icons/ai";
import { BsCCircle, BsCalendarPlusFill, BsCheckCircleFill, BsCurrencyExchange, BsExclamation, BsExclamationCircle, BsFillPersonFill, BsFillPersonLinesFill, BsPaypal, BsPerson, BsPlayBtn } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { Md10Mp, MdFace, MdFace2, MdFace3, MdFace4, MdFace5, MdFace6, MdFormatListNumberedRtl, MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };

  const subMenusList = [
    {
      name: "Student",
      icon: BsFillPersonFill,
      menus: ["List", "Uploading Photo", "Visiting List"],
    },
    {
      name: "Attendance",
      icon: BsCheckCircleFill,
      menus: ["List", "Individual  Attendance"],
    },
    {
      name: "Setting",
      icon: SlSettings,
      menus: ["Batch", "Group", "Institution", "Subject", "Course"],
    },
    {
      name: "Teachers",
      icon: BsFillPersonLinesFill,
      menus: ["List", "Teacher Schedule"],
    },
    {
      name: "Schedule",
      icon: BsCalendarPlusFill,
      menus: ["Manage", "Weekly Schedule ", "Daily Schedule", " Schedule Generator", "Edit Schedule"],
    },
    {
      name: "Exam",
      icon: BsExclamationCircle,
      menus: ["Exam List", "Merit List ", " Individual Mark"],
    },
    {
      name: "Payment",
      icon: BsPaypal,
      menus: ["Make Payment", "Student Payment", "Teacher Payment"],
    },
    {
      name: "Transaction",
      icon: BsCurrencyExchange,
      menus: ["Add Transaction", "Bill List", "Biller", "Transaction List", "Salary", "Balance"],
    },
    {
      name: "Billing",
      icon: RiBuilding3Line,
      menus: ["My InVoice"],
    },
    {
      name: "SMS",
      icon: RiBuilding3Line,
      menus: ["Send SMS", "SMS Report", "Recharge"],
    },

  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3  mx-3">
          {/* <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          /> */}
          <span className={`text-xl ${open && 'hidden'} whitespace-pre bg-slate-800 p-2 rounded-full font-bold`}><span className="text-red-600 rotate-180">B</span> <span className="text-yellow-300">C</span></span>
          <span className="text-xl whitespace-pre bg-slate-800 p-2 rounded-2xl"><span className="text-red-500">BT</span> <span className="text-yellow-300">Coaching</span></span>
        </div>

        <div className="flex flex-col h-full bg-slate-300">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%] ">
            <li >
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Home
              </NavLink>
            </li>
            {(open || isTabletMid) && (
              <div className="border-y  border-slate-300 ">
                <small className="pl-3 text-slate-500 inline-block mb-2 font-bold">

                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to={"/authentication"} className="link">
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </NavLink>
            </li>

            <li>
              <NavLink to={"/stroage"} className="link">
                <HiOutlineDatabase size={23} className="min-w-max" />
                Stroage
              </NavLink>
            </li>


            <li>
              <NavLink to={"/settings"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
          {/* {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )} */}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                x: 0,
                y: 0,
                rotate: 0,
              }
              : {
                x: -10,
                y: -200,
                rotate: 180,
              }
          }
          transition={{ duration: 1 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;


