/** @format */

import React, { useState } from "react";
// import Tabdata from "./tabdata";

function PageNavigationTabs({ tabs }) {
  const [active, setactive] = useState(0);
  return (
    <>
      <nav class="dynamic_nav">
        <div class="nav  nav-fill " id="nav-tab" role="tablist">
          {tabs &&
            tabs.map((data, index) => (
              <>
                <a
                  id={`${index}`}
                  active={active === +index}
                  data-toggle="tab"
                  href={`#${data.title}`}
                  role="tab"
                  aria-controls={`#${data.title}`}
                  aria-selected="false"
                  onClick={() => setactive(index)}>
                  {data.title}
                </a>
              </>
            ))}
        </div>
      </nav>
      <div class="tab-content">{tabs && tabs[active].render()}</div>
    </>
  );
}

export default PageNavigationTabs;
