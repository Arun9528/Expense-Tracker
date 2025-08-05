"use client";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function DashBoardChart() {
  const allData = useSelector((state: RootState) => state.transactions.data);
  const getExpense = allData.filter(d => d.role === "expense");
  const getIncome = allData.filter(d => d.role === "income")
  const getIncomeTotal = getIncome.reduce((acc, curr) => acc + curr.price, 0)
  const getExpenseTotal = getExpense.reduce((acc, curr) => acc + curr.price, 0)
  const getTotal = getIncomeTotal - getExpenseTotal
  const datas = [
    { name: "Total Balance", value: getTotal},
    { name: "Total Income", value: getIncomeTotal },
    { name: "Total Expense", value: getExpenseTotal},
  ];
  const COLORS = ["#8200DB", "#FF8904", "#E7000B"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={datas}
          cx="50%"
          cy="50%"
          innerRadius={110}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          stroke="none"
          strokeWidth={0}
        >
          {datas.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
              strokeWidth={0}
            />
          ))}
        </Pie>
        <text
          x="50%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="central"
          style={{ fontSize: 16, fill: "#666" }}
        >
          Total Balance
        </text>
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="central"
          style={{ fontSize: 20, fontWeight: "bold", fill: "#333" }}
        >
          {`$${Number(getTotal.toFixed(2)).toLocaleString("en-In")}`}
        </text>
        <Tooltip formatter={(value)=> (value as number).toLocaleString("en-In")} />
        <Legend
          formatter={(value) => {
            const entry = datas.find((d) => d.name === value);
            return `${value}: $${(entry?.value.toFixed(2) || 0).toLocaleString("en-In")}`;
          }}
          layout="horizontal"
          verticalAlign="top"
          align="center"
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ marginTop: 15 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
