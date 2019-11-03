
var userPlayerSelected = false;
var versusPlayerSelected = false;
var attacks = 0;
var player = "";
var versus = "";
var userHealth = 0;
var versusHealth = 0;
var userAttack = 0; 
var versusAttack = 0; 
var userHealthStatus = 0;
var versusHealthStatus = 0; 

var Superman = {
    Name:"Superman",
    healthPoints:300,
    attackPoints:55,
    countAttack:20,
}

var Batman = {
    Name:"Batman",
    healthPoints: 250,
    attackPoints: 45,
    countAttack: 35,
}

var IronMan = {
    Name:"IronMan",
    healthPoints: 280,
    attackPoints: 40,
    countAttack: 30,
}

var players = [Superman,Batman,IronMan];



$(document).ready(function() {

    players.forEach(function(arrayItem){

        var newPlayer = $("<div>")
        newPlayer.addClass("player")
        newPlayer.attr("id",arrayItem.Name)
        newPlayer.attr("healthPoints",arrayItem.healthPoints)
        newPlayer.attr("attackPoints",arrayItem.attackPoints)
        newPlayer.attr("countAttack",arrayItem.countAttack)
        newPlayer.attr("name",arrayItem.Name)
        newPlayer.text(arrayItem.Name)
        $("#character-select").append(newPlayer)

    });

    $(".player").on("click", function() {
    
    //checks to see if a user player and versus player has been selected 
    if(userPlayerSelected && versusPlayerSelected){

    }else{
            
            if(userPlayerSelected){
                $(this).clone().appendTo("#versus-select");
                versusPlayerSelected = true;
                if($(this).text() ==="Superman"){
                    $("#versus-health").text(Superman.healthPoints)
                    $("#versus-attack").text(Superman.attackPoints)
                    $("#versus-countAttack").text(Superman.countAttack)
                }if ($(this).text() ==="Batman") {
                    $("#versus-health").text(Batman.healthPoints)
                    $("#versus-attack").text(Batman.attackPoints)   
                    $("#versus-countAttack").text(Batman.countAttack) 
                }if ($(this).text() ==="IronMan") {
                    $("#versus-health").text(IronMan.healthPoints)
                    $("#versus-attack").text(IronMan.attackPoints) 
                    $("#versus-countAttack").text(IronMan.countAttack)             
                }
                $("#lblv-health").text("Health: ")
                $("#lblv-attack").text("Attack: ")  
                $("#lblv-countAttack").text("Counter: ") 

                $("#stats-versus").show();
                versus = $(this).text();
                console.log(player);
                $(this).remove();
            }else{
                $(this).clone().appendTo("#user-select");
                userPlayerSelected = true;
                if($(this).text() ==="Superman"){
                    $("#user-health").text(Superman.healthPoints)
                    $("#user-attack").text(Superman.attackPoints)
                    $("#user-countAttack").text(Superman.countAttack)
                }if ($(this).text() ==="Batman") {
                    $("#user-health").text(Batman.healthPoints)
                    $("#user-attack").text(Batman.attackPoints)  
                    $("#user-countAttack").text(Batman.countAttack)  
                }if ($(this).text() ==="IronMan") {
                    $("#user-health").text(IronMan.healthPoints)
                    $("#user-attack").text(IronMan.attackPoints)   
                    $("#user-countAttack").text(Iron.countAttack)             
                }
                $("#lblu-health").text("Health: ")
                $("#lblu-attack").text("Attack: ")  
                $("#lblu-countAttack").text("Counter: ") 

                $("#stats-user").show();
                player = $(this).text();
                console.log(versus)
                $(this).remove();
                
            } 
                
    }  
    });

    $("#btn-attack").on("click", function() {

        if(userPlayerSelected && versusPlayerSelected){
            var userHealth = parseInt($("#user-health").text());
            var userAttack = parseInt($("#user-attack").text());

            var versusHealth = parseInt($("#versus-health").text());
            var versusAttack = parseInt($("#versus-countAttack").text());

            versusHealthStatus = versusHealth - userAttack - attacks; 
            userHealthStatus = userHealth - versusAttack; 
            
            $("#user-health").text(userHealthStatus);
            $("#versus-health").text(versusHealthStatus);
            $("#user-attack").text(userAttack + attacks);
            attacks = attacks + 10;
                if(userHealthStatus > 0 && versusHealthStatus <= 0){
                    alert(player + "  Wins!!!")
                    $("#versus-select").empty();
                    $("#stats-versus").hide();
                    $("#lbl-versus").remove()
                }
                if(userHealthStatus <= 0 && versusHealthStatus > 0){
                    alert(versus + "  Wins!!!")

                }      

        }else{

            alert("please select your opponent")


        }




    });

    









































});