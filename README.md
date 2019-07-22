## Janitor Joe, the Discord bot

Janitor Joe is the friendly Discord bot that is always cleaning up after your mess.<br>

## Available Commands

If the bot is added to your Discord server, you can run certain commands.<br>
The prefix to run those commands is '/' (without quotes).

## Admin commands

### `/kick (username) (reason: optional)`

Will kick the @mentioned user.<br>
If no reason is specified, it will mention this in the server log.

### `/ban (username) (reason: optional)`

Exactly the same as kick, but will ban the mentioned user instead.

### `/remove (amount of messages to delete)`

Deletes the desired amount of messages, you can delete 1-100 messages at once.<br>
You can not delete more than 100 at a time because Discord doesn't let us.

### `/region`

Changes server region between EU west and EU central.

## Music comands

### `/play (YouTube url)`

Plays the requested song that it fetches from YouTube.

### `/queue (YouTube url)`

Puts the requested song in queue.

### `/skip`

Skips the current song that is playing.<br>
If there's more than 2 users in the voice channel, the bot will start a voting sesson.

### `/stop`

Stops playing music and leaves the current voice channel.

## General commands

### `/help (command: optional)`

Returns a list of all the available commands.<br>
If given a command as second parameter, it will display some information about that specific command.

### `/coin`

Does a generic heads or tails coinflip.

## League of Legends commands

### `/stats (username)`

Gets the current & previous recorded ranked ladder positions.

### `/compare (username) (username)`

Fetches 2 players their stats and compares them, and will return a verdict on who's the better player.<br>
(STILL A WIP)

### `/champion (role: optional)`

Returns a random champion from [League of Legends](https://leagueoflegends.com)<br>
If given a role (adc, supp, mid, jungle, top) it will give a random champion for that lane.<br>
If you want a see the whole list of available champions for that lane you can put that as the last parameter.<br>
Example command: '/champion support' or '/champion adc'

### `/coinflip`

Flipping this coin will give you a prediction of what the outcome of your next game will be.<br>

## Reddit commands

### `/tifu`

Returns a random post from the 'hot' category on the tifu subreddit.<br>
If given the list parameter it will return a list with 20 links to those posts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the bot in development mode. <br>
In development mode it uses [Nodemon](https://nodemon.io/) to watch Node processes and restarts those when you save a file.<br>
After adding the bot to your server you can execute the above mentioned commands.

## [Old version that's made with TypeScript instead of JavaScript](https://github.com/Julicolo/JanitorJoeTS)

Keep in mind that this TypeScript version is super stale and won't be updated anymore!
