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


