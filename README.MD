# Node.js App Deployment with AWS Elastic Beanstalk

Este repositorio contiene la configuración y código para desplegar una aplicación Node.js sencilla en AWS Elastic Beanstalk.

---

## 🚀 Despliegue

### Requisitos previos

- Tener AWS CLI instalado y configurado con tus credenciales (`aws configure`)
- Tener Elastic Beanstalk CLI instalada (`eb cli`)
- Node.js instalado (versión recomendada 14.x o superior)

### Pasos para desplegar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo-node-beanstalk.git
   cd tu-repo-node-beanstalk

2. Inicializa Elastic Beanstalk en el proyecto:
    ```bash
    eb init
    ```
3. Crea un entorno Elastic Beanstalk y despliega la app:
    ```bash
    eb create nombre-del-entorno
    eb deploy
    ```
4. Abre la aplicación en el navegador:
    ```bash
    eb open
    ```
### Despliegue manual con AWS CLI (opcional)
También puedes crear un paquete ZIP y subirlo usando AWS CLI.

📦 Estructura del proyecto
app.js - Archivo principal de la aplicación Node.js.

.elasticbeanstalk/ - Configuraciones del entorno Elastic Beanstalk.

package.json - Dependencias y scripts de Node.js.

README.md - Este archivo.


