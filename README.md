# WeekEndFront
Un site web nodejs de gestion de Week-End

## Usage with WeekEndProject
API app : https://github.com/Kwodhan/WeekEndProject   

#### 1. Build back
cd WeekEndProject/   
mvn package -DskipTests     
docker build --tag "weekend" .  

#### 2. Build front
cd WeekEndFront/   
docker build --tag "front" .     

#### 3. Build All
cd WeekEndFront/    
or     
cd WeekEndProject/    
docker-composer up  

## Role

| Role                                   |  Description| 
| -------------------------------------------- | --------- |
|ROLE_USER| Choisie ses activités et ses localisations| 
|ROLE_GERANT| Ajoute des sites|
|ROLE_GUEST| ne peux rien faire|


