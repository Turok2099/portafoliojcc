# 🚀 Guía de Deployment en Vercel

## Instrucciones para Desplegar tu Portfolio

### 1. Preparar el Proyecto

Asegúrate de tener todo configurado:

```bash
cd Portafolio
npm run build  # Verifica que el build funcione correctamente
```

### 2. Subir a GitHub

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit: Portfolio de Jorge Castro"

# Agregar remote (reemplaza con tu repo)
git remote add origin https://github.com/Turok2099/portfolio.git

# Push al repositorio
git branch -M main
git push -u origin main
```

### 3. Deployment en Vercel

#### Opción A: Desde la Web (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con GitHub
3. Click en "Add New Project"
4. Selecciona tu repositorio `portfolio`
5. Configura:
   - **Framework Preset**: Next.js (debe detectarse automáticamente)
   - **Root Directory**: `./` (por defecto)
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `.next` (por defecto)
6. Click en "Deploy"

#### Opción B: Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Para producción
vercel --prod
```

### 4. Configurar Dominio Personalizado (Opcional)

Después del primer deploy:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones de Vercel

### 5. Variables de Entorno (Opcional)

Si quieres usar Cloudinary o Google Analytics:

1. Ve a Settings → Environment Variables
2. Agrega:
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `NEXT_PUBLIC_CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `NEXT_PUBLIC_GA_ID`

### 6. Automatización

- ✅ **Deploy automático** en cada push a `main`
- ✅ **Preview deployments** para cada PR
- ✅ **Rollback** fácil si hay problemas

## 🎨 Personalización Pre-Deploy

### Cambiar Dominio en Metadata

Edita `src/app/layout.tsx`:

```typescript
metadataBase: new URL("https://TU-DOMINIO.com"),
```

### Actualizar URLs

- En `src/app/page.tsx` - Structured Data
- En `src/app/sitemap.ts`
- En `src/app/robots.ts`

### Actualizar Información de Contacto

Edita `src/components/Contact.tsx` con tus datos.

## ✅ Checklist Pre-Deploy

- [ ] Build exitoso (`npm run build`)
- [ ] Sin errores de linting
- [ ] Actualizado dominio en metadata
- [ ] Actualizado información de contacto
- [ ] URLs de proyectos correctas
- [ ] Imágenes cargando correctamente
- [ ] Responsive en móvil
- [ ] Links funcionando
- [ ] Git inicializado
- [ ] Código en GitHub

## 🚀 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Verificar linting
npm run lint

# Preview del build
npm run build && npm run start
```

## 📊 Post-Deploy

Después del deploy, verifica:

1. **Performance**: Lighthouse en Vercel
2. **SEO**: Google Search Console
3. **Analytics**: Si configuraste GA
4. **Links**: Todos funcionando
5. **Responsive**: Móvil y desktop

## 🎯 Resultados Esperados

- **Lighthouse Performance**: > 90
- **SEO Score**: > 90
- **Accessibility**: > 90
- **Best Practices**: > 90

---

¡Tu portfolio estará en línea en minutos! 🚀
