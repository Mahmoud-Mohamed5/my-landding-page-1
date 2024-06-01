$("document").ready(function(){
    $("#toggel").click(function(){
        let x = $("#toggel").attr("class")

        if (x == "toggel") {
            $("#toggel").attr("class", "active")
            $("#navBar").attr("style", "display: block;")
        }
        if (x == "active") {
            $("#toggel").attr("class", "toggel")
            $("#navBar").attr("style", "display: none;")
        }
    })
    $('.projects__btn').click(function(){
        $(".projects_box").attr("style", "display: flex;")
        $(".skills_box-card").attr("style", "display: none;")
        $('.projects__btn').attr("class", "projects__btn active")
        $('.skills__btn').attr("class", "skills__btn ")
    })
    $('.skills__btn').click(function(){
        $(".skills_box-card").attr("style", "display: flex;")
        $(".projects_box").attr("style", "display: none;")
        $('.projects__btn').attr("class", "projects__btn ")
        $('.skills__btn').attr("class", "skills__btn active")
    })

    // SLIDER IMHGS RANDOM
    setInterval(function(){
        let x = Math.floor(Math.random() * 6 + 1);
        $(".slider").html(`<img src="imgs/slider/slider (${x}).jpg">`)
    }, 6000)
})