import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function TbularData() {
    const data = [
        { "account": "Account1", "thisMonth": 1200, "YTD": 8000 },
        { "account": "Account2", "thisMonth": 1500, "YTD": 9500 },
        { "account": "Account3", "thisMonth": 1000, "YTD": 7000 },
        { "account": "Account4", "thisMonth": 1800, "YTD": 10500 },
        { "account": "Account5", "thisMonth": 900, "YTD": 6000 }
      ];
  return (
    <div>
      <div className="flex justify-between shadow-md py-5 px-3">
        <div>Checking Account</div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 shadow-lg p-2">
            Manage
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-2 shadow-lg p-2">
            Manage
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div>
        <table>
            <tr>
                <th className="w-[15vw] text-left">
                    Account
                </th>
                <th className="w-[15vw] text-left">
                    Account
                </th>
                <th className="w-[15vw] text-left">
                    Account
                </th>
            </tr>
            {
                data.map((d)=>{
                    return(
                        <tr>
                            <td className="w-[15vw] text-left">{d.account}</td>
                            <td className="w-[15vw] text-left">{d.thisMonth}</td>
                            <td className="w-[15vw] text-left">{d.YTD}</td>
                        </tr>
                    )
                })
            }
        </table>
      </div>
    </div>
  );
}

export default TbularData;
