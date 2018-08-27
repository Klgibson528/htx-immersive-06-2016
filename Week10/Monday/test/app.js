// Creating and Storing password


var pbkdf2 = require('pbkdf2');
var crytpo = require('crypto');

// 1. Take the user password
var password = 'some-password';

// 2.Generate a salt(String of random characters)
var salt = crytpo.randomBytes(20).toString('hex');


// 3. Combine the salt with the user entered password
var key = pbkdf2.pbkdf2Sync(
  password, salt, 36000, 256, 'sha256'
);

// 4. Hash the combined string with a suitable cryptographic algorithm.
var hash = key.toString('hex');

// Store the result as the password and also store the salt along side.
var stored_pass = `pbkdf2_sha256$36000$${salt}$${hash}`;


// 1. Validating user password
// 2. Validate the username and fetch the hashed result and salt from the database
// 3. Combine the user entered password with the salt stored for that user.

// 5. Compare the result with the stored hash.


// checking a password

// 2. Validate the username and fetch the hashed result and salt from the database
var pass_parts = stored_pass.split('$');

// 3. Combine the user entered password with the salt stored for that user.

var key = pbkdf2.pbkdf2Sync(
  'some-password',
  pass_parts[2],
  parseInt(pass_parts[1]),
  256, 'sha256'
);

// 4. Hash the combined string with the same cryptographic algorithm used at the 
//time of creating user.
var hash = key.toString('hex');


if (hash === pass_parts[3]) {
  console.log('Passwords Matched!');
}