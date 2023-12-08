
rm -rf book

npx honkit build

mv _book book

sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/*.html