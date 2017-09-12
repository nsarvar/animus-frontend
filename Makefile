.PHONY: all dependency-install build

all: dependency-install build

dependency-install:
	npm install

build:
  ng build --prod
