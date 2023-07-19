const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let funProfile = {};

rl.question('What is your name? ', (name) => {
  funProfile.name = name;

  rl.question('What is an activity you like doing? ', (activity) => {
    funProfile.activity = activity;

    rl.question('What do you listen to while doing that? ', (music) => {
      funProfile.music = music;

      rl.question('Which meal is your favorite (eg: breakfast, dinner, etc.) ', (meal) => {
        funProfile.meal = meal;

        rl.question('What is your favorite thing to eat for that meal? ', (food) => {
          funProfile.food = food;

          rl.question('Which sport is your absolute favorite? ', (sport) => {
            funProfile.sport = sport;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              funProfile.superpower = superpower;

              const paragraph = `Hello, my name is ${funProfile.name}. I like ${funProfile.activity} while listening to ${funProfile.music}. ${funProfile.meal} is the most important meal of the day! My favorite thing to eat for that meal is ${funProfile.food}. I enjoy ${funProfile.sport} and I am incredible at ${funProfile.superpower}.`;

              console.log(paragraph);

              rl.close();
            });
          });
        });
      });
    });
  });
});