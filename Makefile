install: 
			npm ci --omit=dev
			npm link			
publish:
			npm publish --dry-run
lint:
			npx eslint .