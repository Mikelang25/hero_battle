
var userPlayerSelected = false;
var versusPlayerSelected = false;
var attacks = 0;
var player = "";
var versus = "";
var enemiesRemain = 0;
var userHealth = 0;
var versusHealth = 0;
var userAttack = 0; 
var versusAttack = 0; 
var userHealthStatus = 0;
var versusHealthStatus = 0; 
var totalDamage = 0;

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

var Wolverine = {
    Name:"Wolverine",
    healthPoints: 320,
    attackPoints: 65,
    countAttack: 38,
}

var players = [Superman,Batman,IronMan,Wolverine];



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
                }if ($(this).text() ==="Wolverine") {
                    $("#versus-health").text(Wolverine.healthPoints)
                    $("#versus-attack").text(Wolverine.attackPoints) 
                    $("#versus-countAttack").text(Wolverine.countAttack)             
                }
                $("#lblv-health").text("Health: ")
                $("#lblv-attack").text("Attack: ")  
                $("#lblv-countAttack").text("Counter: ") 

                $("#stats-versus").show();
                versus = $(this).text();
                $("#battle-status").text("Begin the battle!")
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
                }if ($(this).text() ==="Wolverine") {
                    $("#user-health").text(Wolverine.healthPoints)
                    $("#user-attack").text(Wolverine.attackPoints)   
                    $("#user-countAttack").text(Wolverine.countAttack)             
                }
                $("#lblu-health").text("Health: ")
                $("#lblu-attack").text("Attack: ")  
                $("#lblu-countAttack").text("Counter: ") 

                $("#stats-user").show();
                player = $(this).text();
                $("#battle-status").text("Now choose a challenger!")
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

            totalDamage = userAttack + attacks;
            versusHealthStatus = versusHealth - totalDamage; 
            userHealthStatus = userHealth - versusAttack; 
            
            
            $("#user-health").text(userHealthStatus);
            $("#versus-health").text(versusHealthStatus);
            $("#user-attack").text(userAttack + attacks);

            $("#battle-status").text(player + " has dealt  " + totalDamage + " damage to " + versus + ". " + versus + " has countered and dealt  " + versusAttack + " damage!" );

            attacks = attacks + 10;
                if(userHealthStatus > 0 && versusHealthStatus <= 0){
                    $("#versus-select").empty();
                    $("#stats-versus").hide();
                    $("#lbl-versus").remove()
                    versusPlayerSelected = false;
                    enemiesRemain = $("#character-select div").length;
                    if(enemiesRemain === 0){
                        $("#battle-status").text(player + " has defeated all enemies! Hit restart to play again...")
                    }else{
                        $("#battle-status").text(versus + "  has been defeated! There are " + enemiesRemain + "  enemies remaing. Select your next opponenet")
                    }
                }
                if(userHealthStatus <= 0 && versusHealthStatus > 0){
                    $("#user-select").empty();
                    $("#stats-user").hide();
                    $("#lbl-user").remove()
                    userPlayerSelected = false;
                    $("#battle-status").text(versus + " is victorus! Hit restart to play again...")

                }      

        }else{

            alert("please select your opponent")


        }




    });

    









































});