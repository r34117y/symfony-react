# Symfony - React App Template

This is a template for web application powered by Symfony 5 PHP framework and React 18.
It is based on [this article from twilio.com](https://www.twilio.com/blog/building-a-single-page-application-with-symfony-php-and-react),
but for newer versions of React and Symfony and with little changes and minor bugs fixed.

## Instalation

- `composer install`
- `yarn install`
- `symfony serve -d`
- `yarn encore dev --watch` (in separate terminal)

## Troubleshooting

In case on problems with CORS, adjust the `nelmio_cors.yaml` settings.

There is also hardcoded localhost port in `Users.js` - also adjust it if needed.