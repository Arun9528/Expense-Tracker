"use client";
import useThreshold from "@/hook/useThreshold";
import { RootState } from "@/store";
import { TransactionsProps } from "@/Transactions";
import DateFormat from "@/utils/dateFormat";
import { FC } from "react";
import { useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface Transaction {
  category: string;
  price: number;
  role: "income" | "expense";
  date:string;
}
interface AggregateDataProps{
  date: string;
  income: number;
  expense: number;
  transactions: Transaction[];
}
interface DashBoardIncomeandExpenseChart{
   title: "expense" | "income" | "alltransaction";
   OnlyFiveTransation: boolean;
   inPage?: boolean;
}
interface PayloadItem {
  dataKey: "income" | "expense";
  payload: AggregateDataProps;
}
interface CustomTooltipProps {
  active?: boolean;
  payload?: PayloadItem[];
  label?: string;
}


const CustomTooltip: FC<CustomTooltipProps & {chartTitle:DashBoardIncomeandExpenseChart["title"]}> = ({ active, payload,chartTitle}) => {
  if (active && payload && payload.length) {
    // const item = payload[0].payload as Transaction;
    // const isExpense = item.role === "expense";
    // const bar = payload[0];
    // const item = bar.payload;
    // const dataKey = bar.dataKey;
    // const total = item[dataKey];
    // const transactions = item.transactions.filter((t) => t.role === dataKey);
    // const roleLabel = dataKey?.charAt(0)?.toUpperCase() + dataKey?.slice(1);
    const item = payload[0].payload as AggregateDataProps;
    return (
      // <div className="bg-white p-2 rounded shadow">
      //   <p className="font-semibold dark:text-black ">Total {roleLabel}: ${total.toLocaleString("en-IN")}</p>
      //   {/* <p className={`${title === "expense" ? "text-red-600" : "text-green-600"} font-semibold`}>
      //   Price: ${item.price.toLocaleString("en-In")}</p> */}
      //   {/* <p
      //     className={`${
      //       isExpense ? "text-red-600" : "text-green-600"
      //     } font-semibold`}
      //   >
      //     Price: ${item?.price?.toLocaleString("en-In")}
      //   </p> */}
      //   {transactions.map((transaction, index) => (
      //     <p
      //       key={index}
      //       className={`font-semibold ${
      //         transaction.role === "expense" ? "text-red-600" : "text-green-600"
      //       }`}
      //     >
      //       {transaction.category}: ${transaction.price.toLocaleString("en-IN")}
      //     </p>
      //   ))}
      // </div>
      <div className="bg-white p-2 rounded shadow">
        <p className="font-semibold dark:text-black">
          Date: {DateFormat(item.date)}
        </p>
        {chartTitle === "alltransaction" && (
          <>
            <p className="text-green-600 font-semibold">
              Total Income: ${item.income.toLocaleString("en-IN")}
            </p>
            <p className="text-red-600 font-semibold">
              Total Expense: ${item.expense.toLocaleString("en-IN")}
            </p>
          </>
        )}
       {
        chartTitle === "income"  && (
           <p className="text-green-600 font-semibold">
          Total Income: ${item.income.toLocaleString("en-IN")}
        </p>
        )
       }
      {
        chartTitle === "expense" && (
          <p className="text-red-600 font-semibold">
          Total Expense: ${item.expense.toLocaleString("en-IN")}
        </p>
        )
      }
         <p className="font-semibold">Transactions:</p>
        {item.transactions.map((transaction, index) => (
          <p
            key={index}
            className={`font-semibold ${
              transaction.role === "expense" 
                ? "text-red-600" 
                : "text-green-600"
            }`}
          >
            {transaction.category}: ${transaction.price.toLocaleString("en-IN")}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
// const CustomDot: FC<{
//   cx?: number;
//   cy?: number;
//   payload?: Transaction & { date: string; role: "income" | "expense" };
// }> = ({ cx, cy, payload }) => {
//   if (cx === undefined || cy === undefined || !payload) return null;
//   const fill = payload.role === "expense" ? "#dc2626" : "#16a34a";  // red-600 or green-600
//   return <circle cx={cx} cy={cy} r={4} fill={fill} />;
// };
export default function DashBoardIncomeandExpenseChart({
  title,
  OnlyFiveTransation,
  inPage,
}:DashBoardIncomeandExpenseChart) {
  const dataName = (title === "income" || title ===  "expense") && title;
  const Alldatas:TransactionsProps[] = useSelector((state:RootState)=> state.transactions.data);
  const allData = title ===  "alltransaction" ? Alldatas : Alldatas.filter(d => d.role === dataName);
  const {Threshold} = useThreshold();
  const filtered = allData.filter((d) => new Date(d.date) >= Threshold);
  const getData = OnlyFiveTransation ? allData.slice(0, 5) : filtered;

  const aggregateData = (transactions:TransactionsProps[]):AggregateDataProps[]=>{
    const grouped = transactions.reduce((acc:Record<string,AggregateDataProps>,curr:TransactionsProps)=> {
      const date  = curr.date;
      if(!acc[date]){
        acc[date] = { date, income: 0, expense: 0, transactions: [] };
      }
      if(curr.role === "income"){
        acc[date].income += curr.price;
      }else if(curr.role === "expense"){
        acc[date].expense += curr.price;
      }
      acc[date].transactions.push(curr);
      return acc
    },{} as Record<string,AggregateDataProps>);
    return Object.values(grouped);
  }
  const chartData:AggregateDataProps[] = aggregateData(getData)
  return (
    <ResponsiveContainer width="100%" height="100%">
      {inPage ? (
        <AreaChart
          data={chartData}
          margin={{ top: 15, right: 5, bottom: 60, left: -25 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#8884d8" stopOpacity={1} />
              <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            type="category"
            tickFormatter={(value) => DateFormat(value as string).slice(0, -5)}
            tick={{ fontSize: 12 }}
          />
          <YAxis tick={{fontSize:14}}/>
          <Tooltip content={<CustomTooltip chartTitle={title} />} />
          {/* <Area
            type="monotone"
            dataKey="price"
            stroke="none"
            fill="url(#colorPrice)"
            connectNulls
          /> */}
          {/* {title === "income" && (
            <Area
              type="monotone"
              dataKey="income"
              stroke="#16a34a"
              fill="#16a34a"
              fillOpacity={0.3}
              connectNulls
            />
          )} */}
          {title === "expense" && (
            <>
            <Area
              type="monotone"
              dataKey="expense"
              stroke="none"
              fill="url(#colorPrice)"
              // fillOpacity={0.3}
              connectNulls
            />
             <Line
            type="monotone"
            dataKey="expense"
            stroke="#8884d8"
            fill="#8884d8"
            strokeWidth={2}
            dot={{r:3}}
          />
          </>
          )}
          {/* <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#8884d8"
            strokeWidth={2}
            dot={{r:3}}
          /> */}
          {title === "alltransaction" && (
            <>
              <Area
                type="monotone"
                dataKey="income"
                stroke="#16a34a"
                fill="#16a34a"
                fillOpacity={0.3}
                connectNulls
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#dc2626"
                fill="#dc2626"
                fillOpacity={0.3}
                connectNulls
              />
            </>
          )}
        </AreaChart>
      ) : (
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 0, bottom: 60, left: -20 }}
        >
          {!OnlyFiveTransation && (
            <XAxis
              dataKey="date"
              tickFormatter={(value) =>
                DateFormat(value as string).slice(0, -5)
              }
              interval={0}
              tick={{ fontSize: 12 }}
            />
          )}
          <YAxis tick={{fontSize:14}} />
          <Tooltip content={<CustomTooltip chartTitle={title} />} />
          {/* <Bar dataKey="price" fill="#8884d8" radius={[10, 10, 0, 0]} /> */}
          {title === "income" && (
            <Bar dataKey="income" fill="#8884d8" radius={[10, 10, 0, 0]} />
          )}
          {title === "expense" && (
            <Bar dataKey="expense" fill="#8884d8" radius={[10, 10, 0, 0]} />
          )}
          {/* {title === "alltransaction" && (
            <>
              <Bar dataKey="income" fill="#16a34a" radius={[10, 10, 0, 0]} />
              <Bar dataKey="expense" fill="#dc2626" radius={[10, 10, 0, 0]} />
            </>
          )} */}
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}
