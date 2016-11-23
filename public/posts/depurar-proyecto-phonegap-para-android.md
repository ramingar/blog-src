---
posts:
 data:
  titleOfThisPage: "Depurar un proyecto PhoneGap para Android"
  posted: 2015-12-29
  headerImage: "phonegapConfigXML.jpg"
 tags: [phonegap, debug]
 dest: depurar-proyecto-phonegap-para-android
layout: <%= postsLayout %>
---

# Depurar un proyecto PhoneGap para Android

<div class="date">29 de diciembre de 2015</div>

![main-image]({{pathAssets}}img/phonegapConfigXML.jpg)

- - -


En el post anterior se comentó cómo iniciar un proyecto nuevo con PhoneGap. PhoneGap te proporciona un API para atacar al hardware de un dispositivo móvil usando javascript. En este post hablaré de cómo depurar el proyecto.

Tenemos dos posibilidades: depurar desde un AVD (Android Virtual Device), es decir, desde un emulador; o bien, podemos hacerlo desde un dispositivo real. Yo siempre recomendaré usar un dispositivo real ya que es la única garantía de que nuestro desarrollo está siendo depurado con la mayor lealtad al producto final. Cualquier otra forma de depuración es solo una aproximación a la realidad y nos pueden surgir problemas inesperados que no descubrimos durante la fase de testeo. Si aun así no se pudiera probar la aplicación en un teléfono Android, no tendremos más remedio que utilizar mecanismos de emulación; en este caso, aconsejo el uso de [Genymotion](https://www.genymotion.com/). Por tanto, ya que la opción del dispositivo físico es la que recomiendo, esa es la que explicaré.

El primer paso que debemos hacer para poder depurar nuestro proyecto es habilitar las opciones de desarrollador, opción que se puede encontrar en los <em>Ajustes</em> de nuestro teléfono. Una vez los hecho esto, al conectar el móvil por usb al ordenador, aparecerá una pantalla como la siguiente:

<div class="col-md-4">
<img class="img-responsive img-border img-full" src="{{pathAssets}}img/depurar-proyecto-phonegap-para-android-usb-debugging.jpg"/>
<h6 class="help-block">Esto es señal de que todo está funcionando correctamente.</h6>
</div>

<div class="col-md-8">
Puede que nuestro ordenador no consiga ver el teléfono. Esto será señal de que debemos preparar a nuestro sistema operativo para que lo reconozca al conectarlo por USB. Si estamos en Windows, necesitaremos instalar los [drivers de USB para ADB](http://developer.android.com/tools/extras/oem-usb.html). Si estamos en Linux ─concretamente, en Ubuntu─, necesitaremos añadir una regla udev. Los pasos para hacerlo son los siguientes:
</div>
<br style="clear:both" />

- Primero, apunta el id de vendor del móvil. Puedes encontrarlo [aquí](http://developer.android.com/tools/device.html#VendorIds), o si escribes `lsusb` en tu terminal. Por ejemplo, el vendor de un BQ sería 0x2a47 y el de un OnePlus sería 0x05c6.
- Modifica o crea el fichero /etc/udev/rules.d/51-android.rules y añade: `SUBSYSTEM=="usb", ATTR{idVendor}=="0x2a47", MODE="0666", GROUP="plugdev"` (teniendo en cuenta que estés registrando un dispositivo BQ).
- Modifica el fichero ~/.android/adb_usb.ini solo para añadir una línea: `0x2a47`.

Con estos pasos ya tendríamos registrado nuestro teléfono. La próxima vez que lo conectemos ya estará preparado para depurar nuestra aplicación. Si tuviésemos conectado el móvil al ordenador, también podemos escribir: `adb kill-server`, seguido de `adb devices` para que lo reconozca sin necesidad de desenchufar y volver a enchufarlo.

Para depurar nuestra aplicación, tan solo debemos ubicarnos en la raíz de nuestro proyecto y escribir en la terminal: `phonegap run android`. Esto compilará el proyecto, lo desplegará en nuestro dispositivo y arrancará la aplicación en él. Si ahora vamos a Chrome y en la barra de URL escribimos: `chrome://inspect`, el navegador nos mostrará una lista de aplicaciones que podemos testear, simplemente hacemos clic en la que nos interese en ese momento y podremos depurarla como si de una web se tratase.

Como nota final, algo que es más que probable que suceda es que tengamos que desconectar nuestro móvil del PC y al cabo de un tiempo volver a conectarlo para seguir desarrollando. Si, en ese momento, el ordenador no reconociese nuestro dispositivo, simplemente con seguir los siguientes pasos conseguiremos que todo vuelva a la normalidad:

- Cerrar la pestaña de `chrome://inspect` de nuestro navegador.
- Escribir: `adb kill-server`.
- Escribir: `adb devices` (nuestro teléfono aparecerá de nuevo en la lista de dispositivos detectados).