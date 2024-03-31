import AddWord from "./AddWord/AddWord";
import Table from "./Table/Table";
import style from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <div className={style.mainPageBox}>
      <AddWord />
      <Table />
    </div>
  );
}

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import AddWord from "../AddWord/AddWord";
// import Table from "../Table/Table";
// import Card from "../Card/Card";
// import Slider from "../Slider/Slider";
// import st from "./MainPage.module.scss";
// import data from "./../../data";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default function MainPage() {
//   return (
//     <div className={st.mainPageBox}>
//       <Header />
//       <>
//         <AddWord />
//         <Table />
//         {/* <Card word='apple' transcription='apl' translation={"яблоко"} />  */}
//         <Slider data={data} />
//       </>
//       <Footer />
//     </div>
//   );
// }
