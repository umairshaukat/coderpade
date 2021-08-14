import React    from "react";
import Header from'../function/Header';
import Sidebar from'../function/Sidebar';
import Home from'../function/Home';
import Footer from'../function/Footer';
import Hidediv from'../function/Hidediv';
function Teamshare(props) {
  
document.body.className="login";
    return (<div>
    <div className="dogee-header">
    <div className="dogee-logo">
        <a href="https://coderpad.io" className="logo-link" >
   <span className="screen-reader-text">CoderPad</span>
    <svg className="logo logo-coderpad primary-colors" style={{width: "230px"}} role="img" viewBox="0 0 136 20" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M134.465 18.925l-5.025.188-.225-1.276c-.975.976-2.213 1.5-3.6 1.5-1.65 0-2.85-.562-3.712-1.687-.826-1.125-1.2-2.662-1.2-4.725 0-2.25.562-3.975 1.687-5.213 1.125-1.2 2.813-1.837 5.063-1.837.525 0 1.05.037 1.537.225v-3l-1.912-.45V.738L131.54.55l.45.525.45.413v15l1.913.45.112 1.987zm-5.438-3.75V9.1c-.412-.225-.974-.375-1.874-.375-1.838 0-2.776 1.35-2.776 4.05 0 2.55.75 3.787 2.288 3.787.45 0 .9-.075 1.2-.375.413-.225.675-.45.825-.675l.338-.337z" fill="#CC4E41"></path><path d="M32.765 5.313c-.75-.3-1.65-.375-2.663-.375-2.625 0-3.937 1.912-3.937 5.85 0 3.637 1.35 5.474 4.087 5.474.713 0 1.463-.15 2.138-.412.75-.3 1.35-.563 1.762-.825l.563-.412 1.313 2.175a2.448 2.448 0 00-.263.3c-.113.075-.413.337-.825.674-.412.3-.9.563-1.313.788-.45.225-1.05.412-1.725.6-.712.188-1.35.3-2.062.3-2.438 0-4.313-.75-5.663-2.175-1.312-1.462-1.987-3.562-1.987-6.3 0-2.775.75-4.95 2.212-6.563 1.463-1.575 3.375-2.4 5.888-2.4.825 0 1.762.075 2.662.3.9.226 1.65.376 2.138.563l.75.3-.188 4.5h-2.325l-.562-2.362zM44.09 5.987c1.913 0 3.375.563 4.462 1.688 1.05 1.125 1.613 2.7 1.613 4.725 0 2.175-.562 3.787-1.725 5.062-1.162 1.276-2.7 1.838-4.65 1.838-4.012 0-6.075-2.175-6.075-6.563 0-2.175.563-3.787 1.725-4.95 1.05-1.237 2.7-1.8 4.65-1.8zm-.15 2.7c-.9 0-1.612.3-1.987.9-.376.6-.676 1.575-.676 3.038 0 1.35.188 2.4.563 3 .413.675 1.05.938 1.913.938.9 0 1.5-.3 1.912-.938.413-.6.6-1.688.6-3.075 0-1.313-.187-2.25-.562-2.85-.3-.675-.9-1.012-1.763-1.012zM65.428 18.925l-5.025.188-.188-1.276c-.975.976-2.212 1.5-3.6 1.5-1.65 0-2.85-.562-3.712-1.687-.825-1.125-1.2-2.662-1.2-4.725 0-2.25.562-3.975 1.687-5.213 1.125-1.2 2.813-1.837 5.063-1.837.524 0 1.05.037 1.537.225v-3l-1.913-.45V.738l4.5-.188.526.525.412.413v15l1.913.45v1.987zm-5.475-3.75V9.1c-.413-.225-1.05-.375-1.838-.375-1.837 0-2.775 1.35-2.775 4.05 0 2.55.75 3.787 2.288 3.787.412 0 .9-.075 1.275-.375.412-.225.675-.45.825-.675l.225-.337zM78.328 13.338l-7.913.075c.037.974.375 1.8.9 2.287.525.525 1.163.825 1.95.825.563 0 1.2-.075 1.875-.3.675-.225 1.2-.375 1.538-.563l.562-.3 1.05 1.913c-.188.15-.413.338-.75.525-.337.225-.975.525-1.913.9-.974.375-1.874.563-2.774.563-2.026 0-3.563-.563-4.65-1.688-1.05-1.125-1.613-2.7-1.613-4.725 0-2.1.562-3.787 1.687-5.063 1.125-1.2 2.7-1.875 4.688-1.875 1.762 0 3.075.526 4.012 1.5.938.976 1.425 2.4 1.425 4.125l-.075 1.8zm-5.55-4.613c-.676 0-1.163.225-1.613.675-.45.45-.675 1.05-.75 1.762h4.275c0-1.575-.6-2.437-1.912-2.437zM79.94 6.4l4.95-.188.188 1.65c.075-.15.262-.337.524-.524.263-.188.675-.526 1.2-.825.563-.338 1.125-.526 1.613-.526.375 0 .75.038 1.125.113.375.075.675.15.787.225l.225.075-.187 4.537h-2.063l-.375-2.062c-.412 0-.825.113-1.275.338-.45.225-.75.412-.975.637l-.337.338v6.374l2.287.563v1.913H79.94v-1.913l1.912-.563v-7.8l-1.912-.45V6.4z" fill="#515050"></path><path d="M99.14 16.975v2.063h-7.275v-2.063l1.763-.563V5.05l-1.763-.712v-1.95l5.475-.113h2.287c1.838 0 3.226.413 4.276 1.35 1.05.9 1.537 2.1 1.537 3.713 0 1.95-.563 3.45-1.8 4.462-1.162.975-2.85 1.5-5.063 1.5h-1.312v3.188l1.875.487zM97.302 5.087v5.325h1.275c.975 0 1.8-.225 2.288-.712.525-.45.788-1.125.788-1.95 0-.787-.226-1.463-.675-1.912-.45-.45-1.05-.75-1.838-.75h-1.838zM119.465 18.925l-4.725.188-.412-1.538c-.15.075-.338.3-.563.525-.225.225-.713.45-1.425.787-.713.338-1.313.526-1.913.526-1.162 0-2.062-.338-2.7-.976-.675-.637-.975-1.575-.975-2.775 0-2.625 1.913-3.937 5.738-3.937h1.65v-1.313c0-1.2-.6-1.762-1.838-1.762-.375 0-.712.037-1.087.075-.375.037-.6.113-.788.188l-.225.037-.374 1.538h-2.138l-.188-3.563c1.913-.675 3.675-.975 5.175-.975 1.838 0 3.075.375 3.863 1.05.75.675 1.125 1.912 1.125 3.637v5.925l1.762.413.038 1.95zm-9.263-3.713c0 .976.45 1.463 1.425 1.463.376 0 .75-.113 1.163-.375.412-.3.75-.45.975-.713l.375-.337v-1.575h-1.35c-.938 0-1.613.112-1.95.375-.45.225-.638.637-.638 1.162z" fill="#CC4E41"></path><g><path d="M16.565 1.245H1.94c-.787 0-1.405.6-1.405 1.405v14.588c0 .807.6 1.404 1.405 1.404h14.625c.787 0 1.405-.6 1.405-1.404V2.65c.003-.805-.598-1.405-1.405-1.405z" fill="#CC4E41"></path><g fill="#FFF"><path d="M4.103 10.18l2.822.995v1.388L2.66 10.755v-1.17l4.265-1.808v1.388zM8.555 13.86H7.49l2.655-7.83h1.065zM14.41 10.165L11.533 9.16V7.782l4.315 1.808v1.165l-4.316 1.812v-1.382z"></path></g></g></g></svg>
          </a>
    </div>
  </div>
  <div className="login-container">
      <h1 className="the-form-title js-the-form-title invite-custom-title">Create your team and get started</h1>
      <p className="custom-para-invite" style={{textAlign: "center", marginBottom: "20px"}}>
      Creating a team trial allows you to unlock <strong>all </strong>features for <strong>free </strong> for next seven days.
    </p> <form className="formtastic invite" id="invite-creation" novalidate="novalidate" action="/invites" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="mZdKgTB134p8LDo52R1dQWuORYGobqvk8yWhjoZFFjMYiKQ994OeVIXADXMi9KOp5l9/8xbieYGtyi5+mxRgnw==" />
    <fieldset className="inputs"><ol>
      <li className="hidden input optional" id="invite_email_input">
      <input id="invite_email" type="hidden" name="invite[email]" />
  </li>
      <li>
        <label for="team-name" className="text-label">Team Name</label>
          <input id="team-name" className="text-input form-control" type="text" name="team-name"
              placeholder="Team Name" value="Demo Company" required="" />
      </li>
      <li>
        <label for="default-lang" className="text-label">Default programming language to use</label>
          <select name="" className="form-control custom-select">
              <option value="Java">Java</option>
              <option value="Java">Java</option>
          </select>
          <div className="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded" tabindex="-1" style={{opacity: "1", transform: "none", minWidth: "350px", transition: "opacity 247ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 165ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", 
           transformOrigin: "0px 24.5px", position: "unset !important"}}><ul className="MuiList-root MuiMenu-list MuiList-padding" role="listbox" tabindex="-1" aria-labelledby="padFormatSelectLabel"><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root Mui-selected MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button Mui-selected" tabindex="0" role="option" aria-disabled="false" aria-selected="true" data-value="any">Java<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="takehome">C#<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="live">C++<span className="MuiTouchRipple-root"></span></li></ul></div>
      </li>
  </ol></fieldset>  <div className="button-group">
      <input style={{flex: "0.4"}} type="submit" name="commit" value="Get Started" id="team-creation-submit" className="btn btn-primary" />
    </div>
  </form>
  </div></div>
    )
}
export default Teamshare;