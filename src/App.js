import Profile from "./Profile/Profile";
import ProfileImg from "./Assets/ProfileImg.webp"
function App({handleName}) {
  return (
    <>
      {/* The profile component gets data (fullName, bio, profession) as props */}
      <Profile 
        fullName="Celia Almeda" 
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit." 
        profession="FullStack Web Developper" 

        /*gets the function handleName functions as a prop that sends an alert message with the name of the profile user. */
        onMouseOver={handleName}
      >
        {/*gets image as children props*/}
        {ProfileImg}
      </Profile>
    </>
  );
}

export default App;
