import React from "react";
import AddWord from "../AddWord/AddWord";
import Table from "../Table/Table";
import st from "./MainPage.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

export default function MainPage() {
  return (
    <div className={st.mainPageBox}>
      <Header />
      <>
        <AddWord />
        <Table />
        <Card word='apple' transcription='apl' translation={"яблоко"} />
      </>
      <Footer />
    </div>
  );
}
