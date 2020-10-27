import { MailTemplate } from './MailTemplate';

interface ResetPasswordMailOptions {
    title?: string;
    name: string;
    permalink: string;
    token: string;
}

export class ResetPasswordTemplate extends MailTemplate<ResetPasswordMailOptions> {
    public text = () => `
${this.options.name}侠士您好，刚才有人在剑网3配装器上对所属于这个邮箱的账户发起了重置密码的请求，如果您确认这是您的操作，请点击下面的链接重置密码。
https://www.j3pz.com/user/reset?permalink=${this.options.permalink}&token=${this.options.token}
如果您记得密码，您可以安全的忽略这封邮件。您的密码不会被更改。
`;

    public html = () => `
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title>${this.options.title}</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
#outlook a{padding: 0;}
.ReadMsgBody{width: 100%;}
.ExternalClass{width: 100%;}
.ExternalClass *{line-height: 100%;}
body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
p{display: block; margin: 13px 0;}
</style>
<!--[if !mso]><!-->
<style type="text/css">
@media only screen and (max-width:480px) {
@-ms-viewport {width: 320px;}
@viewport {width: 320px; }
}
</style>
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css">
.outlook-group-fix{width:100% !important;}
</style>
<![endif]-->
<style type="text/css">
@media only screen and (max-width:480px) {

table.full-width-mobile { width: 100% !important; }
td.full-width-mobile { width: auto !important; }

}
@media only screen and (min-width:480px) {
.dys-column-per-100 {
width: 100.000000% !important;
max-width: 100.000000%;
}
}
@media only screen and (min-width:480px) {
.dys-column-per-100 {
width: 100.000000% !important;
max-width: 100.000000%;
}
}
@media only screen and (min-width:480px) {
.dys-column-per-100 {
width: 100.000000% !important;
max-width: 100.000000%;
}
}</style>
<style type='text/css'>a {color: #0000EE;text-decoration: none;}</style><style type="text/css">
@media only screen and (max-width: 480px){
.emailButton > table {
max-width: 600px !important;
width: 100% !important;
}

.emailButton a {
display: block !important;
font-size: 18px !important;
}
}
</style>
</head>
<body style="background-color: #F4F4F4;background-position: top;background-repeat: no-repeat;background-size: auto;"><div style="background-color: #F4F4F4;background-position: top;background-repeat: no-repeat;background-size: auto;">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]--><div style='margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:8px;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'><tbody><tr><td style='padding:0px;vertical-align:top;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='' width='100%'>
<tr><td align='center' style='font-size:0px;padding:0px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:72px;'><img alt='剑网3配装器' height='72' src='https://images.j3pz.com/imgs/icon.png' style='border:none;display:block;font-size:13px;height:72px;outline:none;text-decoration:none;width:100%;' width='72' /></td></tr></tbody></table></td></tr>
</table></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]-->

<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]--><div style='background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#FFFFFF;background-color:#FFFFFF;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
<tr><td align='left' style='font-size:0px;padding:10px 25px;padding-bottom:5px;word-break:break-word;'><div style='color:#4d4d4d;font-family:Oxygen, Helvetica neue, sans-serif;font-size:24px;font-weight:700;line-height:30px;text-align:left;'>重置密码</div></td></tr>
<tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;line-height:21px;text-align:left;'>${this.options.name}侠士您好，刚才有人在<a href="https://www.j3pz.com">剑网3配装器</a>上对所属于这个邮箱的账户发起了重置密码的请求，如果您确认这是您的操作，请点击下面的按钮重置密码。</div></td></tr>
<tr><td align='left' class='emailButton' style='font-size:0px;padding:10px 25px;word-break:break-word;' vertical-align='middle'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:separate;line-height:100%;'><tr><td align='center' bgcolor='#02b0ef' role='presentation' style='background:#02b0ef;border:none;border-radius:5px;cursor:auto;mso-padding-alt:10px 25px;' valign='middle'><a href='https://www.j3pz.com/user/reset?permalink=${this.options.permalink}&token=${this.options.token}' style='background:#02b0ef;border-radius:5px;color:#ffffff;display:inline-block;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;font-weight:400;line-height:21px;margin:0;mso-padding-alt:0px;padding:10px 25px;text-decoration:none;text-transform:none;' target='_blank'>重置密码</a></td></tr></table></td></tr>
<tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;line-height:21px;text-align:left;'>如果您记得密码，您可以安全的忽略这封邮件。您的密码不会被更改。</div></td></tr>
</table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]-->

<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#f4f4f4;background-color:#f4f4f4;width:100%;'><tbody><tr><td><div style='margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
<tr><td align='center' style='font-size:0px;padding:5px 25px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;font-style:bold;font-weight:700;line-height:21px;text-align:center;'>剑网3配装器 by 胖叔叔@幽月轮</div></td></tr>
<tr><td align='center' style='font-size:0px;padding:5px 25px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;font-style:bold;line-height:1;text-align:center;'>2013 - ${(new Date()).getFullYear()}. All rights reserved.</div></td></tr>
</table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div></td></tr></tbody></table>
</div></body> </html>
`;
}
