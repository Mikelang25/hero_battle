

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

        newPlayer = $("<div>")
        newPlayer.addClass("player")
        newPlayer.attr("id",arrayItem.Name)
        newPlayer.text(arrayItem.Name)
        $("#character-select").append(newPlayer)

    });










































});