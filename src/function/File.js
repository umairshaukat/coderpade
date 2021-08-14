import React    from "react";
import Header from'../function/Header';
import Sidebar from'../function/Sidebar';
import Home from'../function/Home';
import Footer from'../function/Footer';
import Hidediv from'../function/Hidediv';
function File(props) {
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
                <div className="MuiBox-root jss272">
                    <div className="MuiPaper-root jss249 MuiPaper-elevation0 MuiPaper-rounded"
                        data-testid="loadingblock-loading" style={{opacity: "0", visibility: "hidden"}}>
                        <div className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
                            role="progressbar" style={{width: "40px", height: "40px"}}><svg className="MuiCircularProgress-svg"
                                viewBox="22 22 44 44">
                                <circle className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
                                    cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle>
                            </svg></div>
                        <h6 className="MuiTypography-root jss250 MuiTypography-subtitle1">Retrieving custom files</h6>
                    </div>
                    <div className="MuiBox-root jss273" data-testid="loadingblock-content"
                        style={{opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}}>
                        <main className="MuiBox-root jss274">
                            <div className="MuiBox-root jss275">
                                <div className="MuiTypography-root jss247 MuiTypography-h2 MuiTypography-colorTextPrimary">
                                    Custom Files</div>
                                <div className="MuiBox-root jss276">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1">
                                        <p>You can upload files and attach them to questions, allowing you to reference
                                            data sets, CSVs, and more. When using questions with an attached file in a
                                            pad, the file is copied to the language environment's filesystem so
                                            participants can write code to access the file.</p>
                                        <p>Detailed instructions with screenshots are available in the <a style={{color: "#428bca"}} 
                                                href="https://www.coderpad.io/custom-files" target="_blank"
                                                rel="noreferrer">Custom Files Guide</a>.</p>
                                    </h6>
                                </div>
                            </div>
                            <div className="MuiBox-root jss277"><a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge MuiButton-disableElevation"
                                    tabindex="0" role="button" aria-disabled="false" href="/dashboard/files/new"><span
                                        className="MuiButton-label">Create File</span><span
                                        className="MuiTouchRipple-root"></span></a></div>
                        </main>
                        <div className="MuiBox-root jss278"></div>
                        <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded">
                            <table className="MuiTable-root">
                                <thead className="MuiTableHead-root">
                                    <tr className="MuiTableRow-root MuiTableRow-head">
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">Title</th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">File</th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">Size</th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">Created</th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col">Attached</th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody className="MuiTableBody-root">
                                    <tr className="MuiTableRow-root" id="0c2b014e-18f6-48e1-afcf-7a0ab8ba6335">
                                        <td className="MuiTableCell-root MuiTableCell-body jss270">Master Class</td>
                                        <td className="MuiTableCell-root MuiTableCell-body jss270">related.php</td>
                                        <td className="MuiTableCell-root MuiTableCell-body jss271">1.46 KB</td>
                                        <td className="MuiTableCell-root MuiTableCell-body jss270">less than a minute ago
                                        </td>
                                        <td className="MuiTableCell-root MuiTableCell-body jss271">0</td>
                                        <td className="MuiTableCell-root MuiTableCell-body jss270 MuiTableCell-alignRight">
                                            <a className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"
                                                tabindex="0" role="button" aria-disabled="false"
                                                href="/dashboard/files/0c2b014e-18f6-48e1-afcf-7a0ab8ba6335"><span
                                                    className="MuiButton-label">More Info</span><span
                                                    className="MuiTouchRipple-root"></span></a>
                                            <div className="MuiButtonBase-root MuiIconButton-root jss280 MuiIconButton-colorPrimary"
                                                tabindex="0" role="button" aria-disabled="false"
                                                data-testid="action-drop-menu-btn"><span
                                                    className="MuiIconButton-label"><svg className="MuiSvgIcon-root jss281"
                                                        focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                                                        </path>
                                                    </svg></span><span className="MuiTouchRipple-root"></span></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
export default File;