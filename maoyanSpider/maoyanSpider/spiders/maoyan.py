import scrapy
from scrapy.spiders import Rule
from scrapy.linkextractors import LinkExtractor
from scrapy_redis.spiders import RedisCrawlSpider, RedisSpider


class MaoyanSpider(RedisSpider):
    name = "maoyan"
    allowed_domains = ["www.maoyan.com"]
    # start_urls = [f"https://www.maoyan.com/films?showType=3&offset={i}" for i in range(0, 30000, 30)]
    # start_urls = [f"https://www.maoyan.com/films?showType=3&offset=0"]
    redis_key = 'start_urls'  # 开启爬虫钥匙
    base_url = 'https://www.maoyan.com/ajax'
    message = '暂无数据'

    # def __init__(self, *args, **kwargs):
    #     urls = [f"https://www.maoyan.com/films?showType=3&offset={i}" for i in range(0, 30*10, 30)]
    #     for url in urls:
    #         self.server.lpush(self.redis_key, url)
    #     super(MaoyanSpider, self).__init__(*args, **kwargs)

    def create_url(self, url):
        from utils import secret
        md5 = secret.Secret()
        res = md5.c()
        new_url = self.base_url + url + f"?timeStamp={res['timeStamp']}&index={res['index']}&signKey={res['signKey']}&channelId=40011&sVersion=1&webdriver=false"
        return new_url

    def parse(self, response):
        # 拿到所有电影
        movie_list = response.xpath("//dd")
        if not movie_list:
            return
        for item in movie_list:
            temp = dict()
            temp['img_url'] = item.xpath(
                ".//div[@class='movie-poster']/img[2]//@data-src").extract_first() or self.message
            temp['movie_name'] = item.xpath(
                ".//div[@class='channel-detail movie-item-title']/@title").extract_first() or self.message
            inter = item.xpath(
                ".//div[@class='channel-detail channel-detail-orange']/i[@class='integer']//text()").extract_first()
            fraction = item.xpath(
                ".//div[@class='channel-detail channel-detail-orange']/i[@class='fraction']//text()").extract_first()
            text = item.xpath(
                ".//div[@class='channel-detail channel-detail-orange']//text()").extract_first()
            temp['score'] = inter + fraction if (text != '暂无评分') else text

            actors = item.xpath("./div[1]/div[2]/a/div/div[3]/text()").extract() or self.message
            actors_test = ''.join(actors).strip().replace(' ', '').replace(',', '')
            temp['actors'] = actors_test if len(actors_test) > 0 else self.message
            movie_href = item.xpath(".//div[@class='movie-item-hover']/a//@href").extract_first()
            # yield scrapy.Request(url=self.base_url, callback=self.parse_movie_detail)
            new_url = self.create_url(movie_href)
            yield scrapy.Request(url=new_url, callback=self.parse_movie_detail, meta={'temp': temp})

    def parse_movie_detail(self, response):
        temp = response.meta['temp']
        type1 = response.xpath("//ul//li[1][@class='ellipsis']//text()").extract()
        type_ = ''.join(type1).strip().replace(',', '').replace(' ', '').replace('\n', '')
        cnt = response.xpath("//div[@class='film-mbox-item'][3]//text()").extract()
        cnt_ = ''.join(cnt).strip().replace(',', '').replace(' ', '').replace('\n', '')
        movie_info = {
            'img_url': temp['img_url'],
            'movie_name': temp['movie_name'],
            'score': temp['score'],
            'actors': temp['actors'],
            'description': response.xpath("//span[@class='dra']//text()").extract_first() or self.message,
            'time': response.xpath("//ul//li[3][@class='ellipsis']//text()").extract_first() or self.message,
            'type': type_ or self.message,
            'cnt': cnt_ or self.message,
        }
        yield movie_info
