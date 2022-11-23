// var num1 = +prompt("Number1");
// var num2 = +prompt("Number2");
// var operator = prompt("operator");

// console.log (num1)
// console.log (num2)
// console.log (operator)

// if(operator === "+") {
//     alert(num1 + num2)
// }else if(operator === "-") {
//     alert(num1 - num2)
// }else if(operator === "*") {
//     alert(num1 * num2)
// }else if(operator === "/") {
//     alert(num1 / num2)
// }

alert("Чего молчим?")
var answer = prompt("Хочешь попробую перевести эту фразу с женского?")
if(answer === "Ну рискни!") {
    var youAreMen = confirm("Я хочу с тобой поговорить, но сама не знаю что сказать, поэтому придумай сам, ты же мужик!")
    if(youAreMen === true) {
        alert("Ха, ха, смешно!")
    }else {
        alert("Че дальше?")
    }
}
var whatsup = prompt("Здорова, рассказывай как дела?!!")
if(whatsup === "все хорошо)") {
    var coffee = prompt("Будешь кофе с коньяком?")
    if(coffee === "Без коньяка") {
        alert("Значит только кофе")
    }
}
var badThings = confirm("Мне тут о тебе много гадостей наговорили")
if(badThings === true) {
    alert("Перечисляй")
}else {
    alert("Не интересно!")
    var joke = prompt("Зачем? Хочешь оправдаться?")
    if(joke === "Нет, хочу дорассказать то, что они упустили.")
    alert(")))))")
}
var ask = prompt("Куда ты?")
if(ask === "Я в Голландию") {
    alert("Зачем?")
}else {
    alert("Вникуда")
    var holland = confirm("Ты вернешься?")
    if(holland === true) {
        alert("Нет, там мне проще будет")
    }else {
        alert("Да, я не надолго")
    }
}
var interesting = prompt("Ну, как? Интересно?")
if(interesting === "Что?") {
    var window = prompt("Интересно ехать, уставившись в окно и молчать?")
    if(window === "Заткнись. Я делаю вид, что обиделась...") {
        alert("Ты явно не в настроении сегодня...")
    }
}else if(interesting === "Нет") {
    alert("Тогда давай посмотрим сериал")
}
var dream = confirm("Ты живёшь мечтой?")
if(dream === true) {
    alert("Расскажешь какой?")
    var dreamAnswer = confirm("Хочу полететь в космос")
    if(dreamAnswer === true) {
        alert("Скоро это станет возможным!")
    }else {
        alert("Я не озвучиваю свои мечты!")
    }
}else {
    alert("Ммм, это печально (")
}
alert("Да, я перестал мечтать")
var dad = prompt("Папа, я замуж не выйду")
if(dad === "Почему?") {
    alert("я с вами жить буду!")
}else {
    alert("Не смей угрожать отцу!")
}
var tea = confirm("Ты нам чай налил?")
if(tea === true) {
    var sugar = confirm("Сахар положил и себе и мне?")
    if(sugar === true) {
        alert("И себе, и мне")
    }
}else {
    alert("Будь добр, плесни!")
}
var selena = prompt("Привет, Селена. Рад тебя видеть! Как ты?")
if(selena === "Привет, Майк. У меня все отлично, спасибо. А у тебя как дела?") {
    var going = prompt("Очень хорошо, спасибо. Куда ты направляешься?")
    if(going === "Я иду в библиотеку. Я хочу провести там пару часов.") {
        alert("так долго?")
    }var books = confirm ("А у них есть книги, написанные на редких языках?")
    if(books === true) {
        alert("Ну, я никогда не спрашивала про это, но на полках я видела несколько книг на латинском.")
    }else {
        var language = prompt("А ты знаешь какие то редкие языки?")
        if(language === "Да, знаю парочку") {
            alert("Как круто! Какие именно?")
            alert("Латинский и язык майя")
        }else {
            alert("Скажи пару слов на них")
        }       
    }
}else {
    alert("ok, поговорим позже")
}
var kindOfBooks = prompt("Какие книги ты любишь читать?")
if(kindOfBooks === "Я люблю фантастику") {
    alert("У них огромный выбор книг фантастики. Ты можешь даже найти фантастический рассказ на китайском или португальском.")
}else if(kindOfBooks === "Я люблю детективы?") {
    var detectives = prompt("Какой автор тебе нравится?")
    if(detectives === "Агата Кристи")
    alert("О, мне тоже нравятся ее книги!")
}else {
    alert("Дашь почитать как-нибудь?")
}
var want = prompt("Здравствуйте! Что вы хотите?")
if(want === "Я хочу купить другу хороший шарф. Какой вы посоветуете?") {
    var scarf = confirm("Я советую вам вот этот. Очень красивый и модный шарф.")
    if(scarf === true) {
        var wool = prompt("Он шерстяной?")
        if(wool === "Да")
        alert("Сколько он стоит? Дорого?")
        alert("Нет, недорого. 310 рублей.")
    }
}else {
    alert("У нас есть большой выбор подарков на любой бюджет")
}
var where = confirm("Извините, вы не знаете, где находится «Дом книги»?")
if(where === true) {
    var adress = prompt("Подскажите куда идти?")
    if(adress === "«Дом книги» находится на Новом Арбате.")
    alert("А как доехать до Нового Арбата?")
}else {
    alert("Извините")
}
var hobby = confirm("Дима, у тебя есть хобби?")
if(hobby === true) {
    var askHobby = prompt("Какое?")
    if(askHobby === "Моё хобби — кулинария.") {
        var menHobby = prompt("Кулинария? Мужчина и кулинария? Это удивительно.")
        if(menHobby === "Что тут удивительного?") {
            alert("Это ведь женское хобби")
            alert("Нет, это не удивительно. Хороший кулинар именно мужчина. Я люблю готовить. И могу хорошо приготовить разные блюда.")
        }else {
            alert("Ну ты и сексист!")
        }
    }else {
        var kulinary = prompt("А что ты любишь готовить больше всего?")
        if(kulinary === "Я люблю готовить мясные блюда. Так что приглашаю в гости!") {
            alert("Спасибо за приглашение! Обязательно приду!")
        }
    }
}
alert("Ты сегодня мило выглядишь")
alert("Спасибо!")
var date = confirm("У тебя свидание?")
if(date === true) {
    var askDate = prompt("Где встречаетесь?")
    if(askDate === "В ресторане, а потом гулять пойдем") {
        alert("Надень куртку, вечером похолодает")
    } 
}else {
    alert("Тебе очень идет этот наряд!")
}


