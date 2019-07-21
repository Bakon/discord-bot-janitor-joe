## Janitor Joe, the Discord bot

Janitor Joe is the friendly Discord bot that is always cleaning up after your mess.<br>

## Available Commands

If the bot is added to your Discord server, you can run certain commands.<br>
The prefix to run those commands is '/' (without quotes).

## Admin commands

### `/kick (username)`

Will kick the @mentioned user.<br>
Can be given a third parameter, which would be the reasoning, which is optional.<br>
If no reason is specified, it will say this in the respective server log.

### `/ban (username)`

Exactly the same as kick, but will ban the mentioned user instead.

### `/purge (amount of messages to delete)`

Deletes the requested amount of messages, you can delete 1-100 messages at once.<br>
You can not delete more than 100 at a time because Discord doesn't let you.

### `/region`

Changes server region between EU west and EU central.

### `/restart`

If the bot is acting weird, admins can do /restart to restart the bot.

## Music comands

### `/play (url)`

Plays the requested song.

### `/queue (url)`

Fetches the requested song and puts it in queue.

### `/skip`

Skips the current song that is playing.

### `/stop`

The bot will leave the current voice chat channel.

## General commands

### `/help (command: optional)`

Returns a list of all the available commands.<br>
If given a command as second parameter, it will display some information about that specific command.

### `/coinflip`

Does a coinflip to 'predict' the result of your next game.

## League of Legends commands

### `/stats (username)`

Gets the current & previous recorded ranked ladder positions.

### `/compare (username) (username)`

Fetches 2 players their stats and compares them, and will return a verdict on who's the better player.<br>
(STILL A WIP)

### `/champion (role: optional) (all: optional)`

Returns a random champion from [League of Legends](https://leagueoflegends.com)<br>
If given a role (adc, supp, mid, jungle, top) it will give a random champion for that lane.<br>
If you want a see the whole list of available champions for that lane you can put that as the last parameter.<br>
Example command: '/champion support' or '/champion adc all'

## Reddit commands

### `/tifu`

Returns a random post from the new tifu subreddit.<br>
If given the list parameter it will return a list with 20 links to posts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the bot in development mode. <br>
In development mode it uses [Nodemon](https://nodemon.io/) to watch Node processes and restarts those when you save a file.<br>
After adding the bot to your server you can execute the above mentioned commands.
