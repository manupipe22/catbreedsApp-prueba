# Michis 🐱

Aplicación móvil desarrollada con **Ionic + Angular**, que permite visualizar y explorar diferentes razas de gatos mediante la API pública [TheCatAPI](https://thecatapi.com/).
Se realiza esta App con la finalidad de participar en un proceso de selección el Pragma.

Puede descargar el .apk para facil revision

## 📱 Características principales

- Pantalla de splash personalizada.
- Lista de razas de gatos en formato de tarjetas.
- Búsqueda por nombre de raza.
- Detalle completo de cada raza:
  - Imagen
  - Descripción - tener en cuenta que se agrego un loren para demostrar el punto 3.1 del ejercicio que es el scroll en la descripción del gato
  - País de origen
  - Nivel de inteligencia
  - Adaptabilidad
  - Esperanza de vida
- Soporte para navegación entre pantallas.
- Estilos adaptativos y scroll en contenido extendido.

## 🚀 Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular 17](https://angular.io/)
- [Capacitor](https://capacitorjs.com/)
- [TheCatAPI](https://thecatapi.com/)

## 🔧 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/manupipe22/catbreedsApp-prueba.git
   cd michis-app
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Ejecuta en navegador:

   ```bash
   ionic serve
   ```

4. Compila para Android:

   ```bash
   ionic build
   npx cap sync android
   npx cap open android
   ```

## 🧱 Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── breeds/
│   │   └── breed-detail/
│   ├── services/
│   │   └── cat.service.ts
│   ├── app-routing.module.ts
├── assets/
│   └── images/
│       └── cat-logo.png
├── environments/
│   └── environment.ts
```

## ⚙️ Configuración

Crea un archivo en `src/environments/environment.ts` con la siguiente estructura:

```ts
export const environment = {
  production: false,
  apiUrl: "https://api.thecatapi.com/v1",
};
```

Para producción, crea `environment.prod.ts`.

## 🖼️ Icono e imagen de splash

Los recursos se encuentran en la carpeta `/resources`. Para generar los íconos e imágenes de splash:

```bash
npx @capacitor/assets generate
```

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.

---

¡Gracias por usar Michis! 😺
