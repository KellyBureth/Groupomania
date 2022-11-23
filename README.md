<p g align="center">
<img src="https://user-images.githubusercontent.com/96128478/193409891-dcd75c15-8fdc-41e0-9869-ab82786b7105.svg" width="100"> <img src="https://user-images.githubusercontent.com/96128478/193410065-a6df5bbe-7b60-4294-9f70-e6cfef3edc5b.svg" width="500">
 </p>

## Introduction :


 Bienvenue sur mon dépôt Groupomania !
 
 Le projet Groupomania a été réalisé dans le cadre de la formation OpenClassRoom "parcours développeur web".
 
 Pour ce septième et dernier projet du parcours, nous avions à réaliser un réseau social interne pour les employés de la société Groupomania (côté server et côté client).
 
 Vous trouverez la mission du projet dans ce document pdf :
 https://course.oc-static.com/projects/DWJ_FR_P7/DW+P7+28-09-2022+Sce%CC%81nario.pdf
 
 Quant au cahier des charge, vous le trouverez dans cet autre pdf :
 https://course.oc-static.com/projects/DWJ_FR_P7/Cahier+des+charges+Groupomania.pdf
 
 
 ## Technologies utilisées :
 NodeJs, React, Express, MongoDB, Sass.
 
 
 ## Dépendences installées :
 ### Backend :
 Bcrypt, cookie-parser, cors, dotenv, express, jsonwebtoken, mongoose, multer, nodemon et validator.
 ### Frontend :
 Axios, dotenv, js-cookie, node-sass, react, react-dom, react-redux, react-router-dom, react-scripts, redux, redux-devtools-extension, redux-thunk et web-vitals.
 
 
 ## Installation :
 Clonez le projet du repository https://github.com/KellyMarieB/Groupomania puis ouvrez un premier terminal pour le **backend** :
 
 Dans le repertoire Groupomania, entrez la ligne : 
 >npm install
 
 pour installer toutes les dépendences du back,
 puis 
 >nodemon server
 
 pour executer le serveur (qui sera sur le port 5000)

*Gardez ce terminal ouvert.*

 
 A présent ourez un second terminal pour le **frontend** :
 Dans le repertoire Groupomania, entrez la ligne : 
 >cd client
 
 pour vous placer dans le repertoire du frontend, puis
 >npm install
 
 pour installer toutes les dépendences du front,
 et enfin
  >npm start

 pour executer l'application (qui sera sur le port 3000)
 
 *Gardez ce terminal ouvert.*
 
 Les modèles de mes deux fichiers .env sont disponibles, il vous faudra y entrer votre propre clé token et vos coordonées MongoDB pour le .env du back et le nom du rôle admin que vous aurez choisi pour le .env du front (et renommer ces deux fichiers .env.example par .env)
 
 
 ## Tout est bon ! 
 Vous pouvez dès à présent vous rendre à l'adresse "http://localhost:3000" 
 pour vous créer un compte Groupomania, créer des posts et les modifier !
 
 Amusez-vous bien !
