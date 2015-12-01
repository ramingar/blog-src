---
posts:
 data:
  titleOfThisPage: "Creando un proyecto con PhoneGap"
  posted: 2015-12-01
  headerImage: "phonegap-logo.png"
 tags: [phonegap]
 dest: crear-proyecto-phonegap
layout: <%= postsLayout %>
---

# Creando un proyecto con PhoneGap

01 de diciembre de 2015

<img class="img-responsive img-border img-full" src="{{pathAssets}}img/phonegap-logo.png"/>

- - -

Actualmente estoy trabajando casi en exclusiva en la parte front-end de un proyecto bastante ambicioso que consta, además, de una aplicación móvil. En la toma de decisiones, para desarrollar esa parte móvil, escogimos [PhoneGap](http://phonegap.com/) por encima del SDK de Android o de iOS debido a la mayor versatilidad que nos ofrecía. En este artículo trataré de contar cuáles son los primeros pasos para crear una aplicación con PhoneGap.

*NOTA: el sistema que utilizo para desarrollar es una máquina Linux con Ubuntu, por tanto, todas las instrucciones de instalación serán las propias para ese entorno.*

Lo primero que debemos hacer si queremos trabajar con PhoneGap es instalarlo en el sistema. Para ello, debemos descargar PhoneGap de los repositorios de Node.js e instalarlo en nuestra máquina. Evidentemente, si se desea utilizar el ecosistema de paquetes de Node es imprescindible tenerlo instalado previamente. Por tanto, el orden de instrucciones sería:

```
# instalar node:
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install nodejs

# instalar phonegap
sudo npm install -g phonegap
```

Con esto ya lo tendríamos instalado de forma global.