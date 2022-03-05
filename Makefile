all:
	@echo usage:
	@echo - make back
#	@echo - make front
	@echo - make db

back: init
	docker-compose exec back npm run dev

front: init
	docker-compose exec front npm start

db: init
	docker-compose exec db mongo admin -u root -p

###############################################################
init:
	docker-compose up -d
