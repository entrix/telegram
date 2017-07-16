#!/bin/bash

phantomjs rasterize.js http://www.meteoinfo.ru/forecasts5000/russia/moscow-area meteoinfo.png
./send_photo_to_bot.py
