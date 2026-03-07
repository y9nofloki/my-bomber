const SERVICES = [
    // RU
    { name: "Telegram", url: "https://my.telegram.org/auth/send_password", method: "GET", params: (p) => ({phone: "+" + p}) },
    { name: "Tinkoff", url: "https://api.tinkoff.ru/v1/sign_up", method: "POST", json: (p) => ({phone: "+" + p}) },
    { name: "MTS", url: "https://api.mts.ru/customer/v1/auth/otp", method: "POST", json: (p) => ({phone: p}) },
    { name: "Beeline", url: "https://cdn.beeline.ru/app/inventory/v1/person/send-sms-code/", method: "POST", json: (p) => ({phone: "+" + p}) },
    { name: "Yandex Go", url: "https://passport.yandex.ru/registration-validations/phone-confirm-code", method: "POST", form: (p) => ({phone: "+" + p}) },
    { name: "Ozon", url: "https://api-prime.ozon.ru/api/sso/send-code", method: "POST", json: (p) => ({phone: p}) },
    { name: "VkusVill", url: "https://mobile.vkusvill.ru/api/user/preGenerateVirtualCard/", method: "POST", form: (p) => ({number: p}) },
    { name: "Dostavista", url: "https://dostavista.ru/api/v1/auth/send-verification-code", method: "POST", json: (p) => ({phone: p}) },
    { name: "FixPrice", url: "https://fix-price.com/api/auth/login", method: "POST", json: (p) => ({phone: p}) },
    { name: "KFC", url: "https://app-api.kfc.ru/api/v1/common/auth/send-validation-code", method: "POST", json: (p) => ({phone: "+" + p}) },
    { name: "BurgerKing", url: "https://burgerking.ru/api/v1/auth/login", method: "POST", json: (p) => ({phone: p}) },
    { name: "Sravni", url: "https://www.sravni.ru/proxy/auth/login", method: "POST", json: (p) => ({mobile: p}) },
    { name: "Sunlight", url: "https://api.sunlight.net/v3/customers/authorization/", method: "POST", json: (p) => ({phone: p}) },
    { name: "GoldApple", url: "https://goldapple.ru/gp/api/v1/auth/otp", method: "POST", json: (p) => ({phone: p}) },
    { name: "MVideo", url: "https://api.mvideo.ru/internal/rest/model/atg/userprofiling/ProfileActor/send-sms-code", method: "POST", json: (p) => ({phone: p}) },
    { name: "Citilink", url: "https://www.citilink.ru/registration/confirm/phone/", method: "POST", form: (p) => ({phone: p}) },
    { name: "Modulbank", url: "https://my.modulbank.ru/api/v2/auth/phone", method: "POST", json: (p) => ({phone: p}) },
    
    // KZ
    { name: "MyCar KZ", url: "https://sso.mycar.kz/auth/login/", method: "POST", json: (p) => ({phone_number: "+" + p}) },
    { name: "ChocoFood", url: "https://chocofood.kz/gateway/user/v2/code/", method: "POST", form: (p) => ({client_id: "11619734", login: p}) },
    { name: "Arbuz KZ", url: (p) => `https://arbuz.kz/api/v1/user/verification/phone?phone=${p}`, method: "GET" },
    { name: "Technodom", url: "https://api.technodom.kz/kassa/v1/otp/send", method: "POST", json: (p) => ({phone: p}) },
    
    // BY
    { name: "Green BY", url: "https://green-dostavka.by/api/v1/auth/request-confirm-code/", method: "POST", json: (p) => ({phoneNumber: p}) },
    { name: "Sosedi BY", url: "https://sosedi.by/local/api/smsSend.php", method: "POST", json: (p) => ({phone: p}) },
    { name: "Mak BY", url: "https://mak.by/api/auth/send-code/", method: "POST", json: (p) => ({phone: p}) },

    // UA
    { name: "LiqPay", url: "https://www.liqpay.ua/apiweb/login/start", method: "POST", form: (p) => ({phone: p}) },
    { name: "Multiplex UA", url: "https://uapi.multiplex.ua/auth/login-by-phone", method: "POST", json: (p) => ({phone: p}) },
    { name: "Lifecell", url: "https://my.lifecell.ua/api/v1/auth/otp/send", method: "POST", json: (p) => ({msisdn: p}) }
];
