# WeekEndFront
Un site web nodejs de gestion de Week-End   
port : 9000   
url : /   

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

## Role

### User
Choisie ses activités et ses localisations   

Chaque jeudi à 12 h, un email est envoyé avec une liste de site en fonction des activitées favorites et des localisations ajoutées par l'utilisateur. 
La Météo est précisé pour le samedi et le dimanche.   
   
Si le temps ne correspond pas à une bonne méteo pour un sport, un message sera ajouté pour le sport :   
"Attention Il faut avoir une certaine expérience pour pratiquer ce sport avec ce temps"

### Gerant
Ajoute des sites   
    
Pour créer un Gérant :   
envoyer une requete POST à l'API rest:    
URL : localhost:8080/WeekEndProject/api/auth/creategerantweekend  
BODY :     
```json
{
	"pseudo":"gerant",
	"password":"gerant",
	"firstName":"gerant",
	"lastName":"gerant",
	"emailAddress":"gerant@gerant.gerant"
}
```


### Guest
Ne peut rien faire à part s’enregistrer ou s'authentifier pour devenir User
