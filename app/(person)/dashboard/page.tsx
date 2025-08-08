"use client"
import { DashBoardChart } from "@/components/charts/DashBoard/dashboardChart";
import DashBoardIncomeandExpenseChart from "@/components/charts/DashBoard/dashboardincomeandExpenseChart";
import DashBoardTotal from "@/components/charts/DashBoard/dashBoardTotal";
import TransactionsData from "@/components/transactionsData";
import useRequireAuth from "@/hook/useRequireAuth";


//   { name: 'Total Balance', value: 79100,fill:'#8200DB' },
//   { name: 'Total Income', value: 86200,fill:'#FF8904'},
//   { name: 'Total Expense', value: 7100 ,fill:'#E7000B'},
export default function DashBoard() {
  useRequireAuth();
  return (
    <div className="flex-1 p-3 py-8 sm:p-8 space-y-7">
      <DashBoardTotal/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        
        <TransactionsData title="Recent Transactions" OnlyFiveTransation={true} isIncomePage={false}/>
        <div className="styleLink rounded-lg p-3 h-[30rem]">
          <h3 className="text-lg font-semibold">Financial Overview</h3>
          <DashBoardChart/>
        </div>

        <TransactionsData title="expense" OnlyFiveTransation={true} isIncomePage={false}/>
        <div className="styleLink rounded-lg p-3 h-[30rem]">
           <h3 className="text-lg font-semibold">Last 30 Days Expenses</h3>
           <DashBoardIncomeandExpenseChart title="expense" OnlyFiveTransation={true}/>
        </div>
        
        <TransactionsData title="income" OnlyFiveTransation={true} isIncomePage={false}/>
        <div className="styleLink rounded-lg p-3 h-[30rem]">
           <h3 className="text-lg font-semibold">Last 60 Days Incomes</h3>
           <DashBoardIncomeandExpenseChart title="income" OnlyFiveTransation={true}/>
        </div>
      </div>
    </div>
  );
}
