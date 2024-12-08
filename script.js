$(document).ready(function(){
    $("#clickMe").click(function(){
        $("#message").show();
    });

    $("#changeColors").click(function(){
        $("li").each(function(index){
            if(index % 2 == 0){
                $(this).css("color", "red");
            } else {
                $(this).css("color", "blue");
            }
        });
    });

    $("#addItem").click(function(){
        var newItem = $("#newItem").val();
        if(newItem){
            $("ul").append("<li>" + newItem + "</li>");
            $("#newItem").val("");
        }
    });

    $("#animate").click(function(){
        $("#animateBox").animate({
            width: "200px",
            height: "200px",
            left: "100px"
        }, "slow");
    });

    $("#hoverButton").hover(
        function(){
            $("#hoverMessage").show();
        },
        function(){
            $("#hoverMessage").hide();
        }
    );

    // Task 7: Build a To-Do List
    $("#addTask").click(function(){
        var task = $("#taskInput").val();
        if(task){
            $("#taskList").append("<li>" + task + "</li>");
            $("#taskInput").val("");
        }
    });

    $("#taskList").on("click", "li", function(){
        $(this).css("text-decoration", "line-through");
    });

    $("#clearAll").click(function(){
        $("#taskList").empty();
    });

    $("#simpleForm").submit(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        if(name && email){
            $("#successMessage").fadeIn().delay(3000).fadeOut();
        }
    });

    $("#fadeButton").click(function(){
        $("#fadeElement").fadeToggle();
    });
});
