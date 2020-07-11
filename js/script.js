const ua = window.navigator.userAgent.toLowerCase();
const isChrome = /chrome|crios/.test(ua) && !/edge|opr\//.test(ua)
const isBrave = isChrome && !window.googletag;


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
                '<a class="btn btn-success btn-xl js-scroll-trigger" href="#chromeURL">' +
                '            <img style="width: 30px;height: 30px" src="img/edge.png">' +
                '                Download for Brave' +
                '</a>'
            )
        }, 200);

    } else {
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
                    '            <img style="width: 30px;height: 30px" src="img/edge.png">' +
                    '                Download for Edge' +
                    '</a>'
                )
            }, 200);

        }

        if (dt.browser.family.toLowerCase().includes("firefox")) {
            btn.empty();
            setTimeout(function () {
                btn.append(
                    '<a class="btn btn-success btn-xl js-scroll-trigger" href="#firefoxUrl">' +
                    '            <img style="width: 30px;height: 30px" src="img/firefox.png">' +
                    '                Download for Firefox' +
                    '</a>'
                )
            }, 200);

        }
    }
}, 2000)