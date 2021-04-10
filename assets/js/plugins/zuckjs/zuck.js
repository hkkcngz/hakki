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
        "http://127.0.0.1:5501/images/me.jpg",
        "Hakkı",
        "https://hakki.app",
        timestamp(),
        [
          ["hakki-1", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '', false, false, timestamp()],
          ["hakki-2", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg", '', false, false, timestamp()],
          ["hakki-3", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", 'https://ramon.codes', 'Visit my Portfolio', false, timestamp()]
        ]
      ),
      Zuck.buildTimelineItem(
        "gorillaz",
        "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg",
        "Gorillaz",
        "",
        timestamp(),
        [
          ["gorillaz-1", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '', false, false, timestamp()],
          ["gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, timestamp()],
        ]
      ),
      Zuck.buildTimelineItem(
        "ladygaga",
        "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg",
        "Lady Gaga",
        "",
        timestamp(),
        [
          ["ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, timestamp()],
          ["ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", 'http://ladygaga.com', false, false, timestamp()],
        ]
      ),
      Zuck.buildTimelineItem(
        "starboy",
        "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg",
        "The Weeknd",
        "",
        timestamp(),
        [
          ["starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp()]
        ]
      ),
      Zuck.buildTimelineItem(
        "riversquomo",
        "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg",
        "Rivers Cuomo",
        "",
        timestamp(),
        [
          ["riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '', false, false, timestamp()]
        ]
      )
    ]
  });

}