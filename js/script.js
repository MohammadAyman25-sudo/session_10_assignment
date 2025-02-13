let expression = "";
let del = $(".del");
let clear = $(".clear");
let numbers = $(".number");
let equals = $(".evaluate");
let opearation = $(".operation");

numbers.each(function (){
    $(this).click(function (){
        opearation.each(function(){
            $(this).prop("disabled", false);
        });
        let num = $(".result").text();
        $(".result").text(`${num}${$(this).text()}`);
    });
});

clear.click(function (){
    $(".result").text("");
    $(".operations").text("");
    expression = "";
    $("button").each(function (){
        $(this).prop("disabled", false);
    });
    if ($(".result").text() == "") {
      $(this).prop("disabled", true);
    }
});

del.click(function (){
    let num = $(".result").text();
    $(".result").text(num.slice(0, -1));
    expression = "";
    if ($(".result").text() == "") {
      $(this).prop("disabled", true);
    }
});

opearation.each(function(){
    if ($(".result").text() == "") {
        $(this).prop("disabled", true);
    }
    $(this).click(function(){
        expression = `${expression}${$(".result").text()}`;
        if($(this).text() !== '=') {
            expression = `${expression}${$(this).text()}`;
        }
        $(".result").text("");
        $(".operations").text($(this).text());
    });
});

equals.click(function(){
    try {
        let result = eval(expression);
        $(".result").text(result);
    }
    catch(err) {
        $(".result").text("Invalid Expression");
    }
    $("button").each(function() {
        $(this).prop("disabled", true);
    });
    clear.prop("disabled", false);
});
