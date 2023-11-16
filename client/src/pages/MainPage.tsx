import Field from "../components/Field";
import Output from "../components/Output";
import Settings from "../components/Settings";

const MainPage = () => {
  return (
    <section>
      <div>
        <Settings></Settings>
      </div>
      <div>
        <Field></Field>
      </div>
      <div>
        <Output></Output>
      </div>
    </section>
  );
};

export default MainPage;
