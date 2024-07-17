import "../startup-ksd/StartUpKSD.css";
import AsideKsd from "./ksd-aside-bar/AsideKSD";
import BackdropKsd from "./ksd-aside-bar/BackdropKSD";

const StartUpDocKSD = ({open}) => {
  const handleClick = () => {
    // Define what happens when the hamburger menu is clicked
    console.log("Hamburger menu clicked");
  };
  return (
    <div>
      <h1>KSD Docs</h1>
      <AsideKsd open={open}></AsideKsd>
      <BackdropKsd click={handleClick} open={open}></BackdropKsd>
    </div>
  );
}

export default StartUpDocKSD;