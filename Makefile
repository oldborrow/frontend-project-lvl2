publish:
	npm publish --dry-run
gd:
	node bin/gendiff.js
make lint:
	npx eslint .