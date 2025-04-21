This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#yarvino

nextJs ReactJs (17) SVG Linux nginx pm2

для входа в сервер необходимо следующее:

1. добавить ssh key в VDS
```cat ~/.ssh/id_rsa.pub```
[Ссылка на страницу добавления SSH](https://b2b.reg.ru/user/account/#/cvps/71156691/settings)

2. комадна
```ssh root@37-140-199-13.cloudvps.regruhosting.ru```
пароль для root пользователя:
iecoJoop3Xee

после каждого перезапуска сервера не запускается nginx и apache (не показывается сайт)
поэтому после входа запускаем это
1. ```sudo systemctl restart nginx```
2. ```systemctl restart apache2```
——TODO поставить перезапуск в автоматический режим с помощью PM2 (конфигурация находится в файле ecosystem.config.js)

настройки nginx находятся тут:
- ```/home/admin/conf/web```

адрес проекта сайта:
- ```/var/www/lakes```

data.js - файл с информацией о ценах на участки и тд (а-ля CMS)
.env - файл с конфигурацией/настройками почтового клиента

при изменении файлов приложения в репозитории необходимо сделать билд:
1. ```git pull origin main```
2. ```source ~/.bashrc ```- тоже можно исправить путем добавления pm2 в конфиг rc
3. ```pm2 stop next-prod``` - останавливает текущий проект
4. ```npm run build```
5. ```pm2 start next-prod``` - запускает проект на порту 3000
6. ```pm2 monit``` - логи
7. ```pm2 logs``` - логи

вход на почту, на которую шлют письма люди из формы:
- http://37.140.199.13/webmail/
- еmail@yarvino.ru - логин
- 1234qwer - пароль (можно сменить в настройках)




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
