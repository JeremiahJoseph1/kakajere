// function winLoad() {
    window.addEventListener('resize', (function (e) {
        var heightId = document.getElementById('profImg');
        var heightValue = getComputedStyle(heightId).getPropertyValue('height');
        heightId.style.width = heightValue;
    }));
    window.addEventListener('pageshow', (function (e) {
        var heightId = document.getElementById('profImg');
        var heightValue = getComputedStyle(heightId).getPropertyValue('height');
        heightId.style.width = heightValue;
    }));
// }
    window.addEventListener('load', (function (e) {
        var heightId = document.getElementById('profImg');
        var heightValue = getComputedStyle(heightId).getPropertyValue('height');
        heightId.style.width = heightValue;
    }));
// }
// set the image downloading link from the source of the image and download the image
var downLnks = document.querySelectorAll('#mainContent .allThings .imageContainer div div:first-child');

downLnks.forEach((dwnLnk) => {
    dwnLnk.addEventListener('click', () => {
        var attr1 = $(dwnLnk).parent().parent().attr('data-poze');
        var attr2 = $(dwnLnk).parent().parent().attr('data-poze');
        var attr3 = $(dwnLnk).parent().parent().attr('data-poze');
        var href = $(dwnLnk).parent().parent().children('img').attr('src');
        $(dwnLnk).children('a').attr('href', href);
    })
})
// var bodySwitch = document.querySelector('#mainContent');
// bodySwitch.addEventListener('click', (e) => {
//     // alert('one');
//     document.querySelector('#everyKitu').setAttribute('display', 'none');
//     // document.querySelector('#mainContent').setAttribute('min-width', '180px');
// });
// dwnLnk.addEventListener('dblclick', (e) => {
//     alert('two');
//     document.querySelector('#everyKitu').removeAttribute('min-width');
// });