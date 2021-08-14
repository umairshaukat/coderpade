import React    from "react";
import Header from'../function/Header';
import Sidebar from'../function/Sidebar';
import Home from'../function/Home';
import Footer from'../function/Footer';
function Main(props) {
return(
    <React.Fragment>
    <Header/>
    <div class="MuiBox-root jss19">
      <Sidebar/>
      <Home/>
    </div>
    <Footer/>
    </React.Fragment>
)
}
export default Main;