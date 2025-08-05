
import DashBoardIncomeandExpenseChart from "@/components/charts/DashBoard/dashboardincomeandExpenseChart"
import TransactionsData from "@/components/transactionsData"
import Link from "next/link"

export default function AllTransaction(){
     return (
            <div className=" flex-1 w-full p-8">
             <Link href={"/dashboard"} className="py-2 bg-teal-500 text-white px-5 rounded-lg">Back</Link>
              <div className="relative h-96 styleLink rounded-lg p-5 mb-8 mt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-bold text-2xl">All Transaction Overview</h1>
                    <p className="text-gray-500">
                      Track your income and expense over time and gain insights into where your money goes.
                    </p>
                  </div>
                </div>
        
                <DashBoardIncomeandExpenseChart
                  title="alltransaction"
                  OnlyFiveTransation={false}
                  inPage={true}
                />
              </div>
              <TransactionsData
                title="alltransaction"
                OnlyFiveTransation={false}
                isIncomePage={true}
              />
            </div>
     )
}