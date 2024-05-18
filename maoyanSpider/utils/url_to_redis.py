import redis

r = redis.Redis(host='127.0.0.1', port=6379)

urls = [f"https://www.maoyan.com/films?showType=3&offset={i}" for i in range(0, 30 * 10, 30)]
for url in urls:
    r.lpush('start_urls', url)
