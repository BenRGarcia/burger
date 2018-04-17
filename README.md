# Burger

> A Full-Stack Node/Express.js app made with Handlebars and MySQL

Click [here](https://still-bastion-37761.herokuapp.com/) to see the deployed app on Heroku

## Description

CRUD operations:

1. Users add a burger they'd like to eat
2. Users can "eat" burgers after they are added
3. Users can see all burgers in the database whether "eaten" or not
4. Users can delete all burgers in the database

### User Adds a New Burger

![add-burger](https://user-images.githubusercontent.com/26657982/38887278-64ac8650-4246-11e8-9104-e0ae08b43cd6.gif)

### User "Eats" a Burger

![eat-burger](https://user-images.githubusercontent.com/26657982/38887280-64c69b94-4246-11e8-8e12-bfbfc152c597.gif)

### User Deletes All Burgers

![delete-burgers](https://user-images.githubusercontent.com/26657982/38887279-64ba38ae-4246-11e8-803b-a963900a9d7c.gif)

## Code Snippets

### Handlebars Partials

In ```/views/layouts/main.handlebars```

```html
<body>
  {{!-- Bootstrap container --}}
  <div class="container mt-1 mb-5">
    {{> header }}
    {{{ body }}}
    {{> footer}}
  </div>
<!-- ... -->
```

In ```/views/layouts/index.handlebars```

```html
<div class="row text-center my-3">
  <div class="col-12">
    {{> addBurger}}
  </div>
</div>
<div class="row text-center">
  <div class="col-12 col-md-6 mb-3">
    {{> burgersToEat}}
  </div>
  <div class="col-12 col-md-6 mb-3">
    {{> burgersEaten}}
  </div>
</div>
```

In ```/views/layouts/burgersToEat.handlebars```

```html
<div class="list-bg">
  <h2>
    2) Eat Burgers Here
  </h2>
    <ul class="text-left">
      {{#each burgers}}
        {{#unless devoured}}
          <li>
            <button
              class="btn devour"
              data-burger="{{burger_name}}"
            >
              Eat Now
            </button> 
            {{burger_name}}
          </li>
        {{/unless}}
      {{/each}}
    </ul>
</div>
```