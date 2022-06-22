import React, { useState } from "react";

import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { AiOutlineAreaChart, AiOutlineBarChart } from "react-icons/ai";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        className="btn"
      >
        {barChart ? (
          <div>
            <AiOutlineAreaChart /> <span>Display Area Chart</span>
          </div>
        ) : (
          <div>
            <AiOutlineBarChart /> <span>Display Bar Chart</span>
          </div>
        )}
      </button>
      {barChart ? (
        <BarChartComponent data={monthlyApplications} />
      ) : (
        <AreaChartComponent data={monthlyApplications} />
      )}
    </Wrapper>
  );
};
export default ChartsContainer;
