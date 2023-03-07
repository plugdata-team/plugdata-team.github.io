
rm -rf book

npx honkit build

mv _book book

sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/PdM_Introduction.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/PdM_TheoryOfOperation.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/PdM_Run.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/PdM_Externals.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Ableton.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Bitwig.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Reaper.html