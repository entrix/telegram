#!/usr/bin/python
import telepot
file = open('bot.id', 'r') 
bot_key=file.read() 
bot = telepot.Bot(bot_key)
f = open('meteoinfo.png', 'r+')
file = open('receiver.id', 'r') 
receiver=file.read()
bot.sendPhoto(int(receiver), f)
f.close()
