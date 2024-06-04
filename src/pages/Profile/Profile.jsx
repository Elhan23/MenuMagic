import { Menu } from "antd";
import { FaHome } from "react-icons/fa";
import './Profile.scss'

function Profile() {
  return (
    <div className="aside_style">
      <Menu>items={[{ label: "Home", icons: <FaHome /> }, 
      { label: "My recipe" }]}</Menu>
    </div>
  );
}

export default Profile;
