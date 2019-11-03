
userPlayerSelected = false;
versusPlayerSelected = false;

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
                    $("#versus-health").text("Health: " + Superman.healthPoints)
                    $("#versus-attack").text("Attack: " + Superman.attackPoints)
                    $("#versus-countAttack").text("Counter: " + Superman.countAttack)
                }if ($(this).text() ==="Batman") {
                    $("#versus-health").text("Health: " + Batman.healthPoints)
                    $("#versus-attack").text("Attack: " + Batman.attackPoints)   
                    $("#versus-countAttack").text("Counter: " + Batman.countAttack) 
                }if ($(this).text() ==="IronMan") {
                    $("#versus-health").text("Health: " + IronMan.healthPoints)
                    $("#versus-attack").text("Attack: " + IronMan.attackPoints) 
                    $("#versus-countAttack").text("Counter: " + IronMan.countAttack)             
                }
                $("#stats-versus").show();
                console.log($(this).text())
                $(this).remove();
            }else{
                $(this).clone().appendTo("#user-select");
                userPlayerSelected = true;
                if($(this).text() ==="Superman"){
                    $("#user-health").text("Health: " + Superman.healthPoints)
                    $("#user-attack").text("Attack: " + Superman.attackPoints)
                    $("#user-countAttack").text("Counter: " + Superman.countAttack)
                }if ($(this).text() ==="Batman") {
                    $("#user-health").text("Health: " + Batman.healthPoints)
                    $("#user-attack").text("Attack: " + Batman.attackPoints)  
                    $("#user-countAttack").text("Counter: " + Batman.countAttack)  
                }if ($(this).text() ==="IronMan") {
                    $("#user-health").text("Health: " + IronMan.healthPoints)
                    $("#user-attack").text("Attack: " + IronMan.attackPoints)   
                    $("#user-countAttack").text("Counter: " + Iron.countAttack)             
                }
                $("#stats-user").show();
                console.log($(this).text())
                $(this).remove();
                
            } 
                
    }  
    });

    









































});