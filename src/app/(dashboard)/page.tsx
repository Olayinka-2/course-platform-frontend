import React from "react";
import Header from "@/components/dashbaord/header";
import HeroSection from "@/components/dashbaord/heroSection";
import Calender from "@/components/dashbaord/calender";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Calender />
    </div>
  );
};

export default Dashboard;
