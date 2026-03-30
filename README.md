# Portfolio Landing

Портфолио на `Vite + React` с адаптивным лендингом, dark/light mode и готовой структурой для деплоя как на `Vercel`, так и на обычный `VPS`.

## Локальный запуск

1. Установить зависимости:

```bash
npm install
```

2. Запустить dev-сервер:

```bash
npm run dev
```

3. Проверить production-сборку:

```bash
npm run build
npm run preview
```

## Деплой на Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

## Деплой на GitHub Pages

Проект уже подготовлен под GitHub Pages через GitHub Actions.

1. Создай пустой GitHub-репозиторий
2. Запушь проект в ветку `main`
3. В GitHub открой `Settings -> Pages`
4. В `Build and deployment` выбери `Source: GitHub Actions`

После этого сайт будет деплоиться автоматически при каждом push в `main`.

## Деплой на VPS

1. Собрать проект командой `npm run build`
2. Скопировать содержимое папки `dist` на сервер
3. Отдавать `dist` через `Nginx` как статический сайт

Пример корня для `Nginx`: `/var/www/portfolio/dist`
