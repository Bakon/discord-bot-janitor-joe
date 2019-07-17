## Janitor Joe, the Discord bot

Janitor Joe is the friendly Discord bot that is always cleaning up after your mess.<br>

## Available Commands
If the bot is added to your Discord server, you can run certain commands.<br>
The prefix to run those commands is '/' (without quotes).

## Admin commands
These commands can only be performed by admins.

### `/kick (username)`
Will kick the @mentioned user.<br>
Can be given a third parameter, which would be the reasoning, which is optional.<br>
If no reason is specified, it will say this in the respective server log.

### `/ban (username)`
Exactly the same as kick, but will ban the mentioned user instead.

### `/purge (amount of messages to delete)`
Deletes the requested amount of messages, you can delete 1-100 messages at once.<br>
You can not delete more than 100 at a time because Discord doesn't let you.

## Commands for everyone!

### `/help`
Returns a list of available commands

### `/tifu`
Returns a random post from the new tifu subreddit.
If given the list parameter it will return a list with 20 links to posts.

### `/champion`
Returns a random champion from [League of Legends](https://leagueoflegends.com)<br>
If given the parameter 'top', 'mid', 'jungle', 'adc' or 'support', it will return champions respectively to those lanes.

### `/coinflip`
Does a coinflip to 'predict' the result of your next game.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the bot in development mode. <br>
In development mode it uses [Nodemon](https://nodemon.io/) to watch Node processes and restarts those when you save a file.<br>
After adding the bot to your server you can execute the above mentioned commands.

### `npm run build`

Builds the whole project, compiles all the TypeScript to JavaScript.<br>
This will put everything in a folder called 'dist'.

### `npm run start`

Runs the build version of the project <br>