Proyecto Final de curso HTML + CSS Coder House:

Este proyecto se basa en un sitio web de la empresa de construción en Mexico.

A nivel diseño esta muy básica, no es mi fuerte el tema de diseño, pero realice mi mejor esfuerzo.


El sitio está maquetado con las siguientes tecnologías:

* Bootstrap v5
    Componentes usados:
        Nav : Mejorado con Css.
        Collapse: En todos los Footer, también en experiencia.html sólo en dispositivos móviles usando media query.
        Carousel: En los Htmls (experiencia.html, proyectos.html)
        Accordin: en el Html proyectos.html

* Css 3
    Cambio de estilos en componentes varios en todo el sitio y uso de media query.
* JavaScript:
    1 - Button flotante en todas los HTML
    2-  Js para ocultar el collapse cuando estamos en dispositivos móviles, en le html experiencia.html.
    3-  Js para ocultar el button de collapse cuando estamos en desktop en el html de experiencias.html.
* NodejS
    Se configuró un server nodejs para el formulario de contactos el cual esta funcional con node.


npm list
catsa-css@1.0.0 /Volumes/GoogleDrive/Mi unidad/coderhouse/Proyecto-CodeHouse/Comision 16730/CATSA-CSS
├── express@4.17.2
├── googleapis@92.0.0
└── nodemailer@6.7.2

Estos datos en git están vacíos para no exponer los datos de la integración con google, cuando se deploye el proyecto hay que completar estos datos con lo de la integración.

  const CLIENT_ID = 'completar cuando este en el server';
  const CLIENT_SECRET = 'completar cuando este en el server';
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN = 'completar cuando este en el server';


------

Estructura del root del server:


/Volumes/GoogleDrive/Mi unidad/coderhouse/Proyecto-CodeHouse/Comision 16730/CATSA-CSS
fillonnicolas@MacBook-Air-de-fillon CATSA-CSS % ls -la
total 160
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 20:19 .
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 10:32 ..
-rwx------@ 1 fillonnicolas  staff   6148 Jan 28 10:43 .DS_Store
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 19:57 .git
-rwx------@ 1 fillonnicolas  staff   1234 Jan 28 20:19 README.txt
-rwx------@ 1 fillonnicolas  staff    606 Dec 18 21:15 READMECEO.txt
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 12:41 node_modules    ==>        (Modulos Node instalados)
-rwx------@ 1 fillonnicolas  staff  56313 Jan 28 12:41 package-lock.json   ==>      (json de configuracion)
-rwx------@ 1 fillonnicolas  staff    541 Jan 28 12:41 package.json        ==>        (json de configuracion)
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 10:48 src     ==> Source con los js de node y la carpeta public con el proyecto
fillonnicolas@MacBook-Air-de-fillon CATSA-CSS % cd src

####
##  Dentro de la carpeta src tenemos la carpeta public con el Proyecto.
###

fillonnicolas@MacBook-Air-de-fillon src % ls -la
total 128
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 10:48 .
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 20:19 ..
-rwx------@ 1 fillonnicolas  staff    301 Jan 28 10:48 index.js                     ==> archivo de configuracion del node para lebantar el server-
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 09:44 public                       ==> Proyecto
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 19:56 routes                       ==> nodejs donde esta la integracion con el formulario y la api de google para envio de mail.


####
##  Dentro de public vemos el proyecto.
###

fillonnicolas@MacBook-Air-de-fillon Public % ls -la
total 160
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 09:44 .
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 10:48 ..
drwx------@ 1 fillonnicolas  staff  16384 Jan 27 12:13 css              ==> estilo del poyecto
drwx------@ 1 fillonnicolas  staff  16384 Jan  3 23:36 images          ==> imagenes del proyecto
-rwx------@ 1 fillonnicolas  staff  16708 Jan 27 11:45 index.html       ==> index del proyecto
drwx------@ 1 fillonnicolas  staff  16384 Jan 28 10:20 pages        ==> resto de los html del proyecto

