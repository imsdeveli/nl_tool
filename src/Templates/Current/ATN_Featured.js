const ATN_Featured = (props) => {
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
		table,
		td,
		div,
		h1,
		p {
			font-family: Arial, sans-serif;
		}

		@media screen and (max-width: 530px) {
			.unsub {
				display: block;
				padding: 8px;
				margin-top: 14px;
				border-radius: 6px;
				background-color: #C1D82F;
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
	<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center"
		style="display:none !important; visibility:hidden; mso-hide:all; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
		<tbody>
			<tr>
				<td
					style="display:none !important; visibility:hidden; mso-hide:all; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
				</td>
			</tr>
		</tbody>
	</table>
	<!--PREHEADER TEXT END HERE-->
	<div role="article" aria-roledescription="email" lang="en"
		style="text-size-adjust:100%; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; background-color:#EFEFEF;">
		<!--START - OUTER SCAFFOLD-->
		<table role="presentation" style="width:100%; border:none; border-spacing:0;">
			<tr>
				<td align="center" style="padding:0;">
					<!--START - GHOST TABLE FOR OUTLOOK-->
					<!--[if mso]>
		  <table role="presentation" align="center" style="width:600px; background-color:#000000;" bgcolor="#000000">
		  <tr style="background-color:#000000;">
		  <td style="background-color:#000000;">
		  <![endif]-->
					<!--START - MAIN CONTENT CONTAINER-->
					<!--START - HEADER LOGO-->
					<table role="presentation"
						style="width:94%; max-width:600px; border:none; border-spacing:0; text-align:left; font-family:Arial,sans-serif; font-size:16px; line-height:18pt; color:#000000; background-color:#FFFFFF;"
						bgcolor="#FFFFFF">
						<tr>
							<td style="padding:30px 5px 0px 5px; background-color:#FFFFFF;">
								<p style="margin-top:0em; margin-bottom:0em; text-align: right" align="center"><img
										src="http://cdn.mcauto-images-production.sendgrid.net/416b2593daeb264e/8f233b77-b22e-4b79-a188-13ce6860e26e/1812x857.png"
										width="200" /></p>

								<h1
									style="margin-top:0em; margin-bottom:0em; font-size:16pt; line-height:20pt; font-weight:bold; letter-spacing:-0.02em; text-indent: 10px;">
									ATN Exclusive&nbsp;</h1>

								<div align="center" style="border-bottom:8px solid #C1D82F;">&nbsp;</div>
								<!--START - HEADING WITH TEXT-->
								<table role="presentation"
									style="width:100%; border:none; border-spacing:0; text-align:left; font-family:Arial,sans-serif; font-size:13pt; line-height:18pt; color:#000000; background-color: #FFFFFF;"
									bgcolor="#FFFFFF">
									<tr>
										<td style="padding:10px; background-color:#ffffff;">
											<!--START - RELATED CONTENT UNIT-->
											<p style="margin-bottom:1em; text-align: center;" align="center"><a
													href="${props.Featured_URL}"
													style="font-weight:bold; text-decoration: underline; color: #196767;"
													target="_blank">${props.Featured_Text}</a>&nbsp;<span
													style="font-size:8pt; line-height:10pt;">[ad]</span></p>
											<!--END - RELATED CONTENT UNIT-->

											<p
												style="margin-bottom:1em; font-weight:bold; font-size:17pt; line-height:22pt;">
												<a href="${props.ar1.URL}"
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ar1.Head}</a>
											</p>

											<p style="margin-bottom:1em;">${props.ar1.Par1}</p>

											<p style="margin-bottom:1em;">${props.ar1.Par2}</p>


											<div align="center" style="border-top:1px dotted #C1D82F;">&nbsp;</div>

											<p style="margin-top:0em; margin-bottom:1em; text-align: center;"
												align="center"><a href="${props.ad1.URL}" style="" target="_blank
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ad1.Head}</a> <span
													style="color:#000000; font-weight:normal; font-size:10px; line-height:12px;">[ad]</span><br>
												${props.ad1.Bod}&nbsp;<a href="${props.ad1.URL}"
													style="text-decoration:underline; font-weight: bold; color: #196767;"
													target="_blank">${props.ad1.Call}</a></p>

											<div align="center" style="border-top:1px dotted #C1D82F;">&nbsp;</div>


											<p style="margin-bottom:1em;">${props.ar1.Par3}</p>

											<p style="margin-bottom:1em;">${props.ar1.Par4}</p>



											<p style="margin-bottom:2em; text-align: center; text-transform: uppercase; letter-spacing: 1px;"
												align="center"><a href="${props.ar1.URL}"
													style="background: #196767; text-decoration: none; padding: 10px 25px; color: #FFFFFF; border-radius: 4px; display:inline-block; mso-padding-alt:0; text-underline-color:#196767">
													<!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%; mso-text-raise:20pt">&nbsp;</i><![endif]--><span
														style="mso-text-raise:10pt; font-weight:bold;">&nbsp;Continue
														Reading&nbsp;</span>
													<!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%">&nbsp;</i><![endif]-->
												</a></p>

											<div align="center" style="border-top:1px dotted #C1D82F;">&nbsp;</div>

											<p style="margin-top:0em; margin-bottom:1em; text-align: center;"
												align="center"><a href="${props.ad2.URL}" style="" target="_blank
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ad2.Head}</a> <span
													style="color:#000000; font-weight:normal; font-size:10px; line-height:12px;">[ad]</span><br>
												${props.ad2.Bod}&nbsp;<a href="${props.ad2.URL}"
													style="text-decoration:underline; font-weight: bold; color: #196767;"
													target="_blank">${props.ad2.Call}</a></p>

											<br><br>
											<h1
												style="margin-top:0; margin-bottom:1em; font-size:9pt; line-height:15pt; font-weight:bold; letter-spacing:-0.02em; text-align: left">
												Be sure that you receive future email from Active Trader News &ndash;
												please <a
													href="https://www.activetradernews.com/atn_whitelisting_instructions.html"
													style="font-weight:bold; color:#196767;" target="_blank">whitelist
													our email address</a> with your email provider. </h1>
										</td>
									</tr>
								</table>
								<!--END - HEADING WITH TEXT-->
								<div align="center" style="border-top:8px solid #C1D82F;">&nbsp;</div>
							</td>
						</tr>
					</table>
					<table role="presentation"
						style="width:94%; max-width:600px; border:none; border-spacing:0; text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:8pt; line-height:12pt; color:#363636;"
						align="center">
						<tr>
							<td style="padding:30px; background-color:#ffffff;">
								<hr />

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">DISCLAIMER: This
									communication includes advertising material and PAID ADVERTISEMENTS provided to our
									customers. Stocks and options trading have large potential rewards, but also large
									potential risk. You must be aware of the risks and be willing to accept them in
									order to invest in the stocks and options markets. Don't trade with money you can't
									afford to lose. This is neither a solicitation nor an offer to Buy/Sell stocks or
									options. No representation is being made that any account will or is likely to
									achieve profits or losses similar to those discussed in this report. The past
									performance of any trading system or methodology is not necessarily indicative of
									future results. All trades, patterns, charts, systems, etc., discussed in this
									report are for illustrative purposes only and not to be construed as specific
									advisory recommendations. Information contained in this correspondence is intended
									for informational purposes only and was obtained from sources believed to be
									reliable. Information is in no way guaranteed. No guarantee of any kind is implied
									or possible where projections of future conditions are attempted. For full
									disclaimer information, <a href="https://www.activetradernews.com/disclaimer/"
										target="_blank">click here.</a> <br><br>For Privacy Policy information, click <a
										href="https://www.activetradernews.com/privacy-policy/"
										target="_blank">here</a>.</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">At Active Trader
									News, it's our mission to create and provide a community that helps you live a more
									lucrative and enriched life. When Active Trader News was established a few years
									back, we wanted to make the community an inclusive, welcoming table where everyone
									can come to invest! Over the years, and with thousands of followers across our
									social media platforms, we will always aim to get better at what we do every single
									day! In addition, our primary focus is on our relationship with you. This way every
									time you hang out with us, you end up getting an idea that takes your investment
									portfolio to the next level. We particularly appreciate when our following provides
									feedback via testimonials, reviews, and comments left on our site or social media
									accounts. Because with that feedback, we can use it to make your next investment or
									stock purchase even better than the last! Since we put so much effort into the
									relationship with you, we hope that any time spent with us is exactly the way you
									hoped it would be. Because by choosing to go with Active Trader News, it's our
									promise that we provide a community you will love for years and years to come. Now,
									as much as we care about helping you make the right investments, we also care about
									your privacy. Active Trader News is owned and operated by ActiveTraderNews.com.
									We're committed to the right of your privacy and strive to provide a safe and secure
									user experience. Our Privacy Policy explains how we collect, store and use personal
									information, provided by you on our website. It also explains how we collect and use
									non-personal information. By accessing and using our website, you explicitly accept,
									without limitation or qualification, the collection, use, and transfer of personal
									information and non-personal information in the manner described in our Privacy
									Policy.</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">What Information
									Do We Collect?</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">When you visit
									our Web site you may provide us with two types of information: personal information
									you knowingly choose to disclose that is collected on an individual basis and Web
									site use information collected on an aggregate basis as you and others browse our
									Web site.</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">For example, you
									may need to provide the following information:• Name • Website URL information •
									Email address • Home and business phone number</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">Please read this
									Policy on our website(s) carefully, as it affects your rights and liabilities under
									the law. If you disagree with the way we collect and process personal and
									non-personal information, please do not use this website. This Policy applies to
									this website as well as all web pages the Company hosts. It regulates the processing
									of information relating to you and grants both of us various rights with respect to
									your personal data. It also informs you of how to notify us to stop using your
									personal information. It also explains important information that ensures we won't
									abuse the information that you provide to us in good faith. By accessing and using
									our website, you can trust that what you want to be kept private, will be kept
									private. If at any time, you would like to read our Privacy Policy and get a better
									understanding of your rights and liabilities under the law. Feel free to visit our
									site, find the privacy policy in the footer and read it. If there is something you
									are concerned about or wish to get more clarity on, please let us know by contacting
									us at support@activetradernews.com. The Privacy Policy also informs you of how to
									notify us to stop using your personal information. If you wish to view our official
									policies, please visit our website <a href="https://www.activetradernews.com/"
										target="_blank">https://www.activetradernews.com/</a></p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">If you end up
									visiting https://www.activetradernews.com/, we are strongly committed to protecting
									your privacy and providing a safe & high-quality online experience for all of our
									visitors. We understand that you care about how the information you provide to us is
									used and shared. We have developed a Privacy Policy to inform you of our policies
									regarding the collection, use, and disclosure of information we receive from users
									of our website activetradernews.com operates the Website.</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">Our Privacy
									Policy, along with our Term & Conditions, governs your use of this site. By using
									https://www.activetradernews.com/, or by accepting the Terms of Use (via opt-in,
									checkbox, pop-up, or clicking an email link confirming the same), you agree to be
									bound by our Terms & Conditions and our Privacy Policy.</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em;">If you have
									provided personal, billing, or other voluntarily provided information, you may
									access, review, and make changes to it via instructions found on the Website or by
									emailing us at support@activetradernews.com. To manage your receipt of marketing and
									non-transactional communications, you may unsubscribe by clicking the "unsubscribe"
									link located on the bottom of any marketing email. Emails related to the purchase or
									delivery of orders are provided automatically – Customers are not able to opt-out of
									transactional emails. We will try to accommodate any requests related to the
									management of Personal Information in a timely manner. However, it is not always
									possible to completely remove or modify information in our databases (for example,
									if we have a legal obligation to keep it for certain timeframes, for example). If
									you have any questions, simply reply to this email or visit our website to view our
									official policies.</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em; text-align: center;"
									align="center">{{Sender_Name}}<br>
									{{Sender_Address}}, {{Sender_City}}, {{Sender_State}} {{Sender_Zip}}</p>

								<p style="font-family:Arial, Helvetica, sans-serif; margin-bottom:1em; text-align: center;"
									align="center"><a href="{{{unsubscribe}}}" target="_blank"
										style="text-decoration:underline;" target="_blank">UNSUBSCRIBE HERE</a></p>
							</td>
						</tr>
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
		</table>
		<!--END - OUTER SCAFFOLD-->
	</div>
</body>

</html>
`;
};

export default ATN_Featured;
