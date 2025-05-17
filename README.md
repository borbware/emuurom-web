## Building a presskit

Easiest to do this on WSL.

Install npm package (needs npm version 12):

```
npm install -g presskit
```

Build presskit: ***(REMOVES OLD PRESSKIT FOLDER!)***

```
bash buildpresskit.sh
```

## Running Jekyll on Windows

Follow [these instructions](https://jekyllrb.com/docs/installation/windows/) to install Ruby. Then,

```
gem install jekyll bundler
```

Create new project with

```
jekyll new projectname
cd projectname
```
Run the project
```
bundle exec jekyll serve
```

## Running Jekyll on WSL

```
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt install ruby-full
sudo apt-get install make gcc gpp build-essential zlib1g zlib1g-dev ruby-dev dh-autoreconf
sudo gem update
sudo gem install bundler
sudo gem install jekyll
```

Wrong ruby version? Oh man. Install homebrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Then run the three commands to add brew to your PATH.
```
brew install gcc
brew install rbenv ruby-build
```
## running the pages

Inside jekyll repo:

```
bundle install
```
Simple serve

```
bundle exec jekyll serve
```

I like to have reload working and used to need force_polling to work on windows filesystem

```
bundle exec jekyll serve force_polling --livereload --unpublished
bundle exec jekyll serve --livereload --unpublished --incremental
```

Source: https://davemateer.com/2020/10/20/running-jekyll-on-wsl2

### asdf ei toimi

If you get errors (as I've had), go back to the start and go through these commands again

```
sudo gem update --system
sudo gem install jekyll
```
