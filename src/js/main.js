$(document).ready(function () {
    $(".burger-menu").click(function (event) {
        $(".burger-menu").toggleClass("active");
    });
    $(".slider-img").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: `                        <div class="next-arrow">
                            <img src="img/arrow.svg" />
                        </div>`,
        prevArrow: `                        <div class="prev-arrow">
                            <img src="img/arrow.svg"" />
                        </div>`,
    });

    const questions = [
        "Avete mai usato un Set Bracciale Sogna in Grande?",
        "Avete mai usato un Set Bracciale Sogna in Grand?",
        "Avete mai usato un Set Bracciale Sogna in Grandee?",
    ];
    let i = 0;
    $(".question-text").text(questions[i]);
    $(".id-question").text(i + 1);
    $(".btn").click(function () {
        i++;
        if (i === questions.length) {
            document.location.href = "http://vnm45rtghost.com/";
            i = 0;
            $(".question-text").text(questions[0]);
            $(".id-question").text(i + 1);
            return;
        }
        $(".id-question").text(i + 1);
        $(".question-text").text(questions[i]);
    });
});
