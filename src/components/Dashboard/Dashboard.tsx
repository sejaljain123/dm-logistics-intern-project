import React from 'react';
import Header from '../Header/Header';
import Nav from '../NavigationBar/Navigation';
import CardComp from '../CardComp/CardComp';
import Project from '../Project/Project';
import Stats from '../Stats/Stats';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <Header />
      <CardComp />
      <div className="d-flex w-100">
        <Project />
        <Stats />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
