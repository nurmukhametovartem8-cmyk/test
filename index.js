export default {
  async fetch(request, env, ctx) {
    try {
      // Это аналог вашей строки: body = event.get('body', '')
      const bodyText = await request.text();

      // Это аналог вашего: str(json.loads(body)) для вывода логов в консоль
      console.log("Полученные логи:", bodyText);

      // ЕСЛИ НАДО ОТПРАВИТЬ ЛОГИ НА ВНЕШНИЙ СЕРВЕР АНАЛИТИКИ:
      // Раскомментируйте строки ниже и замените URL на ваш сервак:
      /*
      await fetch('https://xn-----6kccahcxb7aaazl2a7bcn4a0i.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bodyText
      });
      */

    } catch (error) {
      console.error("Ошибка обработки запроса:", error);
    }

    // Это аналог вашего return { 'statusCode': 200, 'body': 'Hello World!' }
    return new Response('Hello World!', {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  },
};
