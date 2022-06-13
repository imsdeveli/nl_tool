const PTR_Featured = (props) => {
  return `
  <!DOCTYPE html>
  <html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <!--[if mso]>
  <style>
    table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
    div, td {padding:0;}
    div {margin:0 !important;}
  </style>
  <noscript>
  <xml>
  <o:OfficeDocumentSettings>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  </noscript>
  <![endif]-->
  
  
  
  
  
  
  <style>
      table, td, div, h1, p {
          font-family: Arial, sans-serif;
      }
      @media screen and (max-width: 530px) {
          .unsub {
              display: block;
              padding: 8px;
              margin-top: 14px;
              border-radius: 6px;
              background-color: #555555;
              text-decoration: none !important;
              font-weight: bold;
          }
          .col-lge {
              max-width: 100% !important;
          }
      }
      @media screen and (min-width: 531px) {
          .col-sml {
              max-width: 27% !important;
          }
          .col-lge {
              max-width: 73% !important;
          }
      }
  </style>
  </head>
  <body style="margin:0; padding:0; word-spacing:normal; background-color:#EFEFEF;">
  <!--PREHEADER TEXT START HERE-->
  <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="display:none !important; visibility:hidden; mso-hide:all; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
    <tbody>
      <tr>
        <td style="display:none !important; visibility:hidden; mso-hide:all; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">ProTrading Research Featured Story</td>
      </tr>
    </tbody>
  </table>
  <!--PREHEADER TEXT END HERE-->		
  <div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; background-color:#EFEFEF;">
    <!--START - OUTER SCAFFOLD-->
    <table role="presentation" style="width:100%; border:none; border-spacing:0;">
      <tr>
        <td align="center" style="padding:0;">
      <!--START - GHOST TABLE FOR OUTLOOK-->
          <!--[if mso]>
      <table role="presentation" align="center" style="width:600px;">
      <tr>
      <td>
      <![endif]-->
        <!--START - MAIN CONTENT CONTAINER-->
          <table role="presentation" style="width:94%; max-width:600px; border:none; border-spacing:0; text-align:left; font-family:Arial,sans-serif; font-size:14pt; line-height:18pt; color:#363636;">
        <!--START - HEADING WITH TEXT--> 
        <tr>
            <td style="padding:30px; background-color:#ffffff;">
          <div align="center" style="border-bottom:2px solid black;"><img src="http://hosting.fyleio.com/39281/public/Pro%20Trading%20Research%20Logo.jpg?c=1518108609451" width="259" /></div>
            
          <p style="margin-bottom:1em; text-align: center;" align="center"><a href="${props.Featured_URL}" target="_blank" style="font-weight:bold; color:#22af60; text-decoration: underline;">${props.Featured_Text}</a></p>
            
          <p style="margin-bottom:1em; font-size:12pt; line-height:16pt; font-style: italic;">Today's Featured Story:</p>
            
              <h1 style="margin-bottom:1em; font-size:20pt; line-height:24pt; font-weight:bold; letter-spacing:-0.02em;"><a href="${props.ar1.URL}" style="font-weight:bold; text-decoration: none; color: #363636;" target="_blank">${props.ar1.Head}</a></h1>
            
          <p style="margin-bottom:1em;">${props.ar1.Par1}</p>
  
          <p style="margin-bottom:1em;">${props.ar1.Par2}</p>
            
          <div align="center" style="border-top:1px dotted black;">&nbsp;</div>  
          <p style="margin-top:0em; margin-bottom:1em; font-size:16pt; line-height:20pt; font-weight:bold; letter-spacing:-0.02em;"><a href="${props.ad1.URL}" style="font-weight:bold; text-decoration: none; color: #363636;" target="_blank">${props.ad1.Head}</a>&nbsp;<span style="font-size:10pt; line-height:12pt; font-weight:normal;">[sponsor]</span></h1>
          
          <p style="margin-bottom:1em;"> ${props.ad1.Bod} <a href="${props.ad1.URL}" target="_blank" style="font-weight:bold; color:#22af60; text-decoration: underline;"> ${props.ad1.Call} </a></p>					  
            
          <div align="center" style="border-top:1px dotted black;">&nbsp;</div>
          
          <p style="margin-top:0em; margin-bottom:1em;">${props.ar1.Par3}</p>
            
          <p style="margin-bottom:1em;">${props.ar1.Par4}</p>
            
          <p style="margin-bottom:2em; text-align: center; text-transform: uppercase; letter-spacing: 1px;" align="center"><a href="${props.ar1.URL}" style="background: #0095da; text-decoration: none; padding: 10px 25px; color: #ffffff; border-radius: 4px; display:inline-block; mso-padding-alt:0; text-underline-color:#0095da"><!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%; mso-text-raise:20pt">&nbsp;</i><![endif]--><span style="mso-text-raise:10pt; font-weight:bold;">&nbsp;Continue Reading&nbsp;</span><!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%">&nbsp;</i><![endif]--></a></p>
            
          <div align="center" style="border-top:1px dotted black;">&nbsp;</div>  
          <p style="margin-top:0em; margin-bottom:1em; font-size:16pt; line-height:20pt; font-weight:bold; letter-spacing:-0.02em;"><a href="${props.ad2.URL}" style="font-weight:bold; text-decoration: none; color: #363636;" target="_blank">${props.ad2.Head}</a>&nbsp;<span style="font-size:10pt; line-height:12pt; font-weight:normal;">[sponsor]</span></h1>
          
            <p style="margin-bottom:1em;"> ${props.ad2.Bod} <a href="${props.ad2.URL}" target="_blank" style="font-weight:bold; color:#22af60; text-decoration: underline;"> ${props.ad2.Call} </a></p>					  
            
            <div align="center" style="border-top:2px solid black;">&nbsp;</div>				  
            </td>
        </tr>
        <!--END - HEADING WITH TEXT--> 
        </table>
        <!--END - MAIN CONTENT CONTAINER-->
      <!--[if mso]>
      </td>
      </tr>
      </table>
      <![endif]-->
      <!--END - GHOST TABLE FOR OUTLOOK-->
        </td>
      </tr>
    </table><!--START - DISCLAIMER-->
    <table role="presentation" style="width:94%; max-width:625px; border:none; border-spacing:0; text-align:left; font-family:Arial,sans-serif; font-size:9pt; line-height:12pt; color:#363636;" align="center">
    <tr>
        <td style="padding:10px;">
      <hr width="100%" align="center" />
  
          <tr>
          <td align="left" valign="top" style="padding:10px 5px 10px 5px; font-family: Arial, sans-serif; font-size: 10px; line-height: 12px; color: #000000;">
            <p style="margin-bottom:1em;">DISCLAIMER: This communication includes advertising material and PAID ADVERTISEMENTS provided to our customers. Stocks and options trading have large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the stocks and options markets. Don't trade with money you can't afford to lose. This is neither a solicitation nor an offer to Buy/Sell stocks or options. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed in this report. The past performance of any trading system or methodology is not necessarily indicative of future results. All trades, patterns, charts, systems, etc., discussed in this report are for illustrative purposes only and not to be construed as specific advisory recommendations. Information contained in this correspondence is intended for informational purposes only and was obtained from sources believed to be reliable. Information is in no way guaranteed. No guarantee of any kind is implied or possible where projections of future conditions are attempted. For full disclaimer information, go <a href="https://protradingresearch.com/e-mail-disclaimer/" target="_blank" style="color:#0095da;">here</a>.</p>
            
          <p style="margin-bottom:1em;">For Privacy Policy information, go <a href="https://protradingresearch.com/legal/privacy-policy/" target="_blank" style="color:#0095da;">here</a>.</p>
            
          <p style="margin-bottom:1em;">At ProTradingResearch, we’re on a mission to create and provide a place where you can come to find information for stocks and investments. When ProTradingResearch was established years ago, we wanted to make our website the leader in trading news and investment information.</p>
            
          <p style="margin-bottom:1em;">Over the years, and over thousands of readers consuming our news stories and joining the newsletter, we find that the people that get the most out of our community are the ones that reach out. That’s why our primary focus is on our relationship with you. This way every time you hang out with us, you end up getting finding something that takes your investment portfolio to the next level.</p>
            
          <p style="margin-bottom:1em;">We particularly appreciate when our following provides feedback via testimonials, reviews, and comments left on our site or social media accounts. Because with that feedback, we can use it to make your next experience on our site even better than the last. Since we put so much effort into our relationship with you, we hope that any investment in us is exactly the way you hoped it would be. Because by choosing to go with ProTradingResearch, it’s our promise that we provide a community you will want to come back to over and over again.</p>
            
          <p style="margin-bottom:1em;">Now, as much as we care about making our readers richer and more fulfilled, we also care about your privacy. ProTradingResearch.com is owned and operated by ProTradingResearch. We’re committed to the right to your privacy and strive to provide a safe and secure user experience. Our Privacy Policy explains how we collect, store and use personal information, provided by you on our website.</p>
            
          <p style="margin-bottom:1em;">What Information Do We Care About?</p>
            
          <p style="margin-bottom:1em;">When you visit our Web site you may provide us with two types of information: personal information you knowingly choose to disclose that is collected on an individual basis and Web site use information collected on an aggregate basis as you and others browse our Web site.</p>
            
          <p style="margin-bottom:1em;">For example, you may need to provide the following information:</p> 
            
            <ul>
              <li style="margin-bottom:0em;">Name</li>
              <li style="margin-bottom:0em;">Website URL information</li>
            <li style="margin-bottom:0em;">Email address</li>
              <li style="margin-bottom:1em;">Home and business phone number</li>
            </ul>
            
          <p style="margin-bottom:1em;">In addition to providing the foregoing information, if you choose to correspond further with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received by mail and telephone.</p> 
            
          <p style="margin-bottom:1em;">It also explains important information that ensures we won’t abuse the information that you provide to us in good faith. By accessing and using our website, you can trust that what you want to be kept private, will be kept private. If at any time, you would like to read our Privacy Policy and get a better understanding of your rights and liabilities under the law. Feel free to visit our site, find the privacy policy in the footer and read it. If there is something you are concerned about or wish to get more clarity on, please let us know by contacting us at support@protradingresearch.com. The Privacy Policy also informs you of how to notify us to stop using your personal information. If you wish to view our official policies, please visit our website <a href="https://protradingresearch.com/" target="_blank" style="color:#0095da;">https://protradingresearch.com/</a></p>
          
          <p style="margin-bottom:1em;">At ProTradingResearch, we are strongly committed to protecting your privacy and providing a safe & high-quality online experience for all of our visitors. We understand that you care about how the information you provide to us is used and shared. We have developed a Privacy Policy to inform you of our policies regarding the collection, use, and disclosure of information we receive from users of our website. ProTradingResearch operates the Website.</a></p>
          
          <p style="margin-bottom:1em;">Our Privacy Policy, along with our Term & Conditions, governs your use of this site. By using https://protradingresearch.com/, or by accepting the Terms of Use (via opt-in, checkbox, pop-up, or clicking an email link confirming the same), you agree to be bound by our Terms & Conditions and our Privacy Policy. If you have provided personal, billing, or other voluntarily provided information, you may access, review, and make changes to it via instructions found on the Website or by emailing us at support@protradingresearch.com. To manage your receipt of marketing and non-transactional communications, you may unsubscribe by clicking the “unsubscribe” link located on the bottom of any marketing email. Emails related to the purchase or delivery of orders are provided automatically – Customers are not able to opt out of transactional emails. We will try to accommodate any requests related to the management of Personal Information in a timely manner. However, it is not always possible to completely remove or modify information in our databases (for example, if we have a legal obligation to keep it for certain timeframes, for example). If you have any questions, simply reply to this email or visit our website to view our official policies.</a></p>
  
            
          <p style="margin-bottom:1em; text-align: center;" align="center">{{Sender_Name}}<br>
            {{Sender_Address}}, {{Sender_City}}, {{Sender_State}} {{Sender_Zip}}</p>
            
            <p style="margin-bottom:1em; text-align: center;" align="center"><a class="unsub" href="{{{unsubscribe}}}" target="_blank" style="color:#0095da; text-decoration:underline;">UNSUBSCRIBE HERE</a></p><br><br>
            
            
            <h1 style="margin-top:0; margin-bottom:1em; font-size:9pt; line-height:15pt; font-weight:bold; letter-spacing:-0.02em; text-align: left">Be sure that you receive future email from ProTrading Research &ndash; please <a href="https://protradingresearch.com/ptr_whitelisting_instructions.html" style="font-weight:bold; color:#00a651;" target="_blank">whitelist our email address</a> with your email provider. </h1>
          </td>
          </tr>			  	 
        </td>
    </tr>
    <!--END - DISCLAIMER--> 
    <!--END - OUTER SCAFFOLD-->
  </div>	
  </body>
  </html>
  `;
};

export default PTR_Featured;
