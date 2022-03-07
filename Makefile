all:
	@echo usage:
	@echo - make back
	@echo - make front
	@echo - make db
	@echo - make down

back: init
	docker-compose exec back npm run dev

front: init
	docker-compose exec front npm start

db: init
	docker-compose exec db mongo admin -u root -p root

down:
	docker-compose down

###############################################################
init:
	docker-compose up -d
