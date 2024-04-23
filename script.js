const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
var video = fixed.querySelector("video");

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
});

// Add event listeners for hover effect on each individual element
var elem1 = document.querySelector("#elem1");
elem1.addEventListener("mouseenter", function () {
    var videoSrc = elem1.getAttribute("data-video-src");
    var videoType = elem1.getAttribute("data-video-type");
    fixed.innerHTML = `<video autoplay muted loop><source src="${videoSrc}" type="${videoType}"></video>`;
    video = fixed.querySelector("video"); // Get reference to the newly added video element
    addHoverEffect(video);
});

var elem2 = document.querySelector("#elem2");
elem2.addEventListener("mouseenter", function () {
    var videoSrc = elem2.getAttribute("data-video-src");
    var videoType = elem2.getAttribute("data-video-type");
    fixed.innerHTML = `<video autoplay muted loop><source src="${videoSrc}" type="${videoType}"></video>`;
    video = fixed.querySelector("video"); // Get reference to the newly added video element
    addHoverEffect(video);
});

var elem3 = document.querySelector("#elem3");
elem3.addEventListener("mouseenter", function () {
    var videoSrc = elem3.getAttribute("data-video-src");
    var videoType = elem3.getAttribute("data-video-type");
    fixed.innerHTML = `<video autoplay muted loop><source src="${videoSrc}" type="${videoType}"></video>`;
    video = fixed.querySelector("video"); // Get reference to the newly added video element
    addHoverEffect(video);
});

var elem4 = document.querySelector("#elem4");
elem4.addEventListener("mouseenter", function () {
    var videoSrc = elem4.getAttribute("data-video-src");
    var videoType = elem4.getAttribute("data-video-type");
    fixed.innerHTML = `<video autoplay muted loop><source src="${videoSrc}" type="${videoType}"></video>`;
    video = fixed.querySelector("video"); // Get reference to the newly added video element
    addHoverEffect(video);
});

var elem5 = document.querySelector("#elem5");
elem5.addEventListener("mouseenter", function () {
    var videoSrc = elem5.getAttribute("data-video-src");
    var videoType = elem5.getAttribute("data-video-type");
    fixed.innerHTML = `<video autoplay muted loop><source src="${videoSrc}" type="${videoType}"></video>`;
    video = fixed.querySelector("video"); // Get reference to the newly added video element
    addHoverEffect(video);
});

var elem6 = document.querySelector("#elem6");
elem6.addEventListener("mouseenter", function () {
    var videoSrc = elem6.getAttribute("data-video-src");
    var videoType = elem6.getAttribute("data-video-type");
    fixed.innerHTML = `<video autoplay muted loop><source src="${videoSrc}" type="${videoType}"></video>`;
    video = fixed.querySelector("video"); // Get reference to the newly added video element
    addHoverEffect(video);
});

var elem7 = document.querySelector("#elem7");
elem7.addEventListener("mouseenter", function () {
    var videoSrc = elem7.getAttribute("data-video-src");
    var videoType = elem7.getAttribute("data-video-type");
    fixed.innerHTML = `<video autoplay muted loop><source src="${videoSrc}" type="${videoType}"></video>`;
    video = fixed.querySelector("video"); // Get reference to the newly added video element
    addHoverEffect(video);
});

function addHoverEffect(video) {
    video.addEventListener("mouseenter", function () {
        video.style.transform = "scale(1.05)";
        video.style.transition = "transform 0.3s ease";
    });
    video.addEventListener("mouseleave", function () {
        video.style.transform = "scale(1)";
    });
}
