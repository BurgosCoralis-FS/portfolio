/*
  Copyright (C), 2023-2024, Sara Echeverria (bl33h)
  Author: Sara Echeverria
  Edited by: Cora (kiricora)
  FileName: Languages.jsx
  Version: I
  Creation: 02/06/2023
  Last modification: 04/27/2024
*/

import SectionTitle from "../Components/SectionTitle";
import LanguageCards from '../Components/LanguageCards';

const Languages = () => {
  return (
    <div id="languages" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col items-center xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="LANGUAGES" subtitle="LINGUISTIC ABILITIES" />
        </div>
        <div>
          <div className="relative">
            <div className="absolute top-[45px] w-full bg-primary-400"></div>
              <LanguageCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
