const wordBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function gameNumberGenerator(){
    let gameNumber = ""
    for(var i = 0; i<5; i++){
        gameNumber += wordBank.charAt(Math.floor(Math.random() * wordBank.length))
    }
    return gameNumber
}