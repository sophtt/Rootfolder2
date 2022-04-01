var score = 0;
var mposX = 0;
var mposY = 0;
var spipewatered = false;

updateProgress();

$('#f1').click(function () {
    $('#f1').fadeOut(2000);
})

$('#spipei').click(function () {
    if (spipewatered) {
        $('#spipei').attr("src", "img/spipe.svg");
    } else {
        $('#spipei').attr("src", "img/spipew.svg");
    }
    score++;
    spipewatered = !spipewatered;
    updateProgress();
})

$('#s1').droppable({
    drop: function () {
        $('#s1').fadeOut(3000);
        score++;
        updateProgress();
    }
});


$('#g').droppable({
    drop: function () {
        if (score >= 5) {
            $('#teethp').attr("src", "img/black.svg");
            score++;
            updateProgress();
        }
    }
});


$('#s2').droppable({
    drop: function () {
        $('#s2').fadeOut(3000);
        score++;
        updateProgress();
    }
});

$('#s3').droppable({
    drop: function () {
        $('#s3').fadeOut(3000);
        score++;
        updateProgress();
    }
});

$('#s4').droppable({
    drop: function () {
        $('#s4').fadeOut(3000);
        score++;
        updateProgress();
    }
});

$(function () {
    $("#kuret").draggable();
});

$(function () {
    $("#spipe").draggable();
});

$(function () {
    $("#apipes").draggable();
});

$(function () {
    $("#breaks").draggable();
});

function updateProgress() {
    const m = 10;
    $("#finishline").css("width", score * m + "%");
    if (score > 2)
    {
        $("#sign1").css("opacity", 1);
    }

    if (score > 5)
    {
        $("#sign2").css("opacity", 1);
    }

    if (score * m >= 100) {
        $("#f2").css("opacity", 1);
        $("#f2").css("z-index", 10);
        $("#logo").css("opacity", 0);
    }
}



