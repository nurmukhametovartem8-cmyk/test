import json
import requests  # библиотека для отправки логов на другой сервер
from fastapi import FastAPI, Request

app = FastAPI()

@app.post("/")
async def handler(request: Request):
    # Получаем тело POST-запроса (аналог event.get('body'))
    body_bytes = await request.body()
    body_str = body_bytes.decode('utf-8')

    # Сюда вы вставляете отправку логов на ваш сервер аналитики
    # Например:
    # requests.post("https://your-analytics-server.com", data=body_str)
    
    print(f"Полученные логи: {body_str}")  # это отобразится в админке

    # Возвращаем ответ
    return {"statusCode": 200, "body": "Hello World!"}
