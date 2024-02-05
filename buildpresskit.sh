rm -r presskit
cd presskit-data
presskit build
mv build ../presskit
cd ..

cp layout.txt temp.html
cat presskit/index.html >> temp.html
rm presskit/index.html
mv temp.html presskit/index.html

cp layout.txt temp.html
cat presskit/emuurom/index.html >> temp.html
rm presskit/emuurom/index.html
mv temp.html presskit/emuurom/index.html