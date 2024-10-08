//Base
import Navbar from './Base/Navbar/Navbar'
import SidePanel from './Base/SidePanel/SidePanel'
//Pages
import Home from './Pages/Home/Home'
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
//Components
import Navlink from './Components/Navlink/Navlink';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
//API
import ApiPaths from './Api/ApiPaths';
import {getRequest, putRequest, deleteRequest, postRequest, patchRequest} from './Api/ApiResp'
//Utility
import { validateSignUpForm, initialRegisterFormState, initialLoginFormState } from './Utility/FormValidation';

const EndPoint = {
  "path":{
    "SignIn" : "/signin",
    "SignUp" : "/signup",
    "Profile" : "/profile",
    "Home" : "/home"
  },
  "base":{
    Navbar, SidePanel
  },
  "pages":{
    Home, SignIn, SignUp, Profile
  },
  "components":{
    Navlink, Button, Input
  },
  "Utility":{
    "FormValidation":{
        validateSignUpForm, initialRegisterFormState, initialLoginFormState
    }
  },
  "Api": {
    getRequest, putRequest, deleteRequest, postRequest, ApiPaths
  }
};

export default EndPoint;