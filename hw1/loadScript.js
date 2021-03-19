function loadScript (url, callback) {
    const element = document.createElement ('script')
    element.src = url;
    element.type = 'text/javascript';
    element.onload = callback;

    document.appendChild(element)
}


loadScript (['/src/common.js', 'src/luxon.js'],  function () {
    utility();
})


