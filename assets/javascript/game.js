
userPlayerSelected = false;
versusPlayerSelected = false;

var character1 = {
    Name:"Superman",
    HealthPoints: 200,
    AttackPoints: 45,
    CountAttack: 25,
    picSource: "'url(../images/superman.jpg)'",
}

var character2 = {
    Name:"Batman",
    HealthPoints: 200,
    AttackPoints: 45,
    CountAttack: 25,
    picSource: "'url(../images/batman.jpg)'",
}

var character3 = {
    Name:"IronMan",
    HealthPoints: 200,
    AttackPoints: 45,
    CountAttack: 25,
    picSource: "'url(../images/ironman.png)'",
}

var players = [character1,character2,character3];



$(document).ready(function() {

    players.forEach(function(arrayItem){

        var newPlayer = $("<div>")
        newPlayer.addClass("player")
        newPlayer.attr("id",arrayItem.Name)
        newPlayer.attr("name",arrayItem.Name)
        newPlayer.text(arrayItem.Name)
        $("#character-select").append(newPlayer)

    });

    $(".player").on("click", function() {

        if(userPlayerSelected){
            var versusPlayer = $("<div>")
            versusPlayer.addClass($(this).text())
            versusPlayer.addClass("player")
            versusPlayer.attr("id","user-player")
            versusPlayer.text($(this).text())
            $("#versus-select").append(versusPlayer)
            versusPlayerSelected = true;
            $(this).remove();
        }else{
            var userPlayer = $("<div>")
            userPlayer.addClass($(this).text())
            userPlayer.addClass("player")
            userPlayer.attr("id","user-player")
            userPlayer.text($(this).text())
            $("#user-select").append(userPlayer)
            userPlayerSelected = true;
            $(this).remove();
        } 
            
        
    });

    









































});