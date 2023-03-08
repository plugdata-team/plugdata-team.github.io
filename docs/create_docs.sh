
rm -rf book

npx honkit build

mv _book book


sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/PdM_TheoryOfOperation.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/PdM_Externals.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Ableton.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Bitwig.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Reaper.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Ardour.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_FL.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_One.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Setup_Logic.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/FAQ.html
sed -i 'x' 's/<a href=/<a target="frame" href=/g' ./book/Resources.html