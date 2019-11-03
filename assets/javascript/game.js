
userPlayerSelected = false;
versusPlayerSelected = false;

var Superman = {
    Name:"Superman",
    healthPoints: 200,
    attackPoints: 45,
    countAttack: 25,
}

var Batman = {
    Name:"Batman",
    healthPoints: 200,
    attackPoints: 45,
    countAttack: 25,
}

var IronMan = {
    Name:"IronMan",
    healthPoints: 200,
    attackPoints: 45,
    countAttack: 25,
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
                    $("#versus-health").text("Health: " + Superman.healthPoints)
                    $("#versus-attack").text("Attack: " + Superman.attackPoints)
                }if ($(this).text() ==="Batman") {
                    $("#versus-health").text("Health: " + Batman.healthPoints)
                    $("#versus-attack").text("Attack: " + Batman.attackPoints)    
                } else {
                    $("#versus-health").text("Health: " + IronMan.healthPoints)
                    $("#versus-attack").text("Attack: " + IronMan.attackPoints)                
                }
                $("#stats-versus").show();
                $(this).remove();
            }else{
                $(this).clone().appendTo("#user-select");
                userPlayerSelected = true;
                if($(this).text() ==="Superman"){
                    $("#user-health").text("Health: " + Superman.healthPoints)
                    $("#user-attack").text("Attack: " + Superman.attackPoints)
                }if ($(this).text() ==="Batman") {
                    $("#user-health").text("Health: " + Batman.healthPoints)
                    $("#user-attack").text("Attack: " + Batman.attackPoints)    
                } else {
                    $("#user-health").text("Health: " + IronMan.healthPoints)
                    $("#user-attack").text("Attack: " + IronMan.attackPoints)                
                }
                $("#stats-user").show();
                console.log($(this).text())
                $(this).remove();
                
            } 
                
    }  
    });

    









































});