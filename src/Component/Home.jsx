import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HomeNav from "./HomeNav";
import HomeBody from "./HomeBody";
import {
  Line,
  Pie,
  Doughnut,
  Bar,
  HorizontalBar,
  Bubble,
  Scatter,
} from "react-chartjs-2";

const Home = (props) => {
  const income = useSelector((state) => state.Income.income);
  const expense = useSelector((state) => state.Expense.expense);
  const [chartData, setChartData] = useState({});
  let expenseSum = 0;
  let incomeSum = 0;
  income.map((data) => (incomeSum += data.income));
  expense.map((data) => (expenseSum += data.expense));
  const chart = () => {
    setChartData({
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: ["Amount"],
          data: [incomeSum, expenseSum],
          backgroundColor: ["rgba(48,63,159,0.5)", "rgba(197,7,98,0.5)"],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <HomeNav />
      <HomeBody incomeSum={incomeSum} expenseSum={expenseSum} />
      <div style={{ height: "25rem" }}>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
