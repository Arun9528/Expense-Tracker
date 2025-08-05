import DashBoardIncomeandExpenseChart from "@/components/charts/DashBoard/dashboardincomeandExpenseChart";
import ModalShow from "@/components/modalShow";
import TransactionsData from "@/components/transactionsData";
export default function Income(){
    return (
        <div className=" flex-1 w-full p-8">
            <div className="relative h-96 styleLink rounded-lg p-5 mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-bold text-2xl">Income Overview</h1>
                        <p className="text-gray-500">Track your earnings over time and analyze your income trends.</p>
                    </div>
                    <ModalShow title="Income"/>
                </div>
                <DashBoardIncomeandExpenseChart title="income" OnlyFiveTransation={false}/>
            </div>
            <TransactionsData title="income" OnlyFiveTransation={false} isIncomePage={true}/>
        </div>
    )
}