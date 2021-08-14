import React    from "react";
function Footer(props) {
    return(<footer id="Dashboard-footer" style={{position:"relative"}}>
    <div className="Dashboard-footer-inner">
      <div className="Dashboard-footer-copyright">
        <div className="Dashboard-footer-copyright-social">
          <a href="#" title="@CoderPad" target="_blank">
      <img alt="Twitter" src="https://d1a7p14oqam61r.cloudfront.net/assets/twitter-123b5b181f4f84640e0a811ab20d54ccfc10798d4421648aa3e5219625c4921c.svg" width="22" height="22" /></a>
          <a href="#" target="_blank">
      <img alt="LinkedIn" src="https://d1a7p14oqam61r.cloudfront.net/assets/linkedin-e25cf7323734d46acdb438bd65f53cd07b3d1bc444f3f3e0fcf82f6f56dab9ce.svg" width="22" height="22" /></a>
        </div>
        <div className="Dashboard-footer-copyright-mark">
          © 2021 CoderPad, Inc. CoderPad is a service mark of CoderPad, Inc.
        </div>
      </div>
  
      <div className="Dashboard-footer-links">
        <a target="_blank" href="https://coderpad.io/about-us/">About Us</a>
        <a target="_blank" href="https://coderpad.io/pricing/">Pricing</a>
        <a target="_blank" href="https://coderpad.io/features/">Features</a>
        <a target="_blank" href="https://coderpad.io/resources/docs/">Docs</a>
        <a target="_blank" href="https://coderpad.io/tos/">Terms of Service</a>
        <a href="https://status.coderpad.io/" target="_blank">Status</a>
        <a href="mailto:support@coderpad.io?subject=Question%20About%20CoderPad">
          Questions? support@coderpad.io
        </a>
        <a target="_blank" href="https://coderpad.io/privacy/">Privacy Policy</a>
      </div>
    </div> 
  </footer>
  )
}
export default Footer;