.PHONY: test

all: run

run:
	hugo server --minify --theme book
mod:
	git submodule update --init
	git submodule update --remote
	hugo server --minify --theme book

build:
	hugo -D --minify
