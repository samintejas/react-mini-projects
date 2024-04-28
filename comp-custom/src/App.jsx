import LeftSlide from "./Banner/LeftSlide";
import Button from "./UI/Button";
import Stamp from "./UI/Stamp";

function App() {
    
    const createAccountButton = <Button text="Create an Account" />;
    const stamp = <Stamp brandName = "StreetFuse"></Stamp>;
  
    return (
      <LeftSlide
        brandLabel={stamp}
        quote="No StreetFuse Account ?"
        description="An account lets you save your preferences, track your orders and give you personalized recommendations"
        button={createAccountButton}
      />
    );
  }

export default App
