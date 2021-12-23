# Задание No1

Задача:
Разработать приложение для конвертации между единицами измерения расстояния с
поддержкой метрической и имперской систем мер. Соотношения для конвертации вы
можете взять из таблицы. По умолчанию, приложение должно распознавать метры (m),
сантиметры (cm), дюймы (in) и футы (ft), и поддерживать конвертацию между любыми
единицами.
Также необходимо реализовать возможность расширять список поддерживаемых единиц
путем задания правил конвертации посредством JSON файла. Формат JSON файла - на
ваше усмотрение. В качестве примера, расширьте ваше приложение добавив в файл
значения для миллиметров (mm), ярдов (yd) и километров (km).
Входящие параметры:
Объект в JSON формате, содержащий расстояние заданное для конвертации (distance) со
значением (value) и шкалой (unit), a также обозначение единицы для шкалы, в которую
должна быть произведена конвертация (convert_to). Например:
{"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}
Выходные данные:
Объект в JSON формате, содержащий полученное значение расстояния, округленное до
сотых, а также обозначение соответствующей единицы измерения, например:
{"unit": "ft", "value": 1.64}

# Задание No2

Задача:
Разработать простое приложение для сортировки и отбора данных по заранее заданным
правилам. Приложение должно уметь работать со списками JSON объектов произвольной
структуры, отбирать объекты, содержащие ключи с определенными значениями, а также
сортировать объекты по значениям, используя естественный порядок сортировки.

Например, если для данных вида:
{"data": [{"name": "John", "email": "john2@mail.com"},
{"name": "John", "email": "john1@mail.com"},
{"name": "Jane", "email": "jane@mail.com"}]}

задать условие:
{"condition": {"include": [{"name": "John"}], "sort_by": ["email"]}}
содержащее два правила - include и sort_by (где правило include принимает набор пар
ключ:значение для проверки записей на соответствие, а правило sort_by принимает набор
ключей для сортировки), результатом будет объект, содержащий только записи с именем
John, отсортированные по ключу email:
{"result": [{"name": "John", "email": "john1@mail.com"},
{"name": "John", "email": "john2@mail.com"}]}

Планируя подход к дизайну кода приложения, необходимо предусмотреть возможность
расширять функционал через добавление в код новых “модулей” с правилами. Важно,
чтобы все модули имели между собой идентичную структуру, были изолированы друг от
друга и остального кода приложения, и взаимодействовали с основным кодом, используя
один и тот же подход. В качестве примера, вы можете добавить модуль с дополнительным
правилом exclude, которое будет отбрасывать записи, содержащие ключи с определенным
значением.
Входящие параметры:
JSON объект со списком данных (data), и условием для обработки (condition):
{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}],
"condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}
Выходные данные:
JSON объект с данными полученными после применения условия обработки (result):
{"result": [{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "mike@mail.com", "rating": 20, "disabled": false}]}

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
