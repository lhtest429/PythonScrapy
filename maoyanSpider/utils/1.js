function c() {
    var e = 'GET',
        _ = 40011,
        t = undefined,
        n = 1,
        a = 1 //随机数
        , o = Date.now(), s = '',
        d = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36', // c = i(_0x5476("0x159")) + e.toUpperCase() + i(_0x5476("0x15a")) + o + i(_0x5476("0x15b")) + d + _0x5476("0x15c") + a + i(_0x5476("0x15d")) + _ + i(_0x5476("0x15e")) + n
        c = 'method=GET&timeStamp=1709006706690&User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36&index=9&channelId=40011&sVersion=1',
        f = '&key=A013F70DB97834C0A5492378BD76C53A';
    return {
        timeStamp: o,
        index: a,
        signKey: c + f,
        channelId: _,
        sVersion: n,
        webdriver: false
    }
}

console.log(c());