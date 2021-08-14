import React    from "react";
import Header from'../function/Header';
import Sidebar from'../function/Sidebar';
import Home from'../function/Home';
import Footer from'../function/Footer';
import Hidediv from'../function/Hidediv';
import { Link } from 'react-router-dom';
function Member(props) {
    let Member='/teammate';
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
                <div className="MuiBox-root jss334">
                    <div className="MuiPaper-root jss309 MuiPaper-elevation0 MuiPaper-rounded" data-testid="loadingblock-loading" style={{opacity: "0", visibility:" hidden"}}>
                        <div className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate" role="progressbar" style={{width: "40px", height: "40px"}}><svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
                                <circle className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle>
                            </svg></div>
                        <h6 className="MuiTypography-root jss310 MuiTypography-subtitle1">Retrieving your organization
                            information</h6>
                    </div>
                    <div className="MuiBox-root jss335" data-testid="loadingblock-content" style={{opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}}>
                        <main className="MuiBox-root jss336">
                            <div className="MuiBox-root jss337">
                                <div className="MuiTypography-root jss307 MuiTypography-h2 MuiTypography-colorTextPrimary">
                                    Demo Company Members</div>
                                <div className="MuiBox-root jss338">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1">Manage the members in your
                                        organization. Invite new members, or search, promote, demote or remove existing
                                        ones.</h6>
                                </div>
                            </div>
                            <div className="MuiBox-root jss339">
                            <Link to={Member}>    
                            <a className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge MuiButton-disableElevation" tabindex="0" aria-disabled="false" 
                            ><span className="MuiButton-label">Invite Teammates</span><span className="MuiTouchRipple-root"></span></a>
                            </Link>
                            </div>
                        </main>
                        <div className="MuiCollapse-container MuiCollapse-hidden" style={{minHeight: "0px"}}>
                            <div className="MuiCollapse-wrapper">
                                <div className="MuiCollapse-wrapperInner"></div>
                            </div>
                        </div>
                        <div className="MuiCollapse-container MuiCollapse-hidden" style={{minHeight: "0px"}}>
                            <div className="MuiCollapse-wrapper">
                                <div className="MuiCollapse-wrapperInner"></div>
                            </div>
                        </div>
                        <div className="MuiBox-root jss340"></div>
                        <div className="MuiBox-root jss341">
                            <p className="MuiTypography-root MuiTypography-h2 MuiTypography-paragraph">Pending Invites</p>
                            <div className="MuiPaper-root jss342 MuiPaper-outlined MuiPaper-rounded">
                                <table className="MuiTable-root">
                                    <thead className="MuiTableHead-root">
                                        <tr className="MuiTableRow-root MuiTableRow-head">
                                            <th className="MuiTableCell-root MuiTableCell-head" scope="col"><span className="MuiButtonBase-root MuiTableSortLabel-root MuiTableSortLabel-active" tabindex="0" role="button" aria-disabled="false">Email<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiTableSortLabel-icon jss344 MuiTableSortLabel-iconDirectionDesc">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.794 10.5l-3.897-6L8 10.5h7.794zm0 3l-3.897 6L8 13.5h7.794z" fill="#353C4E"></path>
                                                    </svg></span></th>
                                            <th className="MuiTableCell-root MuiTableCell-head" scope="col"><span className="MuiButtonBase-root MuiTableSortLabel-root MuiTableSortLabel-active" tabindex="0" role="button" aria-disabled="false">Invite Sent<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionDesc">
                                                        <path d="M11.898 4.5l3.897 6H8l3.898-6z" fill="#353C4E"></path>
                                                        <path d="M11.898 19.5l3.897-6H8l3.898 6z" fill="#292E55" fill-opacity="0.2"></path>
                                                    </svg></span></th>
                                            <th className="MuiTableCell-root MuiTableCell-head" scope="col"><span className="MuiButtonBase-root MuiTableSortLabel-root MuiTableSortLabel-active" tabindex="0" role="button" aria-disabled="false">Sender<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiTableSortLabel-icon jss344 MuiTableSortLabel-iconDirectionDesc">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.794 10.5l-3.897-6L8 10.5h7.794zm0 3l-3.897 6L8 13.5h7.794z" fill="#353C4E"></path>
                                                    </svg></span></th>
                                            <th className="MuiTableCell-root MuiTableCell-head" scope="col">Role</th>
                                            <th className="MuiTableCell-root MuiTableCell-head" scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="MuiTableBody-root">
                                        <tr className="MuiTableRow-root">
                                            <td className="MuiTableCell-root MuiTableCell-body" colspan="7">No records found
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="MuiTableFooter-root">
                                        <tr className="MuiTableRow-root MuiTableRow-footer">
                                            <td className="MuiTableCell-root MuiTableCell-footer MuiTablePagination-root" colspan="1000">
                                                <div className="MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar MuiToolbar-gutters">
                                                    <div className="MuiTablePagination-spacer"></div>
                                                    <p className="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit">
                                                        0-0 of 0</p>
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
                                <div className="MuiPaper-root jss343 MuiPaper-elevation1 MuiPaper-rounded"></div>
                            </div>
                        </div>
                        <p className="MuiTypography-root MuiTypography-h2 MuiTypography-paragraph">Current Members</p>
                        <div className="MuiBox-root jss345">
                            <div className="MuiFormControl-root MuiTextField-root" debounce="300">
                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
                                    <div className="MuiInputAdornment-root MuiInputAdornment-positionStart"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                            </path>
                                        </svg></div><input aria-invalid="false" placeholder="Search members" type="search" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputTypeSearch" />
                                    <fieldset aria-hidden="true" className="jss346 MuiOutlinedInput-notchedOutline" style={{paddingLeft: "8px"}}>
                                        <legend className="jss347" style={{width: "0.01px"}}><span>&#8206;</span>
                                        </legend>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="MuiPaper-root jss342 MuiPaper-outlined MuiPaper-rounded">
                            <table className="MuiTable-root">
                                <thead className="MuiTableHead-root">
                                    <tr className="MuiTableRow-root MuiTableRow-head">
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col"><span className="MuiButtonBase-root MuiTableSortLabel-root MuiTableSortLabel-active" tabindex="0" role="button" aria-disabled="false">Name<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc">
                                                    <path d="M11.898 4.5l3.897 6H8l3.898-6z" fill="#353C4E"></path>
                                                    <path d="M11.898 19.5l3.897-6H8l3.898 6z" fill="#292E55" fill-opacity="0.2"></path>
                                                </svg></span></th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col"><span className="MuiButtonBase-root MuiTableSortLabel-root MuiTableSortLabel-active" tabindex="0" role="button" aria-disabled="false">Email<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiTableSortLabel-icon jss344 MuiTableSortLabel-iconDirectionDesc">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.794 10.5l-3.897-6L8 10.5h7.794zm0 3l-3.897 6L8 13.5h7.794z" fill="#353C4E"></path>
                                                </svg></span></th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col"><span className="MuiButtonBase-root MuiTableSortLabel-root MuiTableSortLabel-active" tabindex="0" role="button" aria-disabled="false">Role<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionDesc">
                                                    <path d="M11.898 4.5l3.897 6H8l3.898-6z" fill="#353C4E"></path>
                                                    <path d="M11.898 19.5l3.897-6H8l3.898 6z" fill="#292E55" fill-opacity="0.2"></path>
                                                </svg></span></th>
                                        <th className="MuiTableCell-root MuiTableCell-head" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody className="MuiTableBody-root">
                                    <tr className="MuiTableRow-root">
                                        <td className="MuiTableCell-root MuiTableCell-body">Shaheryar Yousaf (Me)</td>
                                        <td className="MuiTableCell-root MuiTableCell-body">shaheryar@tmpbox.net</td>
                                        <td className="MuiTableCell-root MuiTableCell-body">Admin</td>
                                        <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight"></td>
                                    </tr>
                                </tbody>
                                <tfoot className="MuiTableFooter-root">
                                    <tr className="MuiTableRow-root MuiTableRow-footer">
                                        <td className="MuiTableCell-root MuiTableCell-footer MuiTablePagination-root" colspan="1000">
                                            <div className="MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar MuiToolbar-gutters">
                                                <div className="MuiTablePagination-spacer"></div>
                                                <p className="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit">
                                                    1-1 of 1</p>
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
                </div>
            </div>
        </div>
        </div>
    <Footer/>
    <Hidediv/>
    </React.Fragment>
    )
}
export default Member;