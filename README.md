# Weather App :sun_behind_small_cloud:

## Descripción

Esta aplicación del clima muestra el pronóstico actual y el de los próximos cinco días. Podés seleccionar entre cinco ciudades por medio de un selector o podés habilitar la ubicación y te mostrará el clima de tu ubicación.

![imagen del proyecto](https://github.com/maarcf/weather-app/blob/main/public/assets/images/readme-img.png)

## Características y tecnologías

- :zap: React.
- :zap: TypeScript.
- :zap: SCSS.
- :zap: HTML semántico.
- :zap: Geolocalización.
- :zap: Husky, ESLint y Prettier.

## Otras consideraciones

El proyecto utiliza un API para obtener la información del clima. Al agregar la ubicación del usuario me encontré con que la API no cuenta con la posibilidad de hacer geolocalización a la inversa (teniendo latitud y longitud obtener la cuidad), con lo cual mostraba como address la dirección de la latitud y longitud.
Es por eso que agregué otra API que hace la geolocalización a la inversa, devolviendo el nombre de la cuidad y luego con el nombre hago la petición del clima a la otra API.

**[Ir a ver el clima](https://weather-app-by-maarcf.netlify.app/)** :rainbow:

## Instalación del proyecto

- 1.- Clonar este repositorio.
- 2.- Agregar el archivo .env con las variables correspondientes.
- 3.- Instalar las dependencias del proyecto con **YARN**
- 4.- Una vez instaladas las dependencias, correr el comando: `yarn dev` para levantar el proyecto.

**Configuración archivo .env**
| Variables | |
| ------ | ------ |
| VITE_API_KEY | API KEY de VisualCrossing |
| VITE_BASE_URL_SERVICES | https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline |
| VITE_REVERSE_GEO_API_KEY | API KEY de OpenCage |
| VITE_REVERSE_GEO_BASE_URL | https://api.opencagedata.com/geocode/v1/json |

## Contacto

Mariana Cairo
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mariana-cairo/)](https://www.linkedin.com/in/mariana-cairo/)
