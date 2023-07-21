
rm -rf book

npx honkit build

mv _book book

sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/x1.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/x2.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/x3.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/x4.html

