# 访问配置信息
MAX_RETRY = 5
POOL = 1
LOG_LEVEL = 'TRACE'
LOG_FILE_LEVEL = 'INFO'

CODE_PD = '129892'
CODE_KEY = 'spVAx85F1QSLMwqLrusOF9o88eNU+chu'
# PROXY_API = 'http://route.xiongmaodaili.com/xiongmao-web/api/gbip?secret=d88522c1d36f8e52a043f8b516029bfd&orderNo=GB20231010111212bUldzOoQ&count=5&isTxt=1&proxyType=1'
PROXY_API = 'http://route.xiongmaodaili.com/xiongmao-web/api/glip?secret=cb4fb9456fcbf0035d4373c5f4b58231&orderNo=GL202311201900406HHeCsrO&count=1&isTxt=1&proxyType=1'
USE_PROXY = False


class AliMysql:
    MYSQL_HOST = '127.0.0.1'
    MYSQL_PORT = 3306
    MYSQL_USER = 'root'
    MYSQL_PSW = '123456'
