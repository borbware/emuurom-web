cd presskit-data
presskit build
rm -r ..\presskit
mv build ..\presskit
cd ..

cp layout.txt temp.html
Add-Content -Path .\temp.html -Value (Get-Content ".\presskit\index.html")
rm presskit\index.html
mv temp.html presskit\index.html

cp layout.txt temp.html
Add-Content -Path .\temp.html -Value (Get-Content ".\presskit\emuurom\index.html")
rm presskit\emuurom\index.html
mv temp.html presskit\emuurom\index.html