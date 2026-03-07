const SERVICES = [
    // --- Россия (RU) ---
    { url: "https://my.telegram.org/auth/send_password", method: "GET", params: (p) => ({phone: "+" + p}) },
    { url: "https://4lapy.ru/api/auth/newCode/", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://svoefermerstvo.ru/api/ext/rshb-auth/send-verification-code-auth", method: "POST", json: (p) => ({login: "+" + p}) },
    { url: "https://lknpd.nalog.ru/api/v2/auth/challenge/sms/start", method: "POST", json: (p) => ({phone: p, deviceData: {sourceType: "WEB"}}) },
    { url: "https://cdn.beeline.ru/app/inventory/v1/person/send-sms-code/", method: "POST", json: (p) => ({phone: "+" + p}) },
    { url: (p) => `https://api.t2.ru/api/validation/number/${p}`, method: "POST" },
    { url: "https://mobile.vkusvill.ru/api/user/preGenerateVirtualCard/", method: "POST", form: (p) => ({number: p}) },
    { url: "https://api.tinkoff.ru/v1/sign_up", method: "POST", json: (p) => ({phone: "+" + p}) },
    { url: "https://app-api.kfc.ru/api/v1/common/auth/send-validation-code", method: "POST", json: (p) => ({phone: "+" + p}) },
    { url: "https://burgerking.ru/api/v1/auth/login", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://goldapple.ru/gp/api/v1/auth/otp", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://api-prime.ozon.ru/api/sso/send-code", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://city-mobil.ru/api/v2/getcode", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://api.mts.ru/customer/v1/auth/otp", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://dostavista.ru/api/v1/auth/send-verification-code", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://www.citilink.ru/registration/confirm/phone/", method: "POST", form: (p) => ({phone: p}) },
    { url: "https://api.fitmost.ru/v1/auth/otp", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://shop.vsk.ru/api/auth/send_code", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://api.mvideo.ru/internal/rest/model/atg/userprofiling/ProfileActor/send-sms-code", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://m.strahovka.ru/api/auth/send-code", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://ube.e-dostavka.by/api/auth/send_code", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://v-center.ru/api/auth/send-sms", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://api.sunlight.net/v3/customers/authorization/", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://api.ivi.ru/mobileapi/user/register/phone/v6/", method: "POST", form: (p) => ({phone: p}) },
    
    // --- Казахстан (KZ) ---
    { url: "https://sso.mycar.kz/auth/login/", method: "POST", json: (p) => ({phone_number: "+" + p}) },
    { url: "https://chocofood.kz/gateway/user/v2/code/", method: "POST", form: (p) => ({client_id: "11619734", login: p}) },
    { url: (p) => `https://arbuz.kz/api/v1/user/verification/phone?phone=${p}`, method: "GET" },
    { url: "https://api.technodom.kz/kassa/v1/otp/send", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://www.respect-shoes.kz/send_sms", method: "POST", form: (p) => ({tel: p}) },

    // --- Беларусь (BY) ---
    { url: "https://green-dostavka.by/api/v1/auth/request-confirm-code/", method: "POST", json: (p) => ({phoneNumber: p}) },
    { url: "https://sosedi.by/local/api/smsSend.php", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://mak.by/api/auth/send-code/", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://m.sila.by/order/send_sms_code", method: "POST", form: (p) => ({phone: p}) },

    // --- Украина (UA) ---
    { url: "https://www.liqpay.ua/apiweb/login/start", method: "POST", form: (p) => ({phone: p}) },
    { url: "https://uapi.multiplex.ua/auth/login-by-phone", method: "POST", json: (p) => ({phone: p}) },
    { url: "https://my.lifecell.ua/api/v1/auth/otp/send", method: "POST", json: (p) => ({msisdn: p}) },
    { url: (p) => `https://c.ua/index.php?route=account/loginapples/sendSMS&phone=${p}`, method: "GET" }
];
