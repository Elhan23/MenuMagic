import "./Main.scss";
import SectionConponent from "../SectionComponent/SectionComponent";
import ProgressComponents from "../ProgressComponents/ProgressComponents";
import PartnerComponent from "../PartnerComponent/PartnerComponent";
import DileveryComponent from "../DileveryComponent/DileveryComponent";
import RecipeComponents from "../RecipeComponents/RecipeComponents";
import ContactSection from "../ContactSection/ContactSection";

function Main() {
  return (
    <div>
      <SectionConponent />
      <div className="progress_component_style">
        <ProgressComponents />
      </div>
      <div className="hr_style"></div>
      <RecipeComponents />
      <DileveryComponent />
      <ContactSection />
    </div>
  );
}

export default Main;
