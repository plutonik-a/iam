# HM-AppThis app is an exercise for my course "Internetanwendungen fuer mobile Geraete" in media computer science.The aim of it is to present an author's work archive for mobile devices in a graphical/visual approach.The subject here is to create a browser-app running on node, coded by pure JavaScript without using any otherJS-Framework to facilitate functionality like JQuery usually does.As an SASS/SCSS lover, I couldn't resist using a preprocessor for compiling it to CSS, despite the possible overheadfor this rather small app!## UsageAll content-, JS- and CSS-files are generated into the 'dist' folder.Changes are made only within the 'src' folder.## InstallationClone the repository and install all dependencies with    bower install    npm install    npm install -g gulp## Set up CSS pre-processing### Update ruby environment       $ gem update --system### Install SASS* [Official SASS site](http://sass-lang.com/install)    gem install sassor    sudo gem install sassThen check your version (should be 3.3.x)    sass -v### Install Compass* [Official Compass site](http://compass-style.org/install/)Compass runs on any computer that has ruby installed.Then install compass    gem install compass### Install autoprefixerInstall autoprefixer to parse CSS and add vendor prefixes to rules fetched from 'Can I Use'[https://github.com/ai/autoprefixer](https://github.com/ai/autoprefixer)    sudo npm install --global autoprefixer## Build Distribution PackageBuild, serve and watch the local repository version.With livereload on top.    gulp serve---### Start the database	./starte-db### Start the database and nodeserver in the exercisefolder	sh ./mdb.sh	sh ./njs.sh