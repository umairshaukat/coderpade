import React    from "react";
function Hidediv(props) {
    return (<div className="MuiPopover-root" id="header-action-menu">
    <div aria-hidden="true" style={{zIndex:"-1", position: "fixed", inset:"0px", backgroundColor: "transparent", webkitTapHighlightColor: "transparent"}}>
    </div>
    <div className="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded" style={{}}>
    <ul className="MuiList-root MuiMenu-list" role="menu" tabindex="-1" style={{paddingRight:"17px", width:"calc(100% + 17px)"}}>
    <a className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss108 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button MuiTypography-colorPrimary" tabindex="-1" role="menuitem" aria-disabled="false" href="#">Usage<span className="MuiTouchRipple-root"></span></a>
   <a className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss108 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button MuiTypography-colorPrimary" tabindex="-1" role="menuitem" aria-disabled="false" href="#">Integrations<span className="MuiTouchRipple-root"></span></a>
  <a className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss108 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button MuiTypography-colorPrimary" tabindex="-1" role="menuitem" aria-disabled="false" href="#">Billing<span className="MuiTouchRipple-root"></span></a>
  <a className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss108 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="menuitem" aria-disabled="false" href="">Team Settings<span className="MuiTouchRipple-root"></span></a>
  <li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss108 jss13 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="menuitem" aria-disabled="false">Upgrade<span className="MuiTouchRipple-root"></span></li>
  <hr/>
<a className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss108 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="menuitem" aria-disabled="false" href="">My Settings<span className="MuiTouchRipple-root"></span></a>
<form action="/logout" method="post">
<li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss108 jss9 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="menuitem" aria-disabled="false">
<button className="MuiButtonBase-root MuiButton-root jss10 MuiButton-text MuiButton-fullWidth" tabindex="0" type="submit">
<span className="MuiButton-label">Logout</span>
<span className="MuiTouchRipple-root"></span></button>
<span className="MuiTouchRipple-root"></span></li>
</form>
</ul>
</div></div>)
}
export default Hidediv;