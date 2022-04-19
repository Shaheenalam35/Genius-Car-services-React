import React from "react";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </>
  );
};

export default Home;
