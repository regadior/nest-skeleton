## Include .env file
include .env

## Set 'bash' as default shell
SHELL := $(shell which bash)

## Set 'help' target as the default goal
.DEFAULT_GOAL := help

## Test if the dependencies we need to run this Makefile are installed
DOCKER := DOCKER_BUILDKIT=1 $(shell command -v docker)
DOCKER_COMPOSE := COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 $(shell command -v docker-compose)
NPM := $(shell command -v npm)

.PHONY: help
help: ## Show this help
	@egrep -h '^[a-zA-Z0-9_\/-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort -d | awk 'BEGIN {FS = ":.*?## "; printf "Usage: make \033[0;34mTARGET\033[0m \033[0;35m[ARGUMENTS]\033[0m\n\n"; printf "Targets:\n"}; {printf "  \033[33m%-25s\033[0m \033[0;32m%s\033[0m\n", $$1, $$2}'

.PHONY: requirements
requirements: ## Check if the requirements are satisfied
ifndef DOCKER
	@echo "🐳 Docker is not available. Please install docker."
	@exit 1
endif
ifndef DOCKER_COMPOSE
	@echo "🐳🧩 docker-compose is not available. Please install docker-compose."
	@exit 1
endif
ifndef NPM
	@echo "📦🧩 npm is not available. Please install npm."
	@exit 1
endif
	@echo "🆗 The necessary dependencies are already installed!"

.PHONY: install
install: requirements  ## Install project dependencies
	@echo "🍿 Installing dependencies..."
	@npm install
	@npm run prisma:generate

.PHONY: start
start: install ## Start application in development mode
	@echo "▶️ Starting app in development mode (Docker)..."
	@npm run start:dev

.PHONY: start/db
start/db: ## Start db
	@echo "▶️ Starting database (Docker)..."
	@$(DOCKER_COMPOSE) -f ./docker/docker-compose.prod.yml --env-file .env up -d nest-skeleton-postgres

.PHONY: start/prod
start/prod: ## Start all application in production mode
	@echo "▶️ Starting app in production mode (Docker)..."
	@$(DOCKER_COMPOSE) -f ./docker/docker-compose.prod.yml --env-file .env up --build

.PHONY: logs/prod
logs/prod: 
	@$(DOCKER_COMPOSE) -f ./docker/docker-compose.prod.yml --env-file .env logs --tail=100 -f $(c)

