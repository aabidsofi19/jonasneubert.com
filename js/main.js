/* Author: Jonas Neubert */

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function()
{

    // scroller on project sites
    $('#tilenavLeft').click(function () {
        $.scrollTo( {top: '0px', left: '-=420px'}, {axis:'x', duration: 400} );
        return false;
    });

    $('#tilenavRight').click(function () {
        $.scrollTo( {top: '0px', left: '+=420px'}, {axis:'x', duration: 400} );
        return false;
    });

    window.onmousewheel = function(e) {

        var atBottom = ( $(window).scrollTop() + $(window).height() == $(document).height() );
        var atRight = ( $(window).scrollLeft() + $(window).width() == $(document).width() );
        var atTop = ( $(window).scrollTop() == 0 );
        var atLeft = ( $(window).scrollLeft() == 0 );

        var delta = 0;
        // normalize the delta
        if (e.wheelDelta) {
            // IE
            delta = -e.wheelDelta / 30.0;
        } else if (e.detail) {
            // ff and chrome
            delta = e.detail;
        }

        var goingUp = ( delta < 0 );
        var goingDown = ( delta > 0 );

        if( (atTop && goingUp && !atLeft) || (atBottom && goingDown && !atRight) ) {
            e.stopPropagation();
            e.preventDefault();

            // fiddle with this constant to speed up or slow down scrolling
            delta *= 20.0;

            deltastring = "";
            if (delta < 0) {deltastring = "-=" + Math.abs(delta).toString() + "px"}
            else {deltastring = "+=" + Math.abs(delta).toString() + "px"}

            $.scrollTo( {top: '0px', left: deltastring}, {axis:'x', duration: 1} );
        }
    };


    // set the square parameters (in pixels)
    var SQ_WIDTH = 15;
    var SQ_HEIGHT = 15;
    var SQ_BORDER_WIDTH = 1;
    var SQ_OFFSET_X = 2;  // x offset of top left cube from edge of window
    var SQ_OFFSET_Y = 5;  // y offset of top left cube from edge of window


    function jumbleSquares ( canvasElement ) {

        // set the cube parameters
        var cubeWidth = 16;
        var cubeHeight = 16;
        var cubeSpacingX = 15;
        var cubeSpacingY = 15;

        // cache the jquery element
        var canvasElJq = $(this);

        // we need to set the html width in pixels or else the canvas content will be stretched
        var bodyWidth = $('body').width();
        canvasElJq.attr( 'width', bodyWidth + 'px' );

        // get the canvas DOM element's 2d context
        var ctx = canvasElJq.get(0).getContext('2d');

        var noOfColumns = 1 + Math.ceil(bodyWidth/cubeSpacingX);

        ctx.fillStyle = "#ffe400";
        for (var i=0; i<10; i++) {
            for (var j=0; j<noOfColumns; j++) {
                if ( i ==0 || Math.random() < (0.1+i*0.08) ) {
                    ctx.fillRect(j*cubeSpacingX, i*cubeSpacingY, cubeWidth, cubeHeight);
                }
            }
        }
    }


    var getCurrentMarginTop = function (el) {
        // el.css('margin-top') returns a string in the format "123px"
        return parseInt(el.css('margin-top'), 10);
    };


    // snap elements that visually interact with the background grid to the
    // background grid
    var snapToGrid = function () {
        var wrapper = $(this);
        var el = wrapper.children().first();

        // calculate how many pixels the elements needs to be pushed to align
        // with the grid
        var origVertOffsetPx = el.offset().top - getCurrentMarginTop(wrapper);
        var curHorOffsetPx = el.offset().left;
        var spareVertPixels = (origVertOffsetPx - SQ_OFFSET_Y) % SQ_HEIGHT;
        var spareHorPixels = (curHorOffsetPx - SQ_OFFSET_X) % SQ_WIDTH;
        var pushDownByPixels = (SQ_HEIGHT - spareVertPixels) % SQ_HEIGHT;
        var pushLeftByPixels = (SQ_WIDTH - spareHorPixels) % SQ_WIDTH;

        // Using el.offset to reposition set's the elements position style attr
        // to "relative" and moves only this element. This works for the
        // horizontal repositioning here where we just want to snap `el` to the
        // grid without worrying about adjacent elements. For the vertical
        // case, however, the goal is to push `el` down to snap to the grid AND
        // also push all subsequent elements. Adjusting the top margin is the
        // better way to achieve that.
        // el.offset({
        //     left: curHorOffsetPx + pushLeftByPixels,
        //     top: curVertOffsetPx,
        // });
        wrapper.css('margin-top', pushDownByPixels + 'px');
        wrapper.css('margin-left', pushLeftByPixels + 'px');
    };

    // snap-to-grids need to be recomputed when resizing the window
    $(window).resize(function() {
        $('.snap-to-grid-wrapper').each(snapToGrid);
        $('canvas.randomsquares').each(jumbleSquares);
    });

    // wrap every snap-to-grid element on page load
    $('.snap-to-grid').wrap('<div class="snap-to-grid-wrapper"></div>');
    $('.snap-to-grid-wrapper').each(snapToGrid);

    // run the jumbleSquares function for each canvas with class randomsquares
    $('canvas.randomsquares').each(jumbleSquares);
});
