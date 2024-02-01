cd presskit-data
presskit build
rm -r ../presskit
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