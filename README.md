# Angular4 Production Template 

A production template for Angular4

### Installation

Clone the project

```sh
$ git clone https://github.com/eftakhairul/angular4-project-template
```

Get inside the project by `cd angular4-project-template` and then you have to run install command
```sh
$ npm install 
```

After downloading all required packages it also triggers for typing install itself.

Run the project locally (It will give temporary URL)
```sh
$ npm run serve:local
```

For Production build
```sh
$ npm run build
```

For Production build with ugly and minified JS
```sh
$ npm run build:prod
```

Source code directory
```sh
/src/app
```

There is also dummy app available in `dummy-app` branch. To checkout, run the command:
```sh
git checkout dummy-app
```

Run angular4 app in docker with Nginx server
Build image
```sh
docker build -t angular4-app:v1 .
```
Run the image
```sh
docker run -d -p 80:80 angular4-app:v1
```

Now you can visit: http://localhost from any browser.

#### Authors ####

[Md. Eftakhairul Islam](https://eftakhairul.com) Email: eftakhairul [at] gmail [dot] com
