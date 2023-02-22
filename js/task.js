// $(document).ready(function () {
//     $(".accordion").click(function () {
//         $(this).next().toggle();
//     });
// });
$(".accordion").click(function () {
    if ($(this).hasClass("active")) {
        $(".accordion.active").removeClass("active");
        return;
    }
    $(".accordion.active").removeClass("active");
    $(this).addClass("active");
});

$(document).ready(function () {
    $("#navigation").css({ "position": "fixed" });
});
$("#dropdownbtn").click(function () {
    $("#dropdown-content").toggle();
});
$(document).ready(function () {
    $(".extrainfo").click(function () {
        $(this).next().toggle();
    });
});

var slides = ["assets/portfolio1.jpg", "assets/portfolio4.jpg", "assets/portfolio3.jpg", "assets/portfolio2.png", "assets/blog2.png"]
var start = 0;
setInterval(function () {
    if (start < slides.length) {
        start = start + 1;
    }
    else {
        start = 1;
    }
    $("#slideimg").attr("src", slides[start - 1]);
}, 1000);

function gototop() {
    $(window).scrollTop(0);
}

function openinfo(evt, post) {
    var ourteam, tablinks;
    ourteam = $(".ourteam");
    ourteam.hide();
    tablinks = $(".tablinks");
    tablinks.removeClass("active");
    $("#" + post).show();
    $(evt.currentTarget).addClass("active");
}
let navOp = 1;
setInterval(function () {
    navOp = (navOp + 0.5) % 3;
    $("#navigation").css("opacity", navOp);
}, 500);


function openModal() {
    $("#myModal").show();
}

function closeModal() {
    $("#myModal").hide();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = $(".mySlides");
    let dots = $(".demo");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.hide();
    for (i = 0; i < dots.length; i++) {
        dots.removeClass("active");
    }
    slides.eq(slideIndex - 1).show();
    dots.eq(slideIndex - 1).addClass("active");
}
function validateForm() {
    let name = $("form[name='enquireus'] input[name='name']").val();
    let email = $("form[name='enquireus'] input[name='email']").val();
    let phoneno = $("form[name='enquireus'] input[name='phoneno']").val();
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    else if (phoneno == "") {
        alert("Phone number must be filled out");
        return false;
    }
    else {
        alert("Done");
    }
}
