const SERVICES = [
    // --- РОССИЯ (RU) ---
    { name: "Tinkoff", url: "https://api.tinkoff.ru/v1/sign_up", method: "POST", formName: "phone", json: (p) => ({phone: "+" + p}) },
    { name: "MTS", url: "https://api.mts.ru/customer/v1/auth/otp", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Ozon", url: "https://api-prime.ozon.ru/api/sso/send-code", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Wildberries", url: "https://passport.wildberries.ru/api/v2/auth/login", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Beeline", url: "https://cdn.beeline.ru/app/inventory/v1/person/send-sms-code/", method: "POST", formName: "phone", json: (p) => ({phone: "+" + p}) },
    { name: "Megafon", url: "https://v-center.ru/api/auth/send-sms", method: "POST", formName: "phone" },
    { name: "VkusVill", url: "https://mobile.vkusvill.ru/api/user/preGenerateVirtualCard/", method: "POST", formName: "number" },
    { name: "Citilink", url: "https://www.citilink.ru/registration/confirm/phone/", method: "POST", formName: "phone" },
    { name: "BurgerKing", url: "https://burgerking.ru/api/v1/auth/login", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "KFC", url: "https://app-api.kfc.ru/api/v1/common/auth/send-validation-code", method: "POST", formName: "phone", json: (p) => ({phone: "+" + p}) },
    { name: "GoldApple", url: "https://goldapple.ru/gp/api/v1/auth/otp", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Sunlight", url: "https://api.sunlight.net/v3/customers/authorization/", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "FixPrice", url: "https://fix-price.com/api/auth/login", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Dostavista", url: "https://dostavista.ru/api/v1/auth/send-verification-code", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Sravni.ru", url: "https://www.sravni.ru/proxy/auth/login", method: "POST", formName: "mobile", json: (p) => ({mobile: p}) },
    { name: "M.Video", url: "https://api.mvideo.ru/internal/rest/model/atg/userprofiling/ProfileActor/send-sms-code", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Eldorado", url: "https://www.eldorado.ru/auth/api/v1/send_code", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Yandex Go", url: "https://passport.yandex.ru/registration-validations/phone-confirm-code", method: "POST", formName: "phone" },
    { name: "SberMarket", url: "https://sbermarket.ru/api/v3/phone_confirmations", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Dodo Pizza", url: "https://dodopizza.ru/api/sendconfirmationcode", method: "POST", formName: "phoneNumber" },
    { name: "Lamoda", url: "https://www.lamoda.ru/api/v1/auth/request_code", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Lenta", url: "https://lenta.com/api/v1/auth/requestSmsCode", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Sportmaster", url: "https://www.sportmaster.ru/api/v1/auth/sendCode", method: "POST", formName: "phone" },
    { name: "Hoff", url: "https://hoff.ru/api/v2/auth/send_code", method: "POST", formName: "phone" },
    { name: "Gloria Jeans", url: "https://www.gloria-jeans.ru/api/auth/send-code", method: "POST", formName: "phone" },
    { name: "Apteka.ru", url: "https://api.apteka.ru/v1/auth/send-code", method: "POST", formName: "phone" },
    { name: "Gora zdorovya", url: "https://gorzdrav.org/api/v1/auth/send-code", method: "POST", formName: "phone" },

    // --- БЕЛАРУСЬ (BY) ---
    { name: "Sosedi BY", url: "https://sosedi.by/local/api/smsSend.php", method: "POST", formName: "phone" },
    { name: "Mak.by", url: "https://mak.by/api/auth/send-code/", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Green BY", url: "https://green-dostavka.by/api/v1/auth/request-confirm-code/", method: "POST", formName: "phoneNumber", json: (p) => ({phoneNumber: p}) },
    { name: "MTS BY", url: "https://recharge.mts.by/api/v1/auth/send-code", method: "POST", formName: "phone" },
    { name: "Beltelecom", url: "https://issa.beltelecom.by/api/auth/send-code", method: "POST", formName: "phone" },

    // --- КАЗАХСТАН (KZ) ---
    { name: "MyCar KZ", url: "https://sso.mycar.kz/auth/login/", method: "POST", formName: "phone_number", json: (p) => ({phone_number: "+" + p}) },
    { name: "Choco", url: "https://chocofood.kz/gateway/user/v2/code/", method: "POST", formName: "login" },
    { name: "Arbuz KZ", url: (p) => `https://arbuz.kz/api/v1/user/verification/phone?phone=${p}`, method: "GET" },
    { name: "Technodom", url: "https://api.technodom.kz/kassa/v1/otp/send", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Magnum KZ", url: "https://magnum.kz/api/auth/send-code", method: "POST", formName: "phone" },

    // --- УКРАИНА (UA) ---
    { name: "LiqPay", url: "https://www.liqpay.ua/apiweb/login/start", method: "POST", formName: "phone" },
    { name: "Multiplex UA", url: "https://uapi.multiplex.ua/auth/login-by-phone", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Lifecell", url: "https://my.lifecell.ua/api/v1/auth/otp/send", method: "POST", formName: "msisdn", json: (p) => ({msisdn: p}) },
    { name: "Zakaz UA", url: "https://api.zakaz.ua/api/v4/auth/login", method: "POST", formName: "phone", json: (p) => ({phone: p}) },
    { name: "Varus UA", url: "https://varus.ua/api/v1/auth/send-code", method: "POST", formName: "phone" },
    { name: "WOG UA", url: "https://wog.ua/api/auth/login", method: "POST", formName: "phone" }
];
