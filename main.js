// ##TASK 1
// Напишите функцию-конструктор, создающую объект, реализующий такой функционал: у
// нас на странице есть вопрос. При первом клике на него под ним открывается ответ
// на вопрос. При повтором - ответ прячется. Разметку вы найдете в файле.

//   <a href="" class="question">Девиз дома Баратеонов</a>
//   <div id="root"></div>

//   const questionText = "Девиз дома Баратеонов"; const questionAnswer = "Нам
//   ярость!";

let root = document.querySelector('#root');

function CreateQuestion(question, answer) {
    this.question = question;
    this.answer = answer;

    this.createLink = function () {
        let link = document.createElement('a');
        link.href = '#';
        link.textContent = question;

        let paragraph = document.createElement('p');
        paragraph.textContent = answer;

        link.addEventListener('click', () => {
            if (paragraph.classList.contains('on-page')) {
                paragraph.classList.remove('on-page');
                paragraph.remove()
            } else {
                paragraph.classList.add('on-page');
                link.after(paragraph);
            }
        });
        return link;
    }
}

let question = new CreateQuestion('Девиз дома Баратеонов', 'Нам ярость!');
let question2 = new CreateQuestion('Девиз дома Баратеонов2', 'Нам ярость2!');
root.append(question.createLink());
root.append(question2.createLink());

// ##TASK 2
// Создайте функцию-конструтор объекта stopwatch согласно описанию:

// Свойства объекта: - _time: время; - container: ссылка на DOM-элемент,
// внутри которого нужно выводить время.
// Методы объекта: - start, stop, reset, работающие с его свойствами. -
// setTime и getTime. setTimeбудет получать новое значение времени в
// качестве аргумента, и проверять, является ли оно положительным целым числом.
// Если да - то свойству _time будет присвоено значение аргумента, переданного
// в метод setTime и метод вернет ответ объект вида: { status: "success", }


// Если же аргумент не удовлетворяет критериям, то возвращать объект вида:

//       {
//       status: "error",
//       message: "argument must be positive integer"
//       }


// Метод же getTime будет просто возвращать значение свойства _time для
// использования его вне методов объектов.

// <p id="time"></p>
// <button id="start-time">Start</button>
// <button id="stop-time">Stop</button>
// <button id="reset-time">Reset</button>


// function Stopwatch(container) {
// }
// const startBtn = document.getElementById('start-time'); const stopBtn =
// document.getElementById('stop-time'); const resetBtn =
// document.getElementById('reset-time');
// const stopWatchContainer = document.getElementById('time'); const stopwatch =
// new Stopwatch(stopWatchContainer);
// startBtn.addEventListener('click', stopwatch.start.bind(stopwatch));
// stopBtn.addEventListener('click', stopwatch.stop.bind(stopwatch));
// resetBtn.addEventListener('click', stopwatch.reset.bind(stopwatch));

function Stopwatch(container) {
    this._time = 0;
    this.container = container;

    this.start = function () {
        this.startTimer = setInterval(() => {
            this.setTime(this.getTime() + 1);
            this.container.textContent = this.getTime();
        }, 1000);
    };

    this.stop = function () {
        clearInterval(this.startTimer);
    };

    this.reset = function () {
        clearInterval(this.startTimer);
        this.setTime(0);
        this.container.textContent = "";
    };

    this.setTime = function (time) {
        if (time >= 0 && time % 1 === 0) {
            this._time = time;
            return { status: "success" };
        } else {
            return {
                status: "error",
                message: "argument must be positive integer",
            };
        }
    };

    this.getTime = function () {
        return this._time;
    };
}

const startBtn = document.getElementById("start-time");
const stopBtn = document.getElementById("stop-time");
const resetBtn = document.getElementById("reset-time");

const stopWatchContainer = document.getElementById("time");
const stopwatch = new Stopwatch(stopWatchContainer);

startBtn.addEventListener("click", stopwatch.start.bind(stopwatch));
stopBtn.addEventListener("click", stopwatch.stop.bind(stopwatch));
resetBtn.addEventListener("click", stopwatch.reset.bind(stopwatch));


// ##TASK 3
// Задание: напишите функцию-конструктор Modal, которая будет создавать объект,
// описывающий всплывающее окно. Параметры объекта: - id всплывающего окна; -
// классы всплывающего окна; - текст внутри тега p;
// У объекта должно быть 3 метода: render, который возвращает DOM-элемент
// всплывающего окна с такой разметкой:

//   <div id="idОкна" class="классыОкна">
//   <div class="modal-content">
//   <span class="close">&times;</span>
//   <p>ТекстОкна</p>
//   </div>
//   </div>


// openModal, который открывает окно (его нужно использовать как обработчик click
// для button с id="myBtn"); closeModal - который закрывает окно при клике на
// крестик (span с классом close) внутри окна
// Код для вставки в HTML

//   <style>
//   body {
//   font-family: Arial, Helvetica, sans-serif;
//   }

//   /* The Modal (background) */
//   .modal {
//   display: none;
//   /* Hidden by default */
//   position: fixed;
//   /* Stay in place */
//   z-index: 1;
//   /* Sit on top */
//   padding-top: 100px;
//   /* Location of the box */
//   left: 0;
//   top: 0;
//   width: 100%;
//   /* Full width */
//   height: 100%;
//   /* Full height */
//   overflow: auto;
//   /* Enable scroll if needed */
//   background-color: rgb(0, 0, 0);
//   /* Fallback color */
//   background-color: rgba(0, 0, 0, 0.4);
//   /* Black w/ opacity */
//   }

//   .modal.active {
//   display: block;
//   }

//   /* Modal Content */
//   .modal-content {
//   background-color: #fefefe;
//   margin: auto;
//   padding: 20px;
//   border: 1px solid #888;
//   width: 80%;
//   }

//   /* The Close Button */
//   .close {
//   color: #aaaaaa;
//   float: right;
//   font-size: 28px;
//   font-weight: bold;
//   }

//   .close:hover,
//   .close:focus {
//   color: #000;
//   text-decoration: none;
//   cursor: pointer;
//   }

//   </style>



//   <div id="root"></div>
//   <button id="myBtn">Open Modal</button>
// let root = document.querySelector('#root');


let btn = document.querySelector("#myBtn");

let modal = new Modal("id", "modal", "Привіт, це тестове модальне вікно");
root.append(modal.render());
btn.addEventListener("click", modal.openModal.bind(modal));

function Modal(id, classes, text) {
    this.id = id;
    this.classes = classes;
    this.text = text;

    this.render = function () {
        this.mainDiv = document.createElement("div");
        this.mainDiv.id = this.id;
        this.mainDiv.className = this.classes;
        let modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        let span = document.createElement("span");
        span.className = "close";
        span.innerHTML = "&times;";
        let text = document.createElement("p");
        text.textContent = this.text;
        this.mainDiv.append(modalContent);
        modalContent.append(span, text);

        span.addEventListener("click", this.closeModal.bind(this));

        return this.mainDiv;
    };

    this.openModal = function () {
        this.mainDiv.classList.add("active");
    };

    this.closeModal = function () {
        this.mainDiv.classList.remove("active");
    };
}


// TASK 4
// Возьмите код из предыдущей задачи и на основе функции Modal создайте два обьекта
// с разным содержимым:


// Вплывающее окно с формой регистрации.Его HTML - разметка будет выглядть так:

// <div id="idОкна" class="классыОкна">
//     <div class="modal-content">
//         <span class="close">&times;</span>
//         <form action="" id="register-form">
//             <input type="text" name="login" placeholder="Ваш логин" required>
//                 <input type="email" name="email" placeholder="Ваш email" required>
//                     <input type="password" name="password" placeholder="Ваш пароль" required>
//                         <input type="password" name="repeat-password" placeholder="Повторите пароль" required>
//                             <input type="submit" value="Регистрация">
//                             </form>
//                         </div>
//                     </div>




//                     Всплывающее окно с формой авторизации. Его HTML-разметка:

//                     <div id="idОкна" class="классыОкна">
//                         <div class="modal-content">
//                             <span class="close">&times;</span>
//                             <form action="" id="login-form">
//                                 <input type="text" name="login" placeholder="Ваш логин или email" required>
//                                     <input type="password" name="password" placeholder="Ваш пароль" required>
//                                         <input type="submit" value="Вход">
//                                         </form>
//                                     </div>
//                                 </div>




//                                 Формы создавать отдельными функциями-конструкторами LoginForm, RegisterForm.
//                                 Привяжите открытие первого окна к кнопке Регистрация, а второго - к кнопке Вход


let register = document.querySelector("#registration");


function RegisterForm(id, classes) {
    this.id = id;
    this.classes = classes;

    this.render = function () {
        this.mainDiv = document.createElement("div");
        this.mainDiv.id = this.id;
        this.mainDiv.className = this.classes;
        let modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        let span = document.createElement("span");
        span.className = "close";
        span.innerHTML = "&times;";
        let form = document.createElement('form');
        form.action = '';
        form.id = 'register-form';
        let login = document.createElement('input');
        login.type = 'text';
        login.name = 'login';
        login.placeholder = 'Ваш логин';
        login.required;
        let email = document.createElement('input');
        email.type = 'email';
        email.placeholder = 'Ваш email';
        email.required;
        let password = document.createElement('input');
        password.type = 'password';
        password.name = 'password';
        password.placeholder = 'Ваш пароль';
        password.required;
        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Вхід';
        form.append(login, email, password, submit)
        this.mainDiv.append(modalContent);
        modalContent.append(span, form);
        span.addEventListener("click", this.closeModal.bind(this));

        return this.mainDiv;
    }
    this.openModal = function () {
        this.mainDiv.classList.add("active");
    };

    this.closeModal = function () {
        this.mainDiv.classList.remove("active");
    };
}

let modalRegister = new RegisterForm("register", "modal");
root.append(modalRegister.render());
register.addEventListener("click", modalRegister.openModal.bind(modalRegister));

let login = document.querySelector('#login');

function LoginForm(id, classes) {
    this.id = id;
    this.classes = classes;

    this.render = function () {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = this.id;
        this.mainDiv.className = this.classes;
        let modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        let span = document.createElement('span');
        span.className = 'close';
        span.innerHTML = '&times;';
        let form = document.createElement('form');
        form.action = '';
        form.id = 'login-form';
        let login = document.createElement('input');
        login.type = 'text';
        login.name = 'login';
        login.placeholder = 'Ваш логин или email';
        login.required;
        let password = document.createElement('input');
        password.type = 'password';
        password.name = 'password';
        password.placeholder = 'Ваш пароль';
        password.required;
        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Вход';
        form.append(login, password);
        this.mainDiv.append(modalContent);
        modalContent.append(span, form);
        span.addEventListener('click', this.closeModal.bind(this));

        return this.mainDiv;
    };

    this.openModal = function () {
        this.mainDiv.classList.add("active");
    };

    this.closeModal = function () {
        this.mainDiv.classList.remove("active");
    };
}

let modalLogin = new LoginForm('login', 'modal');
root.append(modalLogin.render());
login.addEventListener('click', modalLogin.openModal.bind(modalLogin));

