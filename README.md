# 🗡️ Hyrule Shop - React Native & Expo App

Aplicación móvil y web inspirada en el universo de *The Legend of Zelda*, desarrollada con **React Native**, **Expo Router** y **TypeScript**. 

La aplicación cuenta con gestión global del carrito de compras mediante Context API, componentes de interfaz modulares e integración de audio personalizado para una experiencia inmersiva.

---

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu entorno de desarrollo:

* **Node.js**: Versión LTS recomendada (v18.0.0 o superior). [Descargar Node.js](https://nodejs.org/)
* **npm** (incluido con Node), **yarn** o **pnpm** como gestor de paquetes.
* **Git**: Para el control de versiones y clonar el repositorio. [Descargar Git](https://git-scm.com/)
* **Expo Go** (Opcional, para pruebas en dispositivos físicos): Disponible en [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779) y [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent).
* **Emulador / Simulador** (Opcional):
  * **Android**: Android Studio con un dispositivo virtual (AVD) configurado.
  * **iOS**: Xcode (requiere entorno macOS).

---

## 🚀 Instalación y Configuración

Sigue estos pasos en tu terminal para clonar y preparar el proyecto:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/DamianPonte/hyrule-shop.git](https://github.com/DamianPonte/hyrule-shop.git)
cd hyrule-shop
```

### 2. Instalar dependencias
```bash
npm install
```

---

## 💻 Ejecución de la Aplicación

Inicia el servidor de desarrollo de Expo ejecutando:

```bash
npx expo start
```

Una vez iniciado el servidor, verás un menú interactivo en la terminal junto a un código QR. Puedes desplegar la app en distintos entornos:

* **Navegador Web:** Presiona la tecla `w` en la terminal.
* **Dispositivo Móvil Físico:** Abre la app **Expo Go** en tu teléfono y escanea el código QR proyectado en la consola.
* **Emulador Android:** Inicia tu emulador en Android Studio y presiona la tecla `a` en la terminal.
* **Simulador iOS (macOS):** Presiona la tecla `i` en la terminal.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** React Native / Expo (navegación basada en archivos con `expo-router`).
* **Lenguaje:** TypeScript.
* **Estilos:** NativeWind / Tailwind CSS.
* **Gestión de Estado:** React Context API (`CartContext`).
* **Multimedia:** `expo-av` (reproducción de audios en la interfaz).

---

## 📂 Estructura del Proyecto

```text
hyrule-shop/
├── app/                  # Rutas y pantallas principales (Expo Router)
├── assets/               # Recursos estáticos (imágenes y audios como KokiriForest.mp3)
├── components/           # Componentes reutilizables de UI
├── context/              # Estado global de la app (CartContext)
├── package.json          # Configuración de dependencias y scripts
└── README.md             # Documentación del proyecto
```