import "./Main.scss";
import SectionConponent from "../SectionComponent/SectionComponent";
import ProgressComponents from "../ProgressComponents/ProgressComponents";
import PartnerComponent from "../PartnerComponent/PartnerComponent";
import DileveryComponent from "../DileveryComponent/DileveryComponent";
import RecipeComponents from "../RecipeComponents/RecipeComponents";

function Main() {
  return (
    <main>
      <div className="background_section">
        <SectionConponent />
        <div className="progress_component_style">
          <ProgressComponents />
        </div>
        <hr />
        <PartnerComponent />
        <RecipeComponents />
      </div>
    </main>
  );
}

export default Main;
