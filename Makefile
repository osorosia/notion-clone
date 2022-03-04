all:
	@echo usage:
	@echo - make back
#	@echo - make front

back:
	docker-compose exec back npm run dev

# front:

init:
	docker-compose up -d
