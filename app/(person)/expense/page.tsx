import DashBoardIncomeandExpenseChart from "@/components/charts/DashBoard/dashboardincomeandExpenseChart";
import ModalShow from "@/components/modalShow";
import TransactionsData from "@/components/transactionsData";

export default function Expense() {

  return (
    <div className=" flex-1 w-full p-8">
      <div className="relative h-96 styleLink rounded-lg p-5 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Expense Overview</h1>
            <p className="text-gray-500">
              Track your spending trends over time and gain insights into where your money goes.
            </p>
          </div>
          <ModalShow title="Expense"/>
        </div>

        <DashBoardIncomeandExpenseChart
          title="expense"
          OnlyFiveTransation={false}
          inPage={true}
        />
      </div>
      <TransactionsData
        title="expense"
        OnlyFiveTransation={false}
        isIncomePage={true}
      />
    </div>
  );
}
