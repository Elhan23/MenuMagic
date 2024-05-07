import TabComponent from "../TabComponent/TabComponent";
import "./Main.scss";

function Main() {
  return (
    <main>
      <div className="work_block">
        <div className="find_class">
          <h2>Find the best solution for yourself</h2>
        </div>
        <hr />
        <TabComponent/>
      </div>
    </main>
  );
}

export default Main;
