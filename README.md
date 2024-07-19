# Протестировала авторизацию на сайте netology.ru.

1. Подготовила тестовые данные в файл user.js, добавила его в .gitignore.

2. Создала тест «Успешная авторизация»

3. Создала тест «Неуспешная авторизация»

---

## Задача 2. UI-тест на Playwright

Нужно протестировать авторизацию на сайте [netology.ru](https://netology.ru/).

1. Подготовьте тестовые данные:

- создайте файл `user.js` и положите в него свой email и password как константы;
- добавьте файл `user.js` в `.gitignore`. 
**Важно.** Проследите, чтобы email и password не попали в ваш репозиторий, иначе ваш проект не пройдёт аудит безопасности, а злоумышленники получат ваши данные.

2. Создайте тест 1 «Успешная авторизация»:

- откройте [форму авторизации](https://netology.ru/?modal=sign_in);
- добавьте ваш email в поле для ввода email;
- добавьте ваш пароль в поле для ввода пароля;
- нажмите на кнопку `Войти`.

3. Проверьте ожидаемый результат:

- проверьте, что открылась страница [профиля](https://netology.ru/profile);
- удостоверьтесь, что страница профиля открыта, например, проверив элемент `h2` и текст заголовка.

4. Создайте тест 2 «Неуспешная авторизация»:

- повторите тест 1, используя невалидные данные для авторизации.

5. Проверьте результат:

- проверьте текст об ошибке в появившемся блоке.

6. Запушьте репозиторий с тестами на GitHub.

7. Отправьте ссылку на репозиторий на проверку.

