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