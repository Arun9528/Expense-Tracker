import DashBoardIncomeandExpenseChart from "@/components/charts/DashBoard/dashboardincomeandExpenseChart";
import ModalShow from "@/components/modalShow";
import TransactionsData from "@/components/transactionsData";
export default function Income(){
    return (
        <div className=" flex-1 w-full p-3 py-8 sm:p-8">
            <div className="relative h-96 sm:h-[30rem] styleLink rounded-lg p-3 sm:p-5 mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-bold text-lg sm:text-2xl">Income Overview</h1>
                        <p className="text-gray-500 text-[13px]  sm:text-[16px]">Track your earnings over time and analyze your income trends.</p>
                    </div>
                    <ModalShow title="Income"/>
                </div>
                <DashBoardIncomeandExpenseChart title="income" OnlyFiveTransation={false}/>
            </div>
            <TransactionsData title="income" OnlyFiveTransation={false} isIncomePage={true}/>
        </div>
    )
}