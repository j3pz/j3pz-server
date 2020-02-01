import { MailTemplate } from './MailTemplate';

interface WelcomeMailOptions {
    title?: string;
    name: string;
    permalink: string;
    token: string;
}

export class WelcomeTemplate extends MailTemplate<WelcomeMailOptions> {
    public text = (): string => `
${this.options.name}侠士您好，感谢您注册剑网3配装器。在开始您的配装之旅前，还有以下几步需要完成。
1、验证您的邮箱
为确保用于注册的邮箱确实属于您本人，我们需要对该邮箱进行验证。如果您没有注册过配装器，请忽略这封邮件。如果您确认自己注册了配装器，请点击下面的链接进行验证。该链接将在30分钟后过期。
https://www.j3pz.com/user/verify/${this.options.permalink}/${this.options.token}
2、阅读使用说明
如果您第一次使用配装器，我们 为您准备了一个详细的使用说明，您可以参考阅读，方便您快速掌握配装器的种种窍门。
https://www.j3pz.com/intro
3、保持联系
我们很高兴您能选择剑网3配装器。在使用过程中，如果您有任何疑问、建议或者意见，可以随时反馈给我们。
https://support.qq.com/products/105376
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
}
@media only screen and (max-width:480px) {

table.full-width-mobile { width: 100% !important; }
td.full-width-mobile { width: auto !important; }

}
@media only screen and (min-width:480px) {
.dys-column-per-100 {
width: 100.000000% !important;
max-width: 100.000000%;
}
.dys-column-px-160 {
width: 160px !important;
max-width: 160px;
}
.dys-column-px-40 {
width: 40px !important;
max-width: 40px;
}
}</style>
<style type='text/css'>a {color: #0000EE;text-decoration: none;}</style><style type="text/css">
@media only screen and (max-width: 480px){
    .emailButton > table {
    max-width: 600px !important;
    width: 100% !important;
    }

    .emailButton a{
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
    <tr><td align='center' style='font-size:0px;padding:0px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:72px;'><img alt='剑网3配装器' height='72' src='https://www.j3pz.com/images/icon.png' style='border:none;display:block;font-size:13px;height:72px;outline:none;text-decoration:none;width:100%;' width='72' /></td></tr></tbody></table></td></tr>
    </table></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]-->

<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]--><div style='margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'><tbody><tr><td style='padding:0px;vertical-align:top;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='' width='100%'>
    <tr><td align='center' style='font-size:0px;padding:0px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:600px;'><img alt='' height='auto' src='https://images.j3pz.com/imgs/title.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='600' /></td></tr></tbody></table></td></tr>
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
    <tr><td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'><div style='color:#4d4d4d;font-family:Oxygen, Helvetica neue, sans-serif;font-size:32px;font-weight:700;line-height:37px;text-align:center;'>欢迎</div></td></tr>      
    <tr><td align='left' style='font-size:0px;padding:10px 25px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;line-height:21px;text-align:left;'>${this.options.name}侠士您好，感谢您注册<a href="https://www.j3pz.com">剑网3配装器</a>。在开始您的配装之旅前，还有以下几步需要完成。</div></td></tr>
    </table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]-->

<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]--><div style='background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#FFFFFF;background-color:#FFFFFF;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
    <tr><td align='left' style='font-size:0px;padding:10px 25px;padding-bottom:5px;word-break:break-word;'><div style='color:#4d4d4d;font-family:Oxygen, Helvetica neue, sans-serif;font-size:24px;font-weight:700;line-height:30px;text-align:left;'>1、验证您的邮箱</div></td></tr>      
    <tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;line-height:21px;text-align:left;'>为确保用于注册的邮箱确实属于您本人，我们需要对该邮箱进行验证。如果您没有注册过配装器，请忽略这封邮件。如果您确认自己注册了配装器，请点击下面的按钮进行验证。该按钮将在30分钟后过期。</div></td></tr>
    <tr><td align='left' class='emailButton' style='font-size:0px;padding:10px 25px;word-break:break-word;' vertical-align='middle'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:separate;line-height:100%;'><tr><td align='center' bgcolor='#02b0ef' role='presentation' style='background:#02b0ef;border:none;border-radius:5px;cursor:auto;mso-padding-alt:10px 25px;' valign='middle'><a href='https://www.j3pz.com/user/verify/${this.options.permalink}/${this.options.token}' style='background:#02b0ef;border-radius:5px;color:#ffffff;display:inline-block;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;font-weight:400;line-height:21px;margin:0;mso-padding-alt:0px;padding:10px 25px;text-decoration:none;text-transform:none;' target='_blank'>点此验证</a></td></tr></table></td></tr>
    <tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;line-height:21px;text-align:left;'>如果点击上面的按钮没有打开任何网页，请复制以下链接并粘贴到浏览器地址栏中进行访问。<br/>https://www.j3pz.com/user/verify/${this.options.permalink}/${this.options.token}</div></td></tr>
    </table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]-->

<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]--><div style='background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#FFFFFF;background-color:#FFFFFF;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
    <tr><td align='left' style='font-size:0px;padding:10px 25px;padding-bottom:5px;word-break:break-word;'><div style='color:#4d4d4d;font-family:Oxygen, Helvetica neue, sans-serif;font-size:24px;font-weight:700;line-height:30px;text-align:left;'>2、阅读使用说明</div></td></tr>      
    <tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;line-height:21px;text-align:left;'>如果您第一次使用配装器，我们 为您准备了一个详细的使用说明，您可以参考阅读，方便您快速掌握配装器的种种窍门。</div></td></tr>
    <tr><td align='left' class='emailButton' style='font-size:0px;padding:10px 25px;word-break:break-word;' vertical-align='middle'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:separate;line-height:100%;'><tr><td align='center' bgcolor='#ffffff' role='presentation' style='background:#ffffff;border:1px solid #02b0ef;border-radius:5px;cursor:auto;mso-padding-alt:10px 25px;' valign='middle'><a href='https://www.j3pz.com/intro' style='background:#ffffff;border-radius:5px;color:#02b0ef;display:inline-block;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;font-weight:400;line-height:16px;margin:0;mso-padding-alt:0px;padding:10px 25px;text-decoration:none;text-transform:none;' target='_blank'>查看说明</a></td></tr></table></td></tr>
    </table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]-->

<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]--><div style='background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#FFFFFF;background-color:#FFFFFF;width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
    <tr><td align='left' style='font-size:0px;padding:10px 25px;padding-bottom:5px;word-break:break-word;'><div style='color:#4d4d4d;font-family:Oxygen, Helvetica neue, sans-serif;font-size:24px;font-weight:700;line-height:30px;text-align:left;'>3、保持联系</div></td></tr>      
    <tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:0px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;line-height:21px;text-align:left;'>我们很高兴您能选择剑网3配装器。在使用过程中，如果您有任何疑问、建议或者意见，可以随时反馈给我们。</div></td></tr>
    <tr><td align='left' class='emailButton' style='font-size:0px;padding:10px 25px;word-break:break-word;' vertical-align='middle'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:separate;line-height:100%;'><tr><td align='center' bgcolor='#ffffff' role='presentation' style='background:#ffffff;border:1px solid #02b0ef;border-radius:5px;cursor:auto;mso-padding-alt:10px 25px;' valign='middle'><a href='https://support.qq.com/product/105376' style='background:#ffffff;border-radius:5px;color:#02b0ef;display:inline-block;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;font-weight:400;line-height:16px;margin:0;mso-padding-alt:0px;padding:10px 25px;text-decoration:none;text-transform:none;' target='_blank'>吐个槽</a></td></tr></table></td></tr>
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

<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#f4f4f4;background-color:#f4f4f4;width:100%;'><tbody><tr><td><div style='margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
<![endif]--><div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
    <tr><td align='center' style='font-size:0px;padding:5px 25px;word-break:break-word;'><div style='color:#777777;font-family:Oxygen, Helvetica neue, sans-serif;font-size:14px;font-style:bold;line-height:1;text-align:center;'>在社交媒体上关注我们，以了解最新信息</div></td></tr>
    </table></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div></td></tr></tbody></table>
<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#f4f4f4;background-color:#f4f4f4;width:100%;'><tbody><tr><td><div style='margin:0px auto;max-width:600px;'><table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody><tr><td style='direction:ltr;font-size:0px;padding:16px;text-align:center;vertical-align:top;'><!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="width:160px;">
<![endif]--><div class='dys-column-px-160 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:0;line-height:0;text-align:left;width:100%;'><!--[if mso | IE]>
<table  role="presentation" border="0" cellpadding="0" cellspacing="0">
<tr>
<![endif]--><!--[if mso | IE]>
<td style="vertical-align:top;width:40px;">
<![endif]--><div class='dys-column-px-40 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:6.666667%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'><tbody><tr><td style='padding:0px;vertical-align:top;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='' width='100%'>
        <tr><td align='center' style='font-size:0px;padding:0 4px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:40px;'><img alt='加入QQ群' height='auto' src='https://images.j3pz.com/imgs/qq.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='40' /></td></tr></tbody></table></td></tr>
    </table></td></tr></tbody></table></div><!--[if mso | IE]>
</td><td style="vertical-align:top;width:40px;">
<![endif]--><div class='dys-column-px-40 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:6.666667%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'><tbody><tr><td style='padding:0px;vertical-align:top;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='' width='100%'>
        <tr><td align='center' style='font-size:0px;padding:0 4px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:40px;'><img alt='关注微信公众号' height='auto' src='https://images.j3pz.com/imgs/wechat.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='40' /></td></tr></tbody></table></td></tr>
    </table></td></tr></tbody></table></div><!--[if mso | IE]>
</td><td style="vertical-align:top;width:40px;">
<![endif]--><div class='dys-column-px-40 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:6.666667%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'><tbody><tr><td style='padding:0px;vertical-align:top;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='' width='100%'>
        <tr><td align='center' style='font-size:0px;padding:0 4px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:40px;'><img alt='关注开发者微博' height='auto' src='https://images.j3pz.com/imgs/weibo.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='40' /></td></tr></tbody></table></td></tr>
    </table></td></tr></tbody></table></div><!--[if mso | IE]>
</td><td style="vertical-align:top;width:40px;">
<![endif]--><div class='dys-column-px-40 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:6.666667%;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'><tbody><tr><td style='padding:0px;vertical-align:top;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='' width='100%'>
        <tr><td align='center' style='font-size:0px;padding:0 4px;word-break:break-word;'><table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'><tbody><tr><td style='width:40px;'><img alt='加入 Telegram 频道' height='auto' src='https://images.j3pz.com/imgs/telegram.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='40' /></td></tr></tbody></table></td></tr>
    </table></td></tr></tbody></table></div><!--[if mso | IE]>
</td>
<![endif]-->
    
    <!--[if mso | IE]>
</tr>
</table>
<![endif]--></div><!--[if mso | IE]>
</td></tr></table>
<![endif]--></td></tr></tbody></table></div></td></tr></tbody></table>
</div></body> </html>
`;
}
