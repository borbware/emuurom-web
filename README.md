## Building a presskit

Install npm package: 

```
npm install -g presskit
```

Build presskit:

```
.\buildpresskit.ps1
```

## Running Jekyll on WSL

```
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt install ruby-full
sudo apt-get install make gcc gpp build-essential zlib1g zlib1g-dev ruby-dev dh-autoreconf
sudo gem update
sudo gem install bundler
```

If you get errors (as I've done), go back to the start and go through these commands again

```
sudo gem install jekyll
```

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