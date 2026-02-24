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
  }
];
