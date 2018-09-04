const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: '小跳蛙',
        artist: '青蛙乐队',
        url: 'http://www.ytmp3.cn/down/46420.mp3',
        cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
      }
	{
        name: 'さよならの夏～コクリコ坂から',
        artist: '手嶌葵',
        url: 'http://www.ytmp3.cn/down/47264.mp3',
        cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
      }
    ]
});