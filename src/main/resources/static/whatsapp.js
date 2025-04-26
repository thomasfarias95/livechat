const url = 'https://cdn.waplus.io/waplus-crm/settings/ossembed.js';
const s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
const options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#16BE45",
        "ctaText": "Suporte",
        "borderRadius": "8",
        "marginLeft": "10",
        "marginBottom": "10",
        "marginRight": "10",
        "position": "right",
        "textColor": "#ffffff",
        "phoneNumber": "+5511993404466",
        "messageText": "Olá, como posso lhe ajudar?",
        "trackClick": true
    }
}
s.onload = function () {
    CreateWhatsappBtn(options);
};
const x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);