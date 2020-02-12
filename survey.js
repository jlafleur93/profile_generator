const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable?', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
      rl.question('What do you listen to while doing that? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite', (answer6) => {
            rl.question('What is your superpower? In a few words:', (answer7) => {
              rl.question('tell us what you are amazing at!', (answer8) => {
                
                console.log(`${answer1} loves ${answer2} while ${answer3}, devouring ${answer4} for ${answer5}, ${answer6} ${answer7} ${answer8}`)
                rl.close();
              })

            })
      
          })
        })
      })
      })
  
  })
});
// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.
//
/* What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at! */
//Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.