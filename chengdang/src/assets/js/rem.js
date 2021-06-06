(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        // 获取屏幕宽度
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 7.5;  // 将屏幕宽度分成7.5份， 1份为1rem 
        docEl.style.fontSize = rem + 'px';

    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false)
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window)