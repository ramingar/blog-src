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

*NOTA: el sistema que utilizo para desarrollar es una máquina Linux con Ubuntu, por tanto, todas las instrucciones de instalación serán las propias de ese entorno.*

Lo primero que debemos hacer si queremos trabajar con PhoneGap es instalarlo en el sistema. Para ello, una de las formas más sencillas de obtenerlo es desde los repositorios de Node.js. Evidentemente, si se desea utilizar el ecosistema de paquetes de Node es imprescindible tenerlo previamente instalado para poder usar npm. Por tanto, el orden de instrucciones sería:
```
# instalar node si no lo tenemos instalado:
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install nodejs

# instalar phonegap
$ sudo npm install -g phonegap
```

Con esto ya lo tendríamos instalado de forma global. El siguiente paso será crear el proyecto:
```
$ phonegap create myApp
```

De esta manera se nos habrá generado un proyecto con las carpetas: *hooks*, *platforms*, *plugins* y *www*; y un archivo: *config.xml*. Lo que ahora mismo nos interesa es el archivo *config.xml* que contendrá la configuración del proyecto una vez compilado y la carpeta *www* que será el lugar donde desarrollemos nuestra aplicación.

Después de la creación del proyecto, obtendremos un esqueleto con todo lo suficiente para poder probar que, efectivamente, se ha formado correctamente. Para ello necesitaremos compilarlo:

```
$ phonegap build android
```
*NOTA: la instrucción generaría el proyecto compilado para la plataforma Android pero, de la misma manera, tb se puede compilar para iOS, Firefox OS, Windows Phone, etc. Es muy importante tener en cuenta que para que funcione esta instrucción, necesitamos tener todos los requisitos necesarios para crear la build del proyecto en la plataforma indicada. Para Android, se necesitaría descargar, por ejemplo, el SDK de Android y haber asignado en el path el directorio del SDK.*

Así de sencillo iniciamos un proyecto con PhoneGap. En futuras entradas abordaré temas como qué es y por qué deberíamos usar Crosswalk, depuración tanto desde un AVD como desde un dispositivo móvil o incluso desde Chrome (también explicaré por qué Chrome es en esta ocasión el navegador más indicado para depurar esta clase de proyectos), se explicará cómo configurar Grunt para conseguir un despliegue adecuado en el lado de cliente, por qué usar un framework front-end single page (como AngularJS) y por qué escoger la ayuda de frameworks para desarrollo móvil en HTML5 como Ionic, Onsen UI o Sencha Touch.