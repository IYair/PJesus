// var grid = document.querySelector('.grid');
// var msnry;

// imagesLoaded(grid, function () {
//     // init Isotope after all images have loaded
//     msnry = new Masonry(grid, {
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-sizer',
//         percentPosition: true,
//         stagger: 15,
//         visibleStyle: {transform: 'translateY(0)',opacity: 1},
//         hiddenStyle: {transform: 'translateY(100)',opacity: 0},
//     });
// });

var $grid = $(".grid").masonry({
    itemSelector: "none", // select none at first
    columnWidth: ".grid-sizer",
    // gutter: '.grid__gutter-sizer',
    percentPosition: true,
    stagger: 30,
    // nicer reveal transition
    visibleStyle: {
        transform: "translateX(0)",
        opacity: 1
    },
    hiddenStyle: {
        transform: "translateX(100px)",
        opacity: 0
    },
});

// get Masonry instance
var msnry = $grid.data("masonry");

// initial items reveal
$grid.imagesLoaded(function () {
    $grid.removeClass("are-images-unloaded");
    $grid.masonry("option", {
        itemSelector: ".grid-item"
    });
    var $items = $grid.find(".grid-item");
    $grid.masonry("appended", $items);
});

//-------------------------------------//
// hack CodePen to load pens as pages

var nextPenSlugs = [
    "page1.html",
];

function getPenPath() {
    var slug = nextPenSlugs[this.loadCount];
    if (slug) {
        return "/pageGallery/" + slug;
    }
}

//-------------------------------------//
// init Infinte Scroll

$grid.infiniteScroll({
    path: getPenPath,
    append: ".grid-item",
    outlayer: msnry,
    status: ".page-load-status",
});