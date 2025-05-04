import { useState } from "react";
import Container from "../layout/Container";
import SizeButton from "./SizeButton";
import ageGroups from "../common/Group";
import ShopByAgeCard from "./ShopByAgeCard";
import RewardsInvite from "./RewardsInvite"

const MainSection = () => {
  const [selectedLabel, setSelectedLabel] = useState("0-3M");
  const selectedContent = ageGroups.find((item) => item.title === selectedLabel);

  console.log("age groups", ageGroups)


  return (
    <div>
      <Container className="py-8 px-0 lg:px-0 mt-12">
        
        <h1 className="mb-10 text-center font-medium text-xl">Shop by age</h1>
        
        
      {selectedContent && (
          <ShopByAgeCard
            image={selectedContent.image}
            title={selectedContent.title}
            subtitle={selectedContent.subtitle}
            description={selectedContent.description}
            link={selectedContent.link}
          />
        )}

        <div className="flex gap-4 mt-16 flex-wrap justify-center">
          {ageGroups.map((item) => (
            <SizeButton
              key={item.title}
              title={item.title}
              isSelected={selectedLabel === item.title}
              onClick={() => setSelectedLabel(item.title)}
            />
          ))}
        </div>
         <div>
            <RewardsInvite/>
         </div>

      
      </Container>
    </div>
  );
};

export default MainSection;
