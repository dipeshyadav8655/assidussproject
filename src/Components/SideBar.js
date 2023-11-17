import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdContacts } from "react-icons/md";

function SideBar() {
    const change = false;
  return (
    <div className="h-[89vh] w-fit py-5 px-10 border-r-2">
      <ul>
        <li className="{change ? bg-red-400 flex items-center gap-2 cursor-pointer : flex items-center gap-2 cursor-pointer}">
          <MdDashboard />
          <p>Dashboard</p>
        </li>

        <li className="flex items-center gap-2 cursor-pointer">
          <MdAccountBalanceWallet />
          <p>Account</p>
        </li>

        <li className="flex items-center gap-2 cursor-pointer">
          <TbCurrencyDollar />
          <p>Payroll</p>
        </li>

        <li className="flex items-center gap-2 cursor-pointer">
          <FaFileAlt />
          <p>Report</p>
        </li>

        <li className="flex items-center gap-2 cursor-pointer">
          <IoPerson />
          <p>Advisor</p>
        </li>

        <li className="flex items-center gap-2 cursor-pointer">
          <MdContacts />
          <p>Contacts</p>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
