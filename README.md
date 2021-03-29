h1 Описание проекта:
=====================
    Сайт предназначен для заказа продукции компании DTTermo и Carrier и ознакомлением с их техническими характеристиками.

Далее будет представлено описание сайта с приложенными скриншотами.

Сайт адаптивный. 

В разработке использовал React+Redux. 

Данные о продукции получаются с сервера с помощью axios.

Информация о добавленных в спецификацию позициях хранится в localStorage.


### Главная страница:

    Секция с основными преимуществами, внутри которой находится слайдер с возможностью перехода в конкретную модель.
    
Ниже располагаются секции с типами фанкойлов и основными аксессурами.

Последняя секция - секция преимуществ работы с компанией DTtermo. При наведении на блок появляется расширенное описание конкретного преимущества.
![alt text](descriptionProject/MainPage-1.PNG )
![alt text](descriptionProject/MainPage-2.PNG )
![alt text](descriptionProject/MainPage-3.PNG )

### О компании:

    Информация о компании, в нижней части - галерея с фотографиями склада.
![alt text](descriptionProject/about-1.PNG )
![alt text](descriptionProject/about-2.PNG )
![alt text](descriptionProject/about-3.PNG )
![alt text](descriptionProject/about-4.PNG )

### Оборудование: 

    Страница с типами фанкойлов. При нажатии на один из типов происходит переход на страницу первой модели определенного типа.
![alt text](descriptionProject/fancoils.PNG )

### Конкретная модель фанкойла:

    Страница с информацией о модели фанкойла. Есть слайдер с картинками, возможность добавления в спецификацию, таблица с другими моделями фанкойлов этого типа.
    
    Есть секция аксессуаров, подходящих к данной модели и секция других типов фанкойлов.
![alt text](descriptionProject/fancoilModel-1.PNG )
![alt text](descriptionProject/fancoilModel-2.PNG )
![alt text](descriptionProject/fancoilModel-3.PNG )
![alt text](descriptionProject/fancoilModel-4.PNG )

 ### Аксессуары: 
 
    Страница с типами аксессуаров. При нажатии на один из типов происходит переход на страницу первой модели определенного типа.
![alt text](descriptionProject/accessories.PNG )

### Конкретная модель аксессуара:

    Аналогично фанкойлу.
![alt text](descriptionProject/accessoryModel-1.PNG )
![alt text](descriptionProject/accessoryModel-2.PNG )

### Контакты:

    Страница с контактной информацией, схемой проезда и картой.
![alt text](descriptionProject/contacts-1.PNG )
![alt text](descriptionProject/contacts-2.PNG )

### Спецификация:

    Аналог корзины. Здесь находятся фанкойлы и аксессуары, которые пользователь выбрал для заказа.
    
Есть возможность редактирования конкретной позиции(удаление или изменение количества). Для отправки спецификации необходимо заполнить форму с валидацией.
![alt text](descriptionProject/spec-1.PNG )
![alt text](descriptionProject/spec-2.PNG )
![alt text](descriptionProject/spec-3.PNG )
