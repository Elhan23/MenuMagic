import React, { useState } from "react";
import "./TabComponent.scss";
import money from "../../assets/images/money.png";
import progress from "../../assets/images/progress.png";

function TabComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      tabTitle: "Sell",
      content: (
        <div className="recipe_flex">
          <div className="text_style">
            <div>
              <h2>
                Sell ​​your recipes and dishes <br /> and get great reviews from
                users
              </h2>
            </div>

            <div>
              <p>
                get more orders and attract users <br /> and improve trading and
                upgrade your profile
                <br /> Your taste fantasies, your choice: from gourmet to chef!
              </p>
            </div>
          </div>
          <div>
            <img src={money} alt="money" />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      tabTitle: "follow the progress",
      content: (
        <div className="progress_style">
          <div className="progress_img">
            <img src={progress} alt="progress" />
          </div>

           <div>
              dwethy
           </div>
        </div>
      ),
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      content: <div>
        RTYJUKYHTGRFDS
      </div>,
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs_block">
      <div className="tabs_background">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => handleTabClick(tab.id)} // Передаем id в обработчик щелчка
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
      </div>

      <div className="content">
        {tabs.map((tab) => (
          <div key={tab.id}>
            {activeTab === tab.id && (
              <div>
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabComponent;
