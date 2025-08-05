"use client";
import useThreshold from "@/hook/useThreshold";
import { RootState } from "@/store";
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
}

const CustomTooltip: FC<{
  active?: boolean;
  payload?: Array<{ payload: Transaction; value: number }>;
}> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload as Transaction;
    const isExpense = item.role === "expense";
    return (
      <div className="bg-white p-2 rounded shadow">
        <p className="font-semibold dark:text-black ">{item.category}</p>
        {/* <p className={`${title === "expense" ? "text-red-600" : "text-green-600"} font-semibold`}>
        Price: ${item.price.toLocaleString("en-In")}</p> */}
        <p
          className={`${
            isExpense ? "text-red-600" : "text-green-600"
          } font-semibold`}
        >
          Price: ${item.price.toLocaleString("en-In")}
        </p>
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
}: {
  title: "expense" | "income" | "alltransaction";
  OnlyFiveTransation: boolean;
  inPage?: boolean;
}) {
  const dataName = (title === "income" || title ===  "expense") && title;
  const Alldatas = useSelector((state:RootState)=> state.transactions.data);
  const allData = title ===  "alltransaction" ? Alldatas : Alldatas.filter(d => d.role === dataName);
  const {Threshold} = useThreshold();
  const filtered = allData.filter((d) => new Date(d.date) >= Threshold);
  const getData = OnlyFiveTransation ? allData.slice(0, 5) : filtered;

  return (
    <ResponsiveContainer width="100%" height="100%">
      {inPage ? (
        <AreaChart
          data={getData}
          margin={{ top: 30, right: 9, bottom: 50, left: 0 }}
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
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="price"
            stroke="none"
            fill="url(#colorPrice)"
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#8884d8"
            strokeWidth={2}
            dot={{r:3}}
          />
        </AreaChart>
      ) : (
        <BarChart
          data={getData}
          margin={{ top: 30, right: 20, bottom: 50, left: 20 }}
        >
          {!OnlyFiveTransation && (
            <XAxis
              dataKey="date"
              tickFormatter={(value) =>
                DateFormat(value as string).slice(0, -5)
              }
              interval={0}
              tick={{ fontSize: 14 }}
            />
          )}
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="price" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}
