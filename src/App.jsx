import st from "./styles/App.module.scss";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <div className={st.wrapper}>
      <MainPage />
    </div>
  );
}

export default App;
