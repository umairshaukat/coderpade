import React    from "react";
import Header from'../function/Header';
import Sidebar from'../function/Sidebar';
import Home from'../function/Home';
import Footer from'../function/Footer';
import Hidediv from'../function/Hidediv';
function Questionbook(props) {
    return (    <React.Fragment>
        <Header/>
        <div className="MuiBox-root jss19">
          <Sidebar/>
<div className="MuiBox-root jss42 jss1">
            <div className="MuiContainer-root MuiContainer-maxWidthXl">
                <div className="MuiBox-root jss43">
                    <div className="MuiCollapse-container jss44 MuiCollapse-hidden" style={{minHeight: "0px"}}>
                        <div className="MuiCollapse-wrapper">
                            <div className="MuiCollapse-wrapperInner"></div>
                        </div>
                    </div>
                </div>
                <div className="MuiBox-root jss52">
                    <div className="MuiPaper-root jss50 MuiPaper-elevation0 MuiPaper-rounded" data-testid="loadingblock-loading" style={{opacity: "0", transition: "opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", visibility: "hidden"}}>
                        <div className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate" role="progressbar" style={{width: "40px", height: "40px"}}><svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
                                <circle className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle>
                            </svg></div>
                        <h6 className="MuiTypography-root jss51 MuiTypography-subtitle1">Asking for questions...</h6>
                    </div>
                    <div className="MuiBox-root jss53" data-testid="loadingblock-content" style={{opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}}>
                        <main className="MuiBox-root jss54">
                            <div className="MuiBox-root jss55">
                                <div className="MuiTypography-root jss48 MuiTypography-h2 MuiTypography-colorTextPrimary">
                                    Question Bank</div>
                            </div>
                            <div className="MuiBox-root jss56-q"><button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge MuiButton-disableElevation" tabindex="0" type="button"><span className="MuiButton-label">Create Question</span><span className="MuiTouchRipple-root"></span></button></div>
                        </main>
                        <div className="jss57-q">
                            <div className="MuiTabs-root jss58">
                                <div className="MuiTabs-scroller MuiTabs-fixed" style={{overflow: "hidden"}}>
                                    <div className="MuiTabs-flexContainer" role="tablist">
<div className="jss61" role="tab" data-testid="notched-tab-all"><button className="MuiButtonBase-root MuiTab-root jss62-q MuiTab-textColorInherit" tabindex="-1" type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper jss63-q">
    <div className="MuiBox-root jss70">
<div className="jss65-q">Organization Content</div><span className="jss71"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" title="Questions created within your organization">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">
                                                                </path>
                                                            </svg></span>
                                                    </div>
                                                </span><span className="MuiTouchRipple-root"></span></button></div>
                                                <div className="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded" tabindex="-1" style={{opacity: "1", transform:" none", minWidth: "200px", transition: "opacity 247ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 165ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", top: "149px", left: "709px", transformOrigin:" 0px 24.5px"}}><ul className="MuiList-root MuiMenu-list MuiList-padding" role="listbox" tabindex="-1"><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root Mui-selected MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button Mui-selected" tabindex="0" role="option" aria-disabled="false" aria-selected="true" data-value="all">All Question Types<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="live"><div className="MuiBox-root jss137"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" color="#f8bbd0" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle></svg><div className="MuiBox-root jss138">Live</div></div><span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="home"><div className="MuiBox-root jss139"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" color="#d1c4e9" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle></svg><div className="MuiBox-root jss140">Take-Home</div></div><span className="MuiTouchRipple-root"></span></li></ul></div>
                                        <div className="jss61" role="tab" data-testid="notched-tab-user"><button className="MuiButtonBase-root MuiTab-root jss62-q MuiTab-textColorInherit" tabindex="-1" type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper jss63-q">
                                                    <div className="MuiBox-root jss75-q">
                                                        <div className="jss65-q">My Content</div><span className="jss71"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">
                                                                </path>
                                                            </svg></span>
                                                    </div>
                                                </span><span className="MuiTouchRipple-root"></span></button></div>
    <div className="jss61" role="tab" data-testid="notched-tab-examples"><button className="MuiButtonBase-root MuiTab-root jss62-q MuiTab-textColorInherit Mui-selected jss64-q" tabindex="0" type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper jss63-q" >
    <div className="MuiBox-root jss76-q">
    <div className="MuiChip-root jss66-q jss69-q MuiChip-outlined MuiChip-sizeSmall">
    <span className="MuiChip-label MuiChip-labelSmall">4</span>
    </div>
<div className="jss65-q">CoderPad Examples</div><span className="jss71"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">
</path>
</svg></span>
</div>
</span><span className="MuiTouchRipple-root"></span></button></div>
</div><span className="jss77-q jss79 MuiTabs-indicator jss59-q" style={{left: "375.938px", width: "215.609px"}}></span>
                                </div>
                            </div>
                            
<div className="MuiPaper-root jss60 MuiPaper-elevation0 MuiPaper-rounded">
    <div className="MuiBox-root jss81-q">
                <div className="MuiBox-root jss82">
        <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth" debounce="300">
                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
<div className="MuiInputAdornment-root MuiInputAdornment-positionStart"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"> </path></svg></div><input aria-invalid="false" placeholder="Search title or description" type="search" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputTypeSearch custom-input" /><fieldset aria-hidden="true" className="jss83 MuiOutlinedInput-notchedOutline" style={{paddingLeft: "8px"}}>
                                                    <legend className="jss84" style={{width: "0.01px"}}>
                                                        <span></span></legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="MuiBox-root jss87-q">
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-marginDense MuiOutlinedInput-marginDense" aria-label="Filter by Difficulty">
                                                <div className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox" aria-labelledby="filter-difficulty" id="filter-difficulty">Any
                                                    difficulty</div><input aria-hidden="true" tabindex="-1" className="MuiSelect-nativeInput" value="any" /><svg className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M7 10l5 5 5-5z"></path>
                                                </svg>
                                                <fieldset aria-hidden="true" className="jss83 MuiOutlinedInput-notchedOutline" style={{paddingLeft: "8px"}}>
                                                    <legend className="jss84" style={{width: "0.01px"}}>
                                                        <span></span></legend>
                                                </fieldset>
                                                <div className="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded" tabindex="-1" style={{opacity: "1", transform: "none", minWidth: "150px", transition: "opacity 262ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 204ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", top: "213px", left: "759px", transformOrigin:" 0px 1875px"}}><ul className="MuiList-root MuiMenu-list MuiList-padding" role="listbox" tabindex="-1"><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root Mui-selected MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button Mui-selected" tabindex="0" role="option" aria-disabled="false" aria-selected="true" data-value="any">Any difficulty<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Easy">Easy<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Medium">Medium<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Hard">Hard<span className="MuiTouchRipple-root"></span></li></ul></div>
                                            </div>
                                        </div>
                                        <div className="MuiBox-root jss88-q">
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-marginDense MuiOutlinedInput-marginDense" aria-label="Filter by language">
                                                <div className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" role="button" aria-haspopup="listbox" aria-labelledby="filter-language" id="filter-language" tabindex="0">
                                                    Any language</div><input aria-hidden="true" tabindex="-1" className="MuiSelect-nativeInput" value="any" /><svg className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M7 10l5 5 5-5z"></path>
                                                </svg>
                                                <fieldset aria-hidden="true" className="jss83 MuiOutlinedInput-notchedOutline" style={{paddingLeft: "8px"}}>
                                                    <legend className="jss84" style={{width: "0.01px"}}>
                                                        <span></span></legend>
                                                </fieldset>
                                                <div className="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded" tabindex="-1" style={{opacity: "1", transform: "none", minWidth: "200px", transition: "opacity 306ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 204ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", top: "80px", left: "917px", transformOrigin:" 0px 173.188px"}}><ul className="MuiList-root MuiMenu-list MuiList-padding" role="listbox" tabindex="-1" style={{paddingRight: "17px", width: "calc(100% + 17px)"}}><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root Mui-selected MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button Mui-selected" tabindex="0" role="option" aria-disabled="false" aria-selected="true" data-value="any">Any language<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="bash">Bash<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="c">C<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="clojure">Clojure<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="coffeescript">CoffeeScript<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="cpp">C++<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="csharp">C#<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="dart">Dart<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="elixir">Elixir<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="erlang">Erlang<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="fsharp">F#<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="go">Go<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="haskell">Haskell<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="html">HTML/CSS/JS<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="java">Java<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="javascript">JavaScript<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="kotlin">Kotlin<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="markdown">Markdown<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="mysql">MySQL<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="objc">Objective-C<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="ocaml">OCaml<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="perl">Perl<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="php">PHP<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="plaintext">Plain Text<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="postgresql">PostgreSQL<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="python">Python 2<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="python3">Python 3<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="r">R<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="ruby">Ruby<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="rust">Rust<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="scala">Scala<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="swift">Swift 5<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="tcl">Tcl<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="typescript">TypeScript<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="vb">Visual Basic<span className="MuiTouchRipple-root"></span></li><li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="verilog">Verilog<span className="MuiTouchRipple-root"></span></li></ul></div>
                                            </div>
                                        </div>
                                        <div className="MuiBox-root jss89-q"><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss90-q MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss93" type="checkbox" data-indeterminate="false" /><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                            </path>
                                                        </svg></span><span className="MuiTouchRipple-root"></span></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Test
                                                    cases</span></label></div>
                                    </div>
                                </div>
                                <div className="jss94 jss100-q">
                                    <div className="jss95">
                                        <div className="MuiPaper-root jss102-q MuiPaper-outlined MuiPaper-rounded">
                                            <table className="MuiTable-root">
                                                <thead className="MuiTableHead-root">
                                                    <tr className="MuiTableRow-root MuiTableRow-head">
                                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">
                                                            Title</th>
                                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">
                                                            Difficulty</th>
                                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">
                                                            Languages</th>
                                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col" width="1"></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="MuiTableBody-root">
                                                    <tr className="MuiTableRow-root jss104-q MuiTableRow-hover">
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss105-q">
                                                                <div className="MuiBox-root jss106">
                                                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap">
                                                                        Parking Lot OO</h6>
                                                                    <div className="MuiBox-root jss107">
                                                                        <div className="MuiChip-root jss108-q jss111 MuiChip-sizeSmall">
                                                                            <span className="MuiChip-label MuiChip-labelSmall">Example</span>
                                                                        </div>
                                                                        <div className="MuiBox-root jss112"><span className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap MuiTypography-displayBlock">Example
                                                                                coding question testing knowledge of
                                                                                object-oriented principles for use
                                                                                during candidate interviews.
                                                                            </span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">Medium</td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss113">
                                                                <p className="MuiTypography-root MuiTypography-body1">
                                                                    2&nbsp;</p><span className="jss71"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">
                                                                        </path>
                                                                    </svg></span>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button"><span className="MuiButton-label">Preview&nbsp;Question</span><span className="MuiTouchRipple-root"></span></button></td>
                                                    </tr>
                                                    <tr className="MuiTableRow-root jss104-q MuiTableRow-hover">
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss114">
                                                                <div className="MuiBox-root jss115">
                                                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap">
                                                                        Pig Latin</h6>
                                                                    <div className="MuiBox-root jss116">
                                                                        <div className="MuiChip-root jss108-q jss111 MuiChip-sizeSmall">
                                                                            <span className="MuiChip-label MuiChip-labelSmall">Example</span>
                                                                        </div>
                                                                        <div className="MuiBox-root jss117"><span className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap MuiTypography-displayBlock">A
                                                                                string manipulation challenge for a
                                                                                candidate to complete as a take-home.
                                                                            </span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">Easy</td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss118">
                                                                <p className="MuiTypography-root MuiTypography-body1">
                                                                    2&nbsp;</p><span className="jss71"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">
                                                                        </path>
                                                                    </svg></span>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button"><span className="MuiButton-label">Preview&nbsp;Question</span><span className="MuiTouchRipple-root"></span></button></td>
                                                    </tr>
                                                    <tr className="MuiTableRow-root jss104-q MuiTableRow-hover">
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss119">
                                                                <div className="MuiBox-root jss120">
                                                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap">
                                                                        Take-Home with Test Cases: Pig Latin</h6>
                                                                    <div className="MuiBox-root jss121">
                                                                        <div className="MuiChip-root jss108-q jss111 MuiChip-sizeSmall">
                                                                            <span className="MuiChip-label MuiChip-labelSmall">Example</span>
                                                                        </div>
                                                                        <div className="MuiBox-root jss122"><span className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap MuiTypography-displayBlock">How
                                                                                to use a challenge with test cases to
                                                                                automatically check a candidate's code
                                                                                for correctness.

                                                                                You can fill in the code inside of the
                                                                                provided function and run the test cases
                                                                                as needed. Once you press on the submit
                                                                                challenge button in the bottom right
                                                                                hand corner, you will be able to view
                                                                                the playback of this pad and the test
                                                                                case results.
                                                                            </span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">Easy</td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss123">
                                                                <p className="MuiTypography-root MuiTypography-body1">
                                                                    1&nbsp;</p><span className="jss71"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">
                                                                        </path>
                                                                    </svg></span>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button"><span className="MuiButton-label">Preview&nbsp;Question</span><span className="MuiTouchRipple-root"></span></button></td>
                                                    </tr>
                                                    <tr className="MuiTableRow-root jss104-q MuiTableRow-hover">
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss124">
                                                                <div className="MuiBox-root jss125">
                                                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap">
                                                                        Bracket Validator</h6>
                                                                    <div className="MuiBox-root jss126">
                                                                        <div className="MuiChip-root jss108-q jss111 MuiChip-sizeSmall">
                                                                            <span className="MuiChip-label MuiChip-labelSmall">Example</span>
                                                                        </div>
                                                                        <div className="MuiBox-root jss127"><span className="MuiTypography-root MuiTypography-caption MuiTypography-noWrap MuiTypography-displayBlock">Write
                                                                                a super-simple JavaScript parser that
                                                                                can find bugs in your intern's
                                                                                code.</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">Medium</td>
                                                        <td className="MuiTableCell-root MuiTableCell-body">
                                                            <div className="MuiBox-root jss128">
                                                                <p className="MuiTypography-root MuiTypography-body1">
                                                                    11&nbsp;</p><span className="jss71"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">
                                                                        </path>
                                                                    </svg></span>
                                                            </div>
                                                        </td>
                                                        <td className="MuiTableCell-root MuiTableCell-body"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button"><span className="MuiButton-label">Preview&nbsp;Question</span><span className="MuiTouchRipple-root"></span></button></td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="MuiTableFooter-root">
                                                    <tr className="MuiTableRow-root MuiTableRow-footer">
                                                        <td className="MuiTableCell-root MuiTableCell-footer MuiTablePagination-root" colspan="1000">
                                                            <div className="MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar MuiToolbar-gutters">
                                                                <div className="MuiTablePagination-spacer"></div>
                                                                <p className="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit">
                                                                    1-4 of 4</p>
                                                                <div className="MuiTablePagination-actions"><button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled="" title="Previous page" aria-label="Previous page"><span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z">
                                                                                </path>
                                                                            </svg></span></button><button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled="" title="Next page" aria-label="Next page"><span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z">
                                                                                </path>
                                                                            </svg></span></button></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="jss97 jss101">
                                        <div className="MuiPaper-root jss98 MuiPaper-elevation0 MuiPaper-rounded">
                                            <div className="jss99-q"><button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall" tabindex="0" type="button"><span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" role="img">
                                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                            </path>
                                                            <title>close</title>
                                                        </svg></span><span className="MuiTouchRipple-root"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    <Footer/>
    <Hidediv/>
    </React.Fragment>
    )
}
export default Questionbook;