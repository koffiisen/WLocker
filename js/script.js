var isBrave = false;
if (window.Brave && navigator.brave && navigator.brave.isBrave) {
    isBrave = 'probable';//or some other value, as you wish
    navigator.brave.isBrave().then(function (r) {
        if (r) isBrave = true;
    });
}

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);


var dt = detect.parse(navigator.userAgent);

const btn = $('#dl');
setTimeout(function () {
    if (isEdgeChromium) {
        btn.empty();
        setTimeout(function () {
            btn.append(
                '<a class="btn btn-success btn-xl js-scroll-trigger" href="#EdgeURL">' +
                '            <img style="width: 30px;height: 30px" src="img/edgec.png">' +
                '                Download for Edge Chromium' +
                '</a>'
            )
        }, 200);

    } else {
        setTimeout(function () {
            if (isBrave) {
                btn.empty();
                setTimeout(function () {
                    btn.append(
                        '<a class="btn btn-success btn-xl js-scroll-trigger" href="#chromeURL">' +
                        '            <img style="width: 30px;height: 30px" src="img/brave.png">' +
                        '                Download for Brave' +
                        '</a>'
                    )
                }, 200);
            }
        }, 1200);
        setTimeout(function () {
            if (dt.browser.family.toLowerCase().includes("chrome")) {
                btn.empty();
                setTimeout(function () {
                    btn.append(
                        '<a class="btn btn-success btn-xl js-scroll-trigger" href="#chromeURL">' +
                        '            <img style="width: 30px;height: 30px" src="img/chrome.svg">' +
                        '                Download for Chrome' +
                        '</a>'
                    )
                }, 200);

            }

            if (dt.browser.family.toLowerCase().includes("opera")) {
                btn.empty();
                setTimeout(function () {
                    btn.append(
                        '<a class="btn btn-success btn-xl js-scroll-trigger" href="#operaURL">' +
                        '            <img style="width: 30px;height: 30px" src="img/opera.svg">' +
                        '                Download for Opera' +
                        '</a>'
                    )
                }, 200);

            }

            if (dt.browser.family.toLowerCase().includes("edge")) {
                btn.empty();
                setTimeout(function () {
                    btn.append(
                        '<a class="btn btn-success btn-xl js-scroll-trigger" href="#edgeURL">' +
                        '            <img style="width: 30px;height: 30px" src="img/edge.svg">' +
                        '                Download for Edge' +
                        '</a>'
                    )
                }, 200);

            }

            if (dt.browser.family.toLowerCase().includes("firefox")) {
                btn.empty();
                setTimeout(function () {
                    btn.append(
                        '<a target="_blank" class="btn btn-success btn-xl js-scroll-trigger" href="https://addons.mozilla.org/fr/firefox/addon/wlocker/">' +
                        '            <img style="width: 30px;height: 30px" src="img/firefox.png">' +
                        '                Download for Firefox' +
                        '</a>'
                    )
                }, 200);

            }
        }, 1500)
    }
}, 2000)