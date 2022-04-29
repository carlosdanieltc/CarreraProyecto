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
      * **Confirmado (commited).**
      * **Modificado (untracked).**
      * **Preparado (staged).**
  * Aprendimos las secciones principales de un proyecto de Git.
      * Git Directory (Directorio de Git).
      * Working directory (Directorio de trabajo).
      * Staging area (Área de preparación). 
  * Instalamos Git y tkdiff, el cual es un visor gráfico, herramienta que utilizaremos para nuestro trabajo en Git.
  * Aprendimos algunos comandos de Git para consola y su uso, como por ejemplo:
      * **git status**: Hace un listado de los archivos nuevos o a insertar en un commit.
      * **git add**: Añade **TODOS** los archivos al stagin area.
      * **git commit -m "Comentario de commit"**: Realiza un commit. Guarda una copia del estado del archivo/s en ese momento y añade el código SHA a la cabecera del repositiorio.
      * **git diff**: Comando para comparar cambios entre dos datos de entrada.
      * **git commit -m "Comentario de commit"**: Realiza un commit. Guarda una copia del estado del archivo/s en ese momento y añade el código SHA a la cabecera del repositiorio.
      * **git log**: Comando para explorar el historial, usado por si necesitas buscar una version concreta de un proyecto.
      * Creación del archivo **.gitignore** el cual sirve para indicarle a Git qué archivos o carpetas ignorar de un proyecto.
      * **git difftool**: Comando que nos permite comparar y editar archivos.
      * **git mv fichero fichero2**: Renombrar ficheros donde fichero2 será el nuevo nombre de fichero.
      * **git show**:El comando git show puede mostrar un objeto Git de una manera simple y legible por humanos.
      * **git init**: El comando git init crea un nuevo repositorio de Git. Puede utilizarse para convertir un proyecto existente y sin versión en un repositorio de Git
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
    * **H**IPER**T**EXT.
    * **M**ARKUP.
    * **L**ANGUAJE.
  * Vimos las páginas mas recomendadas a la hora de necesitar solicitar información sobre los temas a ver, que son:
    * https://www.w3schools.com/
    * https://developer.mozilla.org/es/docs/Web/HTML
    * https://developer.mozilla.org/es/docs/Web/CSS
  * Vimos lo que es CSS, un lenguaje de diseño gráfico que nos permite definir y crear la presentación de nuestro documento, donde sus siglas significan:
    * **C**ASCADING.
    * **S**TYLE.
    * **S**HEETS.
  * El entorno de trabajo que utilizaremos para este curso será:
    * **Visual Studio Code**: Como editor de código, con algunas extensiones como:
    **Auto Close Tag**,
    **Auto Rename Tag**,
    **Beautify**,
    **GitLens**,
    **IntelliSense for CSS**.
    * **Git**: Para llevar el control de versiones.
    * **Herramientas de desarrolladores** de los navegadores **Chrome** y **FireFox Nightly**.
  * Usaremos también hojas de referencia (CHEATSHEETS) las cuáles serán:
    * https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Recursos/htmlcheatsheet.pdf
    * https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Recursos/wsu-css-cheat-sheet-gdocs.pdf
  * Aprendimos lo que son los atributos de las etiquetas, los cuáles proporcionan información adicional sobre la misma. Ejemplo: **<img src="foto.jpg".../>** donde **src** sería el atributo y **foto.jpg** el valor de dicho atributo.
  * Vimos como poner comentarios en medio de nuestro código con **<!-- Texto del comentario -->**.
  * Observamos la estructura de una página web la cuál es siempre de un árbol **DOM** (Document Object Model) que sería básicamente como un árbol genealógico.
 
 ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Capturas/CapturaEstructuraBasica.png)
  * Vimos la etiqueta de cabecera **HEAD** la cual no contiene contenido de la propia página sino más bien enlacesd a hojas de estilo, scripts usados, etc. Podemos ver algunas de las siguientes etiquetas en la cabecera:
    * **title**: Título de la página.
    * **style**: Hojas de estilo.
    * **meta**: Describir página web.
    * **link**: Enlaces a archivos.
    * **script**: Añadir ficheros JavaScript.
    * **base**: Establecer ruta por defecto.
  * Vimos distintas opciones para la etiqueta de **meta** las cuáles nos pueden ayudar a mejorar lo que sería el **SEO** (Search Engine Optimization) de nuestra página, las podemos ver en el primer fichero de ejemplo que hicimos: https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Ficheros/estructura.html
  * Vimos distintas etiquetas básicas las cuales podemos ver en la siguiente ruta: https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Ficheros/EtiquetasBasicas.html.
  * Vimos los posibles tipos de rutas:
    * Relativas: En relación al propio directorio de donde se encuentra el propio html.
    * Absolutas: En relación al directorio raíz de nuestro disco duro.
    * url: Dirección de internet.
 
 Siendo las relativas la mejor opción para evitar cualquier tipo de fallo. Además vimos cómo poner dichos enlaces mediante la etiqueta **<a />** y las opciones que tenemos para ponerlos, que pueden ser tanto en texto como en alguna imágen.  
  * Hicimos un primer ejercicio bastante básico en el que mezclamos enlaces con imágenes además de implementar un poco de CSS en línea, que no es más que CSS implementado en la propia etiqueta con el atributo **<style>**, lo podemos ver en el siguiente enlace: https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Ficheros/Ejercicio1Enlaces_Imagenes/ejer_img.html.
### Sesión 5: 23/04/2022
  * Repasamos los distintos tipos de listas que hay **li** que podrían ser las ordenadas **ol** y las desordenadas **ul**, además de las de definición **dl**.
  * Repasamos las tablas **table** con sus filas **tr** y para sus celdas con **td** o **th** donde (th) sería en negrita y centrado. 
  * Repasamos también las posibles etiquetas de table, como podrían ser **colgroup**, **caption**, **thead**, **tbody**, **tfoot**.
  * También repasamos las tablas complejas **(rowspan y colspan)**, dichos atributos se utilizan para que una celda ocupe mas filas o más columnas.
  * Repasamos algunos estilos para la tabla con css en linea, como **border** para los bordes de la tabla y **collapse** para cambiar el estilo del los propios bordes.
  * Vimos un repaso de los formularios **form** y sus posibles atributos y etiquetas (**label**). Como **select**, sus respectivos **input**, **textarea**, botones y los tipos que hay (**button, reset, submit**) y **fieldset** para agrupar campos del formulario.
  * Repasamos los distintos tipos de inputs que existen, como **button**, **checkbox**, **color**, **date**, **image**, **number**, **radio**, **password**, **text**, **submit**, **tel**, **email**, entre otros. 
  * Vimos, gracias a html 5 test: https://html5test.com/index.html que tipos de inputs estan soportados por ciertos navegadores. 
  * Realizamos un ejercicio bastante completo de lo visto hasta ahora, donde se abarcan apartados como las tablas, un formulario, distintos inputs y un poco de estilo por medio de css en línea, lo podemos ver en el siguiente enlace: https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Ficheros/ejercicio_formularios.html
### Sesión 6: 26/04/2022
  * Vimos las etiquetas multimedia, etiquetas nuevas que se han incluido en HTML5 y pueden ser **audio/video** con sus distintos posibles atributos como **controls**: para mostrar los tipicos controles de play, pause, reverse; **autoplay**: para reproducir el audio o video apenas haya cargado la página; **loop**: para reproducir en bucle dicho audio o video; **muted**: para que la primera vez que se reproduzca dicho audio o video lo haga sin sonido por defecto; entre otros. Podemos ver un ejemplo  básico a continuación: 
 
![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Capturas/CapturaEtiquetasMultimedia.png)
  * Vimos las etiquetas semánticas las cuáles sirven para que los desarrolladores, navegadores o buscadores sepan que tipo de contenido hay en ciertas secciones de la web, por ejemplo las clásicas, **header**, **footer**, **main**, **section**, **nav**, entre otros. Dichas etiquetas semánticas se comportan como un simple **div** y dan cierto significado al contenido que contienen. 
  * Vimos un poco acerca de la accesibilidad de nuestra página web,como por ejemplo:
    * Tener en cuenta que dicha página puede ser visitada por personas con discapacidad.
    * Tener en cuenta las etiquetas semánticas en lugar de simples div.
    * Añadir atributos **alt** a las imágenes.
    * Especificar idioma de la página.
    * Utilizar cabeceras correctamente.
  * Dimos inicio al tema de CSS, el cual es un lenguaje de diseño gráfico utilizado para definir y crear la presentación de un documento escrito en un lenguaje de marcado, como lo es HTML.
  * Vimos las posibles formas de implementar css, como podría ser **en línea**, mediante la etiqueta **style** dentro de la cuál podremos aplicar css a todas las etiquetas que queramos (para esa misma página), mediante la directiva **import** la cual se especifica también dentro de la etiqueta style con el problema de que no todos los navegadores utilizan de la misma forma dicha directiva y por último y la más recomendada mediante la etiqueta **link** en la cual especificamos la ruta a nuestro archivo css el cual podremos reutilizar para distintos html. 
  * Repasamos el modelo de caja, de **línea** o de **bloque**, donde todas las cajas disponen de su **margin**, **padding**, **border** y su contenido. Donde si las cajas son de tipo en **línea** se posicionan una al lado de otra mientras haya espacio para ésta, mientras que, si son en **bloque**, se posicionan siempre una debajo de otra. 
  * Repasamos el formato de un archivo css y sus distintos selectores, como **.class**, **etiqueta**, **selector1,selector2** (aplica a todos los elementos seleccionados por ambos), **selector1 selector2** (aplica a todos los elementos de selector2 que estén dentro de selector1), **selector1>selector2** (aplica a todos los selector2 que sean hijos directos de selector1), entre otros.
  * Repasamos las propiedades más interesantes, aunque es una lista casi interminable, aquí están algunas de las más importantes:
    * **color:**
    * **background:** (Y sus distintas extensiones como -image,-color, etc).
    * Las distintas dimensiones como, **px**, **%**, **em**, **rem**.
    * **margin:** (Y sus distintas extensiones como -right,-top, etc).
    * **padding:** (Y sus distintas extensiones como -right,-top, etc).
    * **border:** (Y sus distintas extensiones como -color,-style, -width, -left, etc).
    * **font:** (Y sus distintas extensiones como -family, -weight, -size, etc).
    * **text:** (Y sus distintas extensiones como -align, -decoration, -indent, etc).
  * Realizamos un primer ejercicio básico donde implementábamos lo visto de css, se puede ver en https://github.com/carlosdanieltc/CarreraProyecto/tree/main/HTML_CSS/Ficheros/Ejercicio_con_selectores.
 
 **Sin CSS:**
 
 ![Sin css](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Capturas/CapturaEjercicioSinCssAplicado.png)
 
 **Con CSS:**
 
 ![Con css](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/HTML_CSS/Capturas/CapturaEjercicioConCssAplicado.png)
 
  * Repasamos los pseudoselectores, entre los más usados podemos ver: **:link**, **:visited**, **:checked**, **:hover**, **:empty**, entre otros.
  * Repasamos también los pseudoselectores de posición, entre los más usados podemos ver: **:first**, **:first-child**, **:last**, **:last-child**, **:nth-child(n)**, entre otros.
  * Vimos los pseudoelementos, los cuáles son palabras clave que se añaden a los selectores, nos indican una parte del elemento y permiten añadir contenido, la sintaxis sería: selector::pseudoelemento{ propiedades css }. Algunos pseudoelementos serían: **::first-line**, **::first-letter**, **::after**, **::before**, **::selected**, entre otros.
  * Aprendimos sobre los estilos por defecto y las hojas de reseteo, los estilos por defecto son estilos que cada navegador trae por defecto, por lo que nuestra página podría verse diferente dependiendo del navegador usado. Para esto utilizaremos las hojas de reseteo, las cuáles eliminan dichos estilos, por ejemplo los distintos tamaños o negrita de los distintos títulos (h1,h2, etc). Algunas hojas de reseteo más comunmente usadas pueden ser las siguientes:
    * https://meyerweb.com/eric/tools/css/reset/
    * https://cssdeck.com/blog/scripts/html5-doctor-css-reset-stylesheet/
  * Vimos los prefijos del navegador, como podrían ser:
    * **-webkit--** (Chrome,Safari,nuevas versiones de Opera y navegadores para IOS).
    * **-moz-** (Firefox).
    * **-o-** (Antiguas versiones de Opera).
    * **-ms-** (Internet Explorer y Microsoft Edge).
 
   Tenemos distintas herramientas que nos pueden indicar cuándo usar dichos prefijos, algunas  pueden ser:
    * http://shouldiprefix.com/.
    * https://github.com/postcss/autoprefixer.
  * Aprendimos formas de optimizar el CSS como:
    * Borrar reglas innecesarias y duplicadas.
    * Ordenar las propiedades por orden alfabético.
    * CSS en la cabecera.
    * Organizar las reglas poniendo las que tengan relación juntas.
 
   Existen algunas herramientas que nos ayudan a la optimización del css, como pueden ser:
    * https://www.toptal.com/developers/cssminifier/. 
    * https://www.cssportal.com/css-optimize/. 
    * https://unused-css.com/. 
  * Aprendimos de herramientas adicionales que nos podrían ayudar en la creación del CSS, como son los preprocesadores de CSS, los cuáles son programas que nos permiten crear CSS de forma automática añadiendo funciones que el propio CSS no tiene, como el uso de variables, selectores anidados, bucles, etc. Un ejemplo sería guardar en una variable un tipo de letra, de forma que al querer cambiar dicho tipo de letra llamemos a la variable declarada. Algunas de éstas herramientas son:
      * https://lesscss.org/.
      * https://sass-lang.com/.
 
## Curso JavaScript Profesional
En este curso veremos el uso esencial de javascript desde cero, el cual es un lenguaje de programación utilizado para añadir características interactivas en tu sitio web. 
### Sesión 7: 27/04/2022
  * Repasamos conceptos básicos de javascript, como que es un lenguaje de tipado débil y que es monohilo.
  * Vimos las que son las formas más recomendadas/usadas de incluir código javascript en nuestro html, que serían en línea o mediante la etiqueta link enlazando con el fichero javascript deseado.
  * Conocimos la página **about:blank** de chrome, la cuál nos llevará a una página en blanco que nos servirá para ejecutar un programa o hacer pruebas.
  * Repasamos conceptos básicos como declaración de variables y funciones.
  * Aprendimos términos como:
      * **Runtime**: Que proporciona características adicionales a nuestra aplicación en el tiempo de ejecución.
      * **Scope**: Puede definirse como el alcance que una variable tendrá en tu código. En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código.
      * **Event Loop**: Es el mecanismo que permite que pueda haber concurrencia en js. Es un bucle en el que cada iteración se pasa por fases.
      * **Garbage Collector**: Es un "recolector de basura" cuya tarea es rastrear las reservas de memoria y su utilización, para así encontrar cuándo cierta parte de la memoria ya no es necesaria, y en su momento liberarla automáticamente.
### Sesión 8: 28/04/2022
  * Vimos un repaso de los datos de tipo primitivo y de los objetos. 
  * Repasamos las variables y su declaración, pudiendo ser con:
      * **var**: Variable global que no entiende de bloques.
      * **let**: Variable con alcance limitado (scope) al bloque en el que se haya declarado.
      * **const**: Constante, variable que no se puede alterar.
  * Repasamos estructuras de código y conocimos una página que explica de forma bastante gráfica como funcionan dichas estructuras, es: https://visualgo.net/en.
  * Conocimos nuevos métodos para arrays como:
      * **lista.pop()**: Para extraer el último valor de un array (Lo elimina de dicha lista).
      * **lista.push()**: Añadir x valor a un array. (Última posición, efecto cola)
      * **lista.shift()**: Para extraer el primer valor de un array (Lo elimina de dicha lista).
      * **lista.unshift()**: Añadir x valor a un array en la primera posición. (Efecto pila).
  * Repasamos los distintos operadores que hay.
  * Aprendimos lo que son las expresiones regulares, las cuáles son patrones encerrados entre barras **/**, su uso puede mejorar el rendimiento y su formato sería algo así: **patrones/modificadores**, por ejemplo:
   ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/JavaScript/Capturas/CapturaExpresionRegular1.png)

   Donde **a** es el patrón que vamos a buscar y **g** es el modificador que se encarga de buscar todas las apariciones de dicho patrón. Por otro lado hacemos una mezcla de dichas expresiones regulares con funciones como podemos ver en el caso de **.test()**: que devuelve true o false si se encuentra el patrón; ó **.match()** que devuelve todas las apariciones del patrón buscado. 

   Por otro lado existen muchos más modificadores e información sobre las expresiones regulares la cuál podemos ver en el siguiente enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

   También, si queremos hacer pruebas sobre las expresiones regulares disponemos de la siguiente herramienta: https://regex101.com/#javascript
### Sesión 9: 29/04/2022
  * Conocimos las llamadas **función flecha**, las cuáles son una alternativa más compacta que una expresión de función tradicional, podemos ver algunos ejemplos con los siguientes métodos:
      * **.map()**: Permite transformar los elementos de una lista y que devuelve una nueva lista con los elementos transformados.
      ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/JavaScript/Capturas/CapturaMetodoMap.png)
      * **.filter()**: Permite filtrar los elementos de un array y generar uno nuevo con todos los elementos que cumplen una determinada condición.
      ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/JavaScript/Capturas/CapturaMetodoFilter.png)

     Para más información sobre las funciones fecha podemos visitar: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    * Aprendimos una serie de métodos que nos ayudan a especificarle un valor concreto a **this** (cambiar su referencia/apuntado). Éstos son:
      * **.call**: Permite llamar a cualquier función indicándole el objeto que actuará como this dentro de la función llamada
      * **.apply**: Funciona de igual forma que call a diferencia de que los parámetros se pasan con un array en vez de separados por comas.
      * **.bind**: Liga permanentemente (hasta que se haga un unbine) un **this** a una función. 

      En el siguiente ejemplo podemos ver la aplicación de los tres métodos, todos dan el mismo resultado en este caso, el cuándo usar uno u otro dependerá de aquello que queramos realizar:
      https://github.com/carlosdanieltc/CarreraProyecto/blob/main/JavaScript/Ficheros/call_apply_bind.js
      Como podemos ver en el ejemplo, pasándo como parámetro "novice" realizaríamos una multiplicación de 0.4*100 =40, en cambio si pasáramos "pro" estaríamos haciendo 0.2*100 =20.
  *  Vimos las funciones autoinvocadas **IIFE** que son funciones que se ejecutan tan pronto como se declaran y se componen de dos partes, la primera es la función anónima, encerrado por el Operador de Agrupación (). Esto impide acceder a variables fuera del **IIFE**. La segunda parte crea la expresión de función cuya ejecución es inmediata (). Una función **IIFE** se vería de la siguiente forma:
    ![Texto alternativo](https://github.com/carlosdanieltc/CarreraProyecto/blob/main/JavaScript/Capturas/CapturaIIFE.png)

  


      
    
  
 
  
 

 

