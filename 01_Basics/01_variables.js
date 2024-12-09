const accountId = 1234
let accountEmail = 'test@email.com'
var password = '1234'
accountCity = 'Roorkee'

let accountState //-> undefined by default

//accountId = 2 -> not allowed
/*
 Prefer not to use var  because of issue in block scope and functional scope
*/

accountEmail = 'new@email.com'
password = '990'
accountCity = 'Delhi'

console.log(accountEmail)

console.table([accountId, accountEmail, password, accountCity, accountState])
