.PHONY: all

all: dev deploy

dev:
	npm run dev

deploy:
	npm run build
	deta deploy