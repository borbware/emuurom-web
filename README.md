## Building a presskit

- install npm package: `npm install -g presskit`
- `cd presskit-data`
- `presskit build`
- `rm -r ..\presskit`
- `mv build ..\presskit`
- Add to index.html and emuurom\index.html:
	```---
	title: Presskit
	layout: default
	---
	```