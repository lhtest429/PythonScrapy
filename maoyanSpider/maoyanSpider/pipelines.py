# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymysql


class MaoyanspiderPipeline:
    def process_item(self, item, spider):
        return item


class MysqlPipeline(object):
    def __init__(self, db_settings):
        self.conn = None
        self.cursor = None
        self.db_settings = db_settings

    @classmethod  # crawler 爬虫对象
    def from_crawler(cls, crawler):
        return cls(
            db_settings={
                'host': crawler.settings.get('MYSQL_HOST'),
                'user': crawler.settings.get('MYSQL_USER'),
                'password': crawler.settings.get('MYSQL_PASSWORD'),
                'database': crawler.settings.get('MYSQL_DATABASE'),
                'port': crawler.settings.get('MYSQL_PORT', 3306),
                'charset': 'utf8mb4',
            }
        )

    def open_spider(self, spider):
        self.conn = pymysql.connect(**self.db_settings)
        self.cursor = self.conn.cursor()

    def close_spider(self, spider):
        self.conn.close()

    def process_item(self, item, spider):
        # 将item插入数据库
        sql = "INSERT INTO mao_yan (movie_name, img_url,score,description,time,type,cnt) VALUES (%s,%s,%s,%s,%s,%s,%s)"
        values = (item['movie_name'], item['img_url'], item['score'], item['description'], item['time'], item['type'],
                  item['cnt'])
        try:
            self.cursor.execute(sql, values)
            self.conn.commit()
        except Exception as e:
            self.conn.rollback()
            spider.log(f"Error inserting data into MySQL: {e}")

        return item
