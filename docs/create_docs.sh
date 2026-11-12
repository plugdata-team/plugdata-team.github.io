
rm -rf book

npx gitbook install
npx honkit build

mv _book book

# Open internal links inside the docs iframe. External links are left alone (honkit already marks
# them target="_blank"), since sites like GitHub refuse to be embedded in a frame.
sed -i.bak -E -e 's#<a href=#<a target="frame" href=#g' \
  -e 's#<a target="frame" href="(https?:[^"]*)"#<a href="\1"#g' ./book/*.html && rm -f ./book/*.bak
