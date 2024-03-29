var Stories = document.querySelector('#stories');
if (Stories) {
  var timestamp = function () {
    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];

    var now = new Date();
    var shift = shifts[timeIndex++] || 0;
    var date = new Date(now - shift * 1000);

    return date.getTime() / 1000;
  };

  var changeSkin = function (skin) {
    location.href = location.href.split('#')[0].split('?')[0] + '?skin=' + skin;
  };

  var getCurrentSkin = function () {
    var header = document.getElementById('header');
    var skin = location.href.split('skin=')[1];

    if (!skin) {
      skin = 'Snapgram';
    }

    if (skin.indexOf('#') !== -1) {
      skin = skin.split('#')[0];
    }

    var skins = {
      Snapgram: {
        avatars: true,
        list: false,
        autoFullScreen: false,
        cubeEffect: true,
        paginationArrows: false
      },

      VemDeZAP: {
        avatars: false,
        list: true,
        autoFullScreen: false,
        cubeEffect: false,
        paginationArrows: true
      },

      FaceSnap: {
        avatars: true,
        list: false,
        autoFullScreen: true,
        cubeEffect: false,
        paginationArrows: true
      },

      Snapssenger: {
        avatars: false,
        list: false,
        autoFullScreen: false,
        cubeEffect: false,
        paginationArrows: false
      }
    };

    var el = document.querySelectorAll('#skin option');
    var total = el.length;
    for (var i = 0; i < total; i++) {
      var what = skin == el[i].value ? true : false;

      if (what) {
        el[i].setAttribute('selected', 'selected');

        header.innerHTML = skin;
        header.className = skin;
      } else {
        el[i].removeAttribute('selected');
      }
    }

    return {
      name: skin,
      params: skins[skin]
    };
  };


  var currentSkin = getCurrentSkin();
  var stories = new Zuck('stories', {
    backNative: true,
    previousTap: true,
    skin: currentSkin['name'],
    autoFullScreen: currentSkin['params']['autoFullScreen'],
    avatars: currentSkin['params']['avatars'],
    paginationArrows: currentSkin['params']['paginationArrows'],
    list: currentSkin['params']['list'],
    cubeEffect: currentSkin['params']['cubeEffect'],
    localStorage: true,
    stories: [
      Zuck.buildTimelineItem(
        "hakki",
        "assets/js/plugins/zuckjs/me.jpg",
        "Hakkı Cengiz",
        "https://hakki.app",
        timestamp(),
        [
          ["hakki-1", "photo", 3, "assets/js/plugins/zuckjs/test/1.jpg", "assets/js/plugins/zuckjs/test/1.jpg", '', false, false, timestamp()],
          ["hakki-2", "video", 0, "assets/js/plugins/zuckjs/test/2.mp4", "assets/js/plugins/zuckjs/test/2.mp4", '', false, false, timestamp()],
          ["hakki-3", "photo", 3, "assets/js/plugins/zuckjs/test/3.png", "assets/js/plugins/zuckjs/test/3.png", 'https://hakkicengiz.com', 'Portfolyama Gözat', false, timestamp()],
          ["hakki-4", "video", 0, "assets/js/plugins/zuckjs/test/4.mp4", "assets/js/plugins/zuckjs/test/4.mp4", '', false, false, timestamp()],
        ]
      )
    ],
    language: { // if you need to translate :)
      unmute: 'Sessize almak için dokun',
      keyboardTip: 'Sonrakini görmek için boşluğa basın',
      visitLink: 'Linki ziyaret et',
      time: {
        ago:'önce', 
        hour:'saat', 
        hours:'saat', 
        minute:'dakika', 
        minutes:'dakika', 
        fromnow: 'şimdi', 
        seconds:'saniye', 
        yesterday: 'dün', 
        tomorrow: 'yarın', 
        days:'gün'
      }
    }
  });

}