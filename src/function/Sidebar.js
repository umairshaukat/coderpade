import React, {useState}     from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
function Sidebar(props) {
const[slidehideshow, setSlide]=useState(true)
const showSlide=()=>{
    return slidehideshow ? { width: '275px'}:{ width: '65px',overflowX: 'hidden', }
}
const demohide=()=>{
    return slidehideshow ? {}:{ display: 'none'}
}

const desktopdemohide=()=>{
    return slidehideshow ? { display: 'none'}:{}
}
const showslideClicked=()=>{
    setSlide(!slidehideshow)
}


const mobileclicked=()=>{
    setSlide(true);
}
let questionbank="/questionbank";
let home="/home";
let Files='/files';
let Database='/database';
let Member='/member';
    return (
<div className="MuiBox-root jss21 jss20" >
    <div className="MuiBox-root jss22">
        <div className="MuiDrawer-root MuiDrawer-docked jss25 jss27" style={showSlide()}>
            <div className="MuiPaper-root MuiDrawer-paper jss25 jss27 MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft MuiPaper-elevation0">
                <div className="MuiCollapse-container MuiCollapse-hidden" style={{minHeight: "0px"}}>
                    <div className="MuiCollapse-wrapper">
                        <div className="MuiCollapse-wrapperInner">
                            <div className="MuiBox-root jss29"><svg className="MuiSvgIcon-root jss26" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z">
                                    </path>
                                </svg></div>
                        </div>
                    </div>
                </div>
                <nav className="MuiList-root MuiList-padding" data-testid="sidenav">
                    <div className="MuiBox-root jss30" onClick={()=>{showslideClicked()}} ><svg className="MuiSvgIcon-root jss26" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{opacity: "1", transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}}>
                            <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z">
                            </path>
                        </svg></div>
                    <div className="MuiCollapse-container MuiCollapse-entered" style={{minHeight: "0px"}}>
                        <div className="MuiCollapse-wrapper">
                            <div className="MuiCollapse-wrapperInner">
                                <li className="MuiListSubheader-root jss23 MuiListSubheader-gutters" style={demohide()}>
                                    <div className="MuiTypography-root jss24 MuiTypography-h3 MuiTypography-colorTextPrimary" >
                                        Demo Company</div>
                                </li>
                            </div>
                        </div>
                    </div>
                    <a aria-current="page" onClick={()=>{mobileclicked()}} className="MuiListItem-root jss31 MuiListItem-gutters" color="initial"  style={desktopdemohide()}>
                        <div className="MuiListItemIcon-root jss34" style={desktopdemohide()}><svg class="MuiSvgIcon-root jss26 flip" style={{transform: "scaleX(-1)"}} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"></path></svg>
                        </div>
                    </a>
                  
              <Link to={home}>  
                <a aria-current="page" className="MuiListItem-root jss31 MuiListItem-gutters active" color="initial">
                        <div className="MuiListItemIcon-root jss34"><svg width="29" height="23" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.6 21V3C.6 1.68 1.68.6 3 .6h24c1.32 0 2.4 1.08 2.4 2.4v18c0 1.32-1.08 2.4-2.4 2.4H3C1.68 23.4.6 22.32.6 21z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.12 6.68l1.56-1.56c.43-.43 1.13-.43 1.56 0l1.56 1.56 8.26 8.26-3.12 3.12L9.68 9.8 8.12 8.24c-.43-.43-.43-1.13 0-1.56z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.2 19.2l-4.26-1.14 3.12-3.12 1.14 4.26z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <div className="MuiListItemText-root jss32"><span className="MuiTypography-root MuiListItemText-primary jss33 MuiTypography-body1 MuiTypography-displayBlock">Pads
                                List</span></div>
                    </a>
                   </Link> 
                    <Link to={questionbank}>
                <a className="MuiListItem-root jss31 MuiListItem-gutters" color="initial" >
                        <div className="MuiListItemIcon-root jss34"><svg width="30" height="26" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.8.6c-.66 0-1.2.54-1.2 1.2V3h16.8V1.8c0-.66-.54-1.2-1.2-1.2H7.8zM24.6 4.2c0-.66-.54-1.2-1.2-1.2H6.6c-.66 0-1.2.54-1.2 1.2v13.2h19.2V4.2zM.6 17.4h4.8v-4.8L.6 17.4zM24.6 12.6v4.8h4.8l-4.8-4.8zM29.4 17.4H.6V27h28.8v-9.6z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.283 9.205l.006-.01.007-.008a1.91 1.91 0 00.324-1.068c0-.444-.109-.879-.418-1.204-.31-.326-.727-.456-1.182-.456-.442 0-.849.133-1.166.42a1.392 1.392 0 00-.406.65h-.456c.083-.328.248-.585.486-.793.36-.314.864-.497 1.542-.497.72 0 1.211.18 1.529.476.322.3.51.728.51 1.334 0 .48-.217 1.001-.764 1.567l-.734.715-.015.015-.014.016c-.267.308-.423.698-.492 1.137h-.351c.028-.232.075-.417.134-.562.092-.226.295-.509.666-.87.395-.385.659-.678.794-.862zm-1.169 4.445l.006.007.006.006c.045.044.074.101.074.206 0 .098-.025.148-.074.197-.033.032-.092.073-.256.073-.177 0-.231-.046-.245-.06-.042-.046-.065-.088-.065-.2 0-.112.028-.168.067-.21.05-.043.123-.08.253-.08.17 0 .217.043.234.061z" stroke="#353C4E"></path>
                            </svg></div>
                        <div className="MuiListItemText-root jss32"><span className="MuiTypography-root MuiListItemText-primary jss33 MuiTypography-body1 MuiTypography-displayBlock">Question
                                Bank</span></div>
                    </a>
                    </Link>
                   
                    <Link to={Files}> 
                    <a className="MuiListItem-root jss31 MuiListItem-gutters" color="initial">
                        <div className="MuiListItemIcon-root jss34"><svg width="24" height="32" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4.6v6h6l-6-6zM17.26 20.84l-4.2-4.2c-.07-.07-.15-.13-.23-.19-.03-.02-.07-.04-.11-.06-.05-.03-.1-.06-.15-.08-.05-.02-.1-.03-.15-.05-.04-.01-.09-.03-.13-.04-.19-.04-.39-.04-.59 0-.05.01-.09.03-.13.04-.05.01-.1.03-.15.05-.05.02-.1.05-.15.08-.04.02-.07.04-.11.06-.08.06-.16.12-.23.19l-4.2 4.2a1.49 1.49 0 000 2.12c.59.59 1.54.59 2.12 0l1.64-1.64v8.98c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-8.98l1.64 1.64c.29.29.68.44 1.06.44s.77-.15 1.06-.44c.6-.59.6-1.53.01-2.12z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.4 6.6v-6H3C1.67.6.6 1.67.6 3v24c0 1.33 1.07 2.4 2.4 2.4h7.5v-8.08l-1.64 1.64c-.59.59-1.54.59-2.12 0a1.49 1.49 0 010-2.12l4.2-4.2c.07-.07.15-.13.23-.19.03-.02.07-.04.11-.06.05-.03.1-.06.15-.08.05-.02.1-.03.15-.05.04-.01.09-.03.13-.04.19-.04.39-.04.59 0 .05.01.09.03.13.04.05.01.1.03.15.05.05.02.1.05.15.08.04.02.07.04.11.06.08.06.16.12.23.19l4.2 4.2c.59.59.59 1.54 0 2.12-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44l-1.64-1.64v8.08H21c1.33 0 2.4-1.07 2.4-2.4V6.6h-6z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.14 13.21H6.86v-.02h10.28v.02zM17.14 9.61h-3.08v-.02h3.08v.02z" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11.06 6h-4.2v3.6h4.2V6z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <div className="MuiListItemText-root jss32"><span className="MuiTypography-root MuiListItemText-primary jss33 MuiTypography-body1 MuiTypography-displayBlock">Files</span>
                        </div>
                    </a>
                    
                    </Link>
                    <Link to={Database}>
                    <a className="MuiListItem-root jss31 MuiListItem-gutters" color="initial">
                        <div className="MuiListItemIcon-root jss34"><svg width="23" height="28" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4 22.2C5.44 22.2.6 19.78.6 16.8v5.4c0 2.98 4.84 5.4 10.8 5.4 5.96 0 10.8-2.42 10.8-5.4v-5.4c0 2.98-4.84 5.4-10.8 5.4z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11.4 16.8C5.44 16.8.6 14.38.6 11.4v5.4c0 2.98 4.84 5.4 10.8 5.4 5.96 0 10.8-2.42 10.8-5.4v-5.4c0 2.98-4.84 5.4-10.8 5.4z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11.4 11.4C5.44 11.4.6 8.98.6 6v5.4c0 2.98 4.84 5.4 10.8 5.4 5.96 0 10.8-2.42 10.8-5.4V6c0 2.98-4.84 5.4-10.8 5.4z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11.4 11.4c5.965 0 10.8-2.418 10.8-5.4S17.365.6 11.4.6C5.435.6.6 3.018.6 6s4.835 5.4 10.8 5.4z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <div className="MuiListItemText-root jss32"><span className="MuiTypography-root MuiListItemText-primary jss33 MuiTypography-body1 MuiTypography-displayBlock">Databases</span>
                        </div>
                    </a></Link>
                    
                    <Link to={Member}>
                    <a className="MuiListItem-root jss31 MuiListItem-gutters" color="initial" href="/dashboard/members">
                        <div className="MuiListItemIcon-root jss34"><svg width="29" height="19" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1 10.8a4 4 0 100-8 4 4 0 000 8zM14 17.4c0-2.2 1.8-5.8 4-5.8h8.1c2.2 0 4 3.6 4 5.8v1.3H14v-1.3zM10.4 9.8a4.4 4.4 0 100-8.8 4.4 4.4 0 000 8.8z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.1 16.9v3.5h10.6v-3.5 3.5h3.5v-3.5c0-2.4-2-6.2-4.4-6.2H5.9c-2.4 0-4.4 3.7-4.4 6.2v3.5H5v-3.5h.1z" fill="#F6F6F6" stroke="#353C4E" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <div className="MuiListItemText-root jss32"><span className="MuiTypography-root MuiListItemText-primary jss33 MuiTypography-body1 MuiTypography-displayBlock">Members</span>
                        </div>
                    </a></Link>
                </nav>
            </div>
        </div>
        <div className="MuiBox-root jss41 jss35 jss39 jss40" style={demohide()}>
        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss37 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge" tabindex="0" type="button"><span className="MuiButton-label">Upgrade<span className="MuiButton-endIcon MuiButton-iconSizeLarge"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z">
                            </path>
                        </svg></span></span><span className="MuiTouchRipple-root"></span></button></div>
       <div class="MuiBox-root jss41 jss35 jss39 jss40" style={desktopdemohide()}><a class="MuiButtonBase-root MuiIconButton-root jss38" style={{
    color: "#32ceaf",outline: "none"}} tabindex="0" aria-disabled="false" href="/billing/plans"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"  style={{fontSize: "3.5rem"}}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span><span class="MuiTouchRipple-root"></span></a></div>                
    </div>
</div>
    )
}
export default Sidebar;