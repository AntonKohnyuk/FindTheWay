import Field from "../components/Field";
import Output from "../components/Output";
import Settings from "../components/Settings";
import "./styles/mainPage.scss";

const MainPage = () => {
  return (
    <section className="main">
      <Settings></Settings>
      <Field></Field>
      <Output></Output>
    </section>
  );
};

export default MainPage;
