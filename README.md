#### CarreraProyecto

# Carrera Desarrollador Full Stack MEAN Proyecto FCT
Esta carrera de Stack MEAN, está compuesta por MongoDB, ExpressJS, AngularJS y Node.js. En ella aprenderemos a crear aplicaciones web completas. Podremos desarrollar la parte del servidor y la del cliente con JavaScript, utilizando las cuatro tecnologías que conforman este stack de desarrollo, uno de los más usados en la actualidad por miles de programadores y empresas. La carrera tiene una duración total de 42H y 10M, y está compuesta por cada uno de los siguientes cursos:
 * HTML5 y CSS3.
 * JavaScript Profesional.
 * Curso Git.
 * Angular 6.
 * Curso de Angular 4.
 * Buenas practicas en Angular.
 * Node.js y Express.
 * Curso de MongoDB.

## Curso Git
En este curso aprenderemos a como utilizar y dominar Git, usando la linea de comandos, lo que nos permitirá desenvolvernos en cualquier entorno. 
### Sesión 1: 07/04/2022
  * Aprendimos lo que es Git, una herramienta (de Software libre) de control de versiones la cual nos ayudará en el proceso de ciclo de vida de nuestro desarrollo de software. Diseñada por Linus Torvalds.
  * Empezamos creando una carpeta como carpeta padre la cual utlizaríamos para las pruebas de los comandos de Git y donde guardaremos el resto de ejercicios que vayamos haciendo.
  * Aprendimos los posibles **ESTADOS** de un fichero en GIT, como pueden ser:
   1. **Confirmado (commited).**
   2. **Modificado (untracked).**
   3. **Preparado (staged).**
  * Aprendimos las secciones principales de un proyecto de Git.
   1. Git Directory (Directorio de Git).
   2. Working directory (Directorio de trabajo).
   3. Staging area (Área de preparación). 
  * Instalamos Git y tkdiff, el cual es un visor gráfico, herramienta que utilizaremos para nuestro trabajo en Git.
  * Aprendimos algunos comandos de Git para consola y su uso, como por ejemplo:
   1. **git status**: Hace un listado de los archivos nuevos o a insertar en un commit.
   2. **git add**: Añade **TODOS** los archivos al stagin area.
   3. **git commit -m "Comentario de commit"**: Realiza un commit. Guarda una copia del estado del archivo/s en ese momento y añade el código SHA a la cabecera del repositiorio.
   4. **git diff**: Comando para comparar cambios entre dos datos de entrada.
   5. **git commit -m "Comentario de commit"**: Realiza un commit. Guarda una copia del estado del archivo/s en ese momento y añade el código SHA a la cabecera del repositiorio.
   6. **git log**: Comando para explorar el historial, usado por si necesitas buscar una version concreta de un proyecto.
   7. Creación del archivo **.gitignore** el cual sirve para indicarle a Git qué archivos o carpetas ignorar de un proyecto.
   8. **git difftool**: Comando que nos permite comparar y editar archivos.
   9. **git mv fichero fichero2**: Renombrar ficheros donde fichero2 será el nuevo nombre de fichero.
   10. **git show**:El comando git show puede mostrar un objeto Git de una manera simple y legible por humanos.
   11. **git init**: El comando git init crea un nuevo repositorio de Git. Puede utilizarse para convertir un proyecto existente y sin versión en un repositorio de Git
  * Aprendimos a lanzar el difftool por el TkDiff en lugar del visor del propio Git (ya que es muy poco visual).
### Sesión 2: 08/04/2022
 * Aprendimos con un primer ejemplo a vincular Git con GitHub por medio de un software llamado bat. Lo podemos ver a continuación:
  ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaSOBat.png)
 * Vimos el comando necesario para vincularnos a un repositorio, utilizamos: **git remote add origin ruta** donde **ruta** es la direccion del repositorio. Por lo que en nuestro ejemplo quedaría **git remote add origin https://github.com/sharkdp/bat**. Se suele usar **origin** por convención ya que suele indicar algo que se encuentra remoto.
 * Utilizamos **git fetch origin**: Para conectarnos y ver lo que contiene **origin**.
 * Vimos el comando **git pull origin master**: donde git pull indica "descarga", en este caso "origin" (lo que vamos a descargar) en nuestra rama actual que es "master".
 * Vimos **git branch -v -a**: Esto nos muestra las ramas que tenemos disponibles/a las que estamos conectados y somos capaces de ver.
 * Ahora, luego de ejecutar correctamente los comandos anteriores, si ejecutamos ls -l vemos que hemos descargado todo lo que se ha encontrado en la red.
  ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaDescargaDeRed.png)
 * Aprendimos el comando **git clone** el cual copia/clona el repositorio al que apuntemos en un nuevo directorio, este comando incluye de forma explícita los comandos que usamos anteriormente todos juntos (**git init, git fetch y git pull**).
  ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaDescargaDeRed.png)
 * Vimos el comando **git push** el cual sirve para subir los commits al repositorio enlazado.
 * Utlicé para las pruebas un repositorio que tengo ya creado el cual no me importaba ensuciar, es https://github.com/carlosdanieltc/horse-chess . En el cual añadí un archivo por medio de los comandos vistos, este archivo lo llame "readmeeee" y anteriormente no se encontraba en dicho repositorio, hasta que ejecute la siguiente serie de comandos: 
   ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaSubirFichero1.png)
   ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaSubirFichero2.png)
   ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaRepoPruebaCreacionArchivo.png)
 * Vimos el comando **git checkout** el cual recupera/trae algo de la rama principal (master por defecto), por medio del modificador **--** especificamos el archivo a traer. En este primer ejemplo utilizamos también una etiqueta que referencie a un identificador, en este caso es **HEAD** el cual es el puntero a la ultima revisión, por lo que finalmente la forma de recuperar los ficheros sería **git checkout HEAD -- .** y los recuperaríamos.
 * Vimos un comando considerado bastante potente ya que sirve para deshacer cualquier cambio local en el estado de un repositorio de Git, ese comando es **git reset** y lo usamos de esta forma **git reset --hard HEAD~1**.
### Sesión 3: 09/04/2022
 * Hemos visto el comando de **git revert** el cual sirve para deshacer el historial de commits de un repositorio.
 * Conocimos el comando **git merge** el cual nos servirá si queremos tomar las lineas independientes de desarrollo creadas por git branch e integrarlas en una sola rama.
 * Aprendimos el trabajo con ramas (branch), las cuales son una utilidad para llevar mejor control del código. Se trata de una bifurcación del estado del código que crea un nuevo camino de cara a la evolución del código, en paralelo a otras ramas que se puedan generar. Mediante el comando **git branch** el cual permite crear, enumerar y eliminar ramas, así como cambiar su nombre. A continuacion vemos como creamos una rama en este **caso new_master** siendo **master** la rama de partida y, por medio del comando **git checkout new_master** saltamos a esta rama que hemos creado.
![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaCrearRama.png)
 * A continuación creamos una serie de ficheros en la rama **new_master** y mostramos el contenido de dicha rama, seguidamente hicimos la comparación con la rama **master** y pudimos observar la diferencia entre ambas aún siendo el mismo directorio para las dos (el directorio en el que estamos trabajando), como vemos a continuación: 
![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/CapturasGit/CapturaComparaci%C3%B3nEntreRamas.png)
 * Vimos el comando necesario a la hora que queramos borrar una rama, sería con **git branch -d new_master**.
 * Anteriormente vimos los comandos para crear una rama (**git branch nueva-rama rama-origen**) y para cambiarnos a dicha rama (**git checkout new_master**). Estos dos se pueden abreviar juntándose en uno solo con el comando **git checkout -b new-rama**.
 * Conocimos el comando **git blame** el cual nos sirve para examinar el contenido de un archivo línea a línea y ver cuándo se ha modificado cada línea y quién es el autor de las modificaciones.
 * Aprendimos una funcionalidad que es **git rebase** la cual nos sirve para reescribir la historia de un proyecto. Puede ser útil para un proyecto el cual lleva mucho tiempo, de forma que con un historial más limpio podamos entender más fácilmente que ha sucedido en el y los cambios que se han ido haciendo.
 * Aprendimos lo que son las etiquetas de código, usada típicamente para darle nombre a una versión de nuestro código. Las etiquetas suelen dividir en dos tipos, ligeras y anotadas siendo estas útimas las que albergan más información y se guardan en la base de datos como objetos enteros. Se hace por medio del comando **git tag**.
 * Vimos como "movernos en el tiempo" de nuestro proyecto, de forma que suponiendo que hemos tenido a lo largo del tiempo diferentes commits, los veamos reflejados como hitos de tiempo a los cuales podemos volver. Esta opción la haremos también con el comando **git checkout** el cual tiene múltiples funcionalidades, en este caso quedaría **git checkout ID del commit**.
 * Vimos una funcionalidad llamada **git stash** la cual nos permite hacer una especie de "foto" que mandamos a una especie de "portapapeles" y que nos permite almacenar en un sitio temporal lo que tengamos en el área de staging. Esto nos permitirá recuperar, si queremos, esa información que capturamos.
 * Pudimos ver también una explicación de lo que es GitHub y GitLab, plataformas de alojamiento para nuestros proyectos donde podremos crear repositorios y publicarlos bien sea de forma pública o privada. Éstas plataformas son completamente compatibles con la herramienta Git que hemos ido aprendiendo a lo largo de este curso. 

## Curso HTML y CSS3
En este curso aprenderemos qué es HTML, CSS y la evolución de ambos, además de las distintas partes y estructura de una página web. Es un curso básico donde veremos lo imprescindible de ambas tecnologías.
### Sesión 4: 10/04/2022
 * Vimos lo que es HTML, un lenguaje de marcado donde sus siglas significan:
 1. **H**IPER**T**EXT.
 2. **M**ARKUP.
 3. **L**ANGUAJE.
 * Vimos las páginas mas recomendadas a la hora de necesitar solicitar información sobre los temas a ver, que son:
 1. https://www.w3schools.com/
 2. https://developer.mozilla.org/es/docs/Web/HTML
 3. https://developer.mozilla.org/es/docs/Web/CSS
 * Vimos lo que es CSS, un lenguaje de diseño gráfico que nos permite definir y crear la presentación de nuestro documento, donde sus siglas significan:
 1. **C**ASCADING.
 2. **S**TYLE.
 3. **S**HEETS.
 * El entorno de trabajo que utilizaremos para este curso será:
 1. **Visual Studio Code**: Como editor de código, con algunas extensiones como:
  1.1 **Auto Close Tag**.
  1.2 **Auto Rename Tag**.
  1.3 **Beautify**.
  1.4 **GitLens**.
  1.5 **IntelliSense for CSS**.
 2. **Git**: Para llevar el control de versiones.
 3. **Herramientas de desarrolladores** de los navegadores **Chrome** y **FireFox Nightly**.
 * Usaremos también hojas de referencia (CHEATSHEETS) las cuáles son:
 1. https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf
 2. https://websitesetup.org/css3-cheat-sheet/


 
 
