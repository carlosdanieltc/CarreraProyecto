#### CarreraProyecto

# Carrera Desarrollador Full Stack MEAN Proyecto FCT
Esta carrera de Stack MEAN, está compuesta por MongoDB, ExpressJS, AngularJS y Node.js. En ella aprenderemos a crear aplicaciones web completas. Podremos desarrollar la parte del servidor y la del cliente con JavaScript, utilizando las cuatro tecnologías que conforman este stack de desarrollo, uno de los más usados en la actualidad por miles de programadores y empresas.

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
    3. Staging area (Área de preparación). (INTRODUCCION)
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
 
  
