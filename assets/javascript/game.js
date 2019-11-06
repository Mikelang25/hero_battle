
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
var gameRefresh = true;
var gameOver = false;

var Superman = {
    Name:"Superman",
    healthPoints:254,
    attackPoints:30,
    countAttack:35,
}

var Batman = {
    Name:"Batman",
    healthPoints: 251,
    attackPoints: 29,
    countAttack: 33,
}

var IronMan = {
    Name:"IronMan",
    healthPoints: 256,
    attackPoints: 29,
    countAttack: 30,
}

var Wolverine = {
    Name:"Wolverine",
    healthPoints: 265,
    attackPoints: 31,
    countAttack: 33,
}

var players = [Superman,Batman,IronMan,Wolverine];



$(document).ready(function() {
    createPlayers();
    playerActions();
    
    function createPlayers() {
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
    }

    function playerActions() {
        $(".player").on("click", function() {
            //checks to see if a user player and versus player has been selected 
            if(userPlayerSelected && versusPlayerSelected){
                alert("both players already selected")
            }else{
                    
                    if(userPlayerSelected){
                        $(this).clone().appendTo("#versus-select");
                        versusPlayerSelected = true;
                        if($(this).text() ==="Superman"){
                            $("#versus-health").text(Superman.healthPoints)
                            $("#versus-countAttack").text(Superman.countAttack)
                        }if ($(this).text() ==="Batman") {
                            $("#versus-health").text(Batman.healthPoints) 
                            $("#versus-countAttack").text(Batman.countAttack) 
                        }if ($(this).text() ==="IronMan") {
                            $("#versus-health").text(IronMan.healthPoints)
                            $("#versus-countAttack").text(IronMan.countAttack)             
                        }if ($(this).text() ==="Wolverine") {
                            $("#versus-health").text(Wolverine.healthPoints)
                            $("#versus-countAttack").text(Wolverine.countAttack)             
                        }
                        $("#lblv-health").text("Health: ")
                        $("#lblv-countAttack").text("Counter: ") 
        
                        $("#stats-versus").show();
                        $("#lbl-versus").show()
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
                        }if ($(this).text() ==="Batman") {
                            $("#user-health").text(Batman.healthPoints)
                            $("#user-attack").text(Batman.attackPoints)  
                        }if ($(this).text() ==="IronMan") {
                            $("#user-health").text(IronMan.healthPoints)
                            $("#user-attack").text(IronMan.attackPoints)              
                        }if ($(this).text() ==="Wolverine") {
                            $("#user-health").text(Wolverine.healthPoints)
                            $("#user-attack").text(Wolverine.attackPoints)              
                        }
                        $("#lblu-health").text("Health: ")
                        $("#lblu-attack").text("Attack: ")  
        
        
                        $("#stats-user").show();
                        $("#lbl-user").show();
                        player = $(this).text();
                        $("#battle-status").text("Now choose a challenger!")
                        console.log(versus)
                        $(this).remove();
                        
                    } 
                        
            }  
        });

        $("#btn-attack").on("click", function() {

        if(gameOver){


        }else{

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
    
                attacks = attacks + 8;
                    if(userHealthStatus > 0 && versusHealthStatus <= 0){
                        $("#versus-select").empty();
                        $("#stats-versus").hide();
                        $("#lbl-versus").hide()
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
                        $("#lbl-user").hide();
                        $("#stats-versus").hide();
                        $("#lbl-versus").hide()
                        userPlayerSelected = false;
                        $("#battle-status").text(versus + " is victorus! Hit restart to play again...")
                        gameOver = true;
    
                    }
                    //if both players attacks cause them to have negative health, it looks at the player with the hightest number
                    if(userHealthStatus <= 0 && versusHealthStatus <= 0){
                        if(userHealthStatus > versusHealthStatus){
                            $("#versus-select").empty();
                            $("#stats-versus").hide();
                            $("#lbl-versus").hide();
                            $("#stats-user").hide();
                            $("#lbl-user").hide();
                            enemiesRemain = $("#character-select div").length;
                            if(enemiesRemain === 0){
                                $("#battle-status").text(player + " has defeated all enemies! Hit restart to play again...")
                            }else{
                                $("#battle-status").text(versus + "  has been defeated!  " + player + "  cannot continue the fight....Hit restart to play again.")
                            }
                            
                        }else{
                            $("#user-select").empty();
                            $("#stats-user").hide();
                            $("#lbl-user").hide();
                            $("#stats-versus").hide();
                            $("#lbl-versus").hide()
                            userPlayerSelected = false;
                            $("#battle-status").text(versus + " is victorus! Hit restart to play again...")
                            gameOver = true;
                        }
                    }

      
    
            }else{
    
                if(enemiesRemain === 0){
                    gameOver = true;
                }else{
                    $("#battle-status").text("Please select your next opponent")
                }
    
    
            }
        }
        });
        
    }


        $("#btn-reset").on("click", function() {
            userPlayerSelected = false;
            versusPlayerSelected = false;
            gameOver = false;
            attacks = 0;
            player = "";
            versus = "";
            enemiesRemain = 0;
            userHealth = 0;
            versusHealth = 0;
            userAttack = 0; 
            versusAttack = 0; 
            userHealthStatus = 0;
            versusHealthStatus = 0; 
            totalDamage = 0;
            
            $("#battle-status").text("Directions: Start by choosing your player, then choose a challenger and begin the attack!")
            $("#user-select").empty();
            $("#stats-user").hide();
            $("#lbl-user").hide()
            $("#versus-select").empty();
            $("#stats-versus").hide();
            $("#lbl-versus").hide()
            $("#user-select").empty();
            $("#versus-select").empty();

            $("#IronMan").remove();
            $("#Batman").remove();
            $("#Superman").remove();
            $("#Wolverine").remove();

            createPlayers();
            playerActions();


        });

    









































});