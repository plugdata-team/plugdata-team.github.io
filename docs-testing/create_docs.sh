
rm -rf book

npx gitbook install
npx honkit build

mv _book book

sed -i.bak -e 's/<a href=/<a target="frame" href=/g' ./book/*.html && rm -f ./book/*.bak
