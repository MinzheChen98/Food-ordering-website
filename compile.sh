docker build -t ece651foodie.azurecr.io/ece651_web .
docker build -t ece651foodie.azurecr.io/ece651_nginx nginx/
#docker-compose up --build -d
#docker-compose down
#docker-compose logs
az acr login --name ece651foodie
docker push ece651foodie.azurecr.io/ece651_web:latest
docker push ece651foodie.azurecr.io/ece651_nginx:latest
az webapp config container set --resource-group ece651 --name ece651-foodie --multicontainer-config-type compose --multicontainer-config-file docker-compose.yml
az webapp log tail --name ece651-foodie --resource-group ece651
