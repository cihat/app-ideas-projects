# app-ideas-projects

**These are my projects that I tried to do with project ideas in a repository called 'app-ideas'. Some of them were written with vue.js.**

## ScreenShots

#### - **DolarToCent**

![paraBozdurma](https://i.imgur.com/eEGmREW.gif)
![paraBozdurma](https://user-images.githubusercontent.com/57585087/98141790-17714300-1ed8-11eb-9151-518cc2955266.gif)
![paraBozdurma](https://user-images.githubusercontent.com/57585087/97689481-b5b27280-1aac-11eb-9a91-4c8adddcf164.png)

#### - **ToDoApp**

![ToDoApp](https://user-images.githubusercontent.com/57585087/98449557-97501500-2145-11eb-9e4f-9975e85d4b10.gif)
![todoApp](https://user-images.githubusercontent.com/57585087/98449556-961ee800-2145-11eb-83dd-1807fa8b59db.png)

<!-- ![ToDoApp](https://i.imgur.com/JUS5yKo.gif)
    ![todoApp](https://i.imgur.com/P8hbjaL.png) -->

#### - **Bin2Dec (Project1)**

![bin2dec2](https://user-images.githubusercontent.com/57585087/97329299-f3828180-1887-11eb-9690-f63aad87eafa.png)
![bin2dec](https://user-images.githubusercontent.com/57585087/97329305-f54c4500-1887-11eb-8963-3e29688e7c97.png)

#### - **Calculator**

![calculator](https://user-images.githubusercontent.com/57585087/97590508-bf39cd00-1a0f-11eb-95e3-1af263b185c0.png)

<br/>
<hr/>

## VueJs LifeCycle Metodları

[This article source from Medium by @edisdev](https://medium.com/@edisdev/vue-js-deki-lifecycle-metodlar-120e9cfa4acd)

### 1. Created

   <p>
    Vue componenti ilk oluşturulduğu andır ( veya ilk render edildiği an demek daha doğru olacak sanırım). Kullanımı şu şekildedir. Oluşturduğumuz Vue instance ‘ ında created adında bir metod oluşturuyoruz.
   </p>

```JavaScript
var app = new Vue({
  el: '#app',
  data() {
   return {
      message: ''; // message adında bir data oluşturduk.
  },
  created() {
    this.message = 'Vue Component is created !';
    // component ilk render olduğu anda
    // oluşturduğumuz message adlı dataya değer atadık.
  }
 }
});
```

### 2. Computed

   <p>
    Vue componentinin render işlemi tamamlandıktan sonraki andır. Oluşturduğumuz vue instance ında computed adında bir metod oluşturup kullanırız.
   </p>

```JavaScript
var app = new Vue({
  el: '#app',
  data() {
   return {
      message: 'Hello Vue';
  },
  computed: {
     loadedMessage() {
        return 'Vue Component Loaded';
     }
     // componentin render işlemi tamamlandıktan sonra çağırmak
     // istediğimiz bir metod yazdık.
  },
 }
});
<div id="add">
  <p> First Message : {{ message }} </p>
  <hr>
  <p> Load Message: {{ loadedMessage }} </p>
</div>
```

### 3. Mounted

   <p>
   Component render olduğu an ile beraber, componentin var olduğu tüm süreyi içerir.
   </p>

```JavaScript
var app = new Vue({
  el: '#app',
  data() {
   return {
     message: '';
  },
  mounted() {
   window.addEventListener(“click”, function(e){
    console.log(e.target);
  });
  }
 }
});
```

### 4- Watch

   <p>
   Component var olduğu sürede, o componentteki herhangi bir datayı, bu durumu izleyip , o data veya durum üzerinde bir değişiklik olduğunda bunu yakalamızı sağlar.
   </p>

```JavaScript
var app = new Vue({
  el: '#app',
  data() {
   return {
     isOpen: false;
  },
  mounted() {
    window.addEventListener('click',e => {
    this.isOpen = true;
    })
  },
  watch: {
   isOpen() {
      console.log('Data Değişti');
      // isOpen datasındaki değişliği yakaladık.
   }
  }
 }
});
```

### 5- Methods

   <p>
   Component içinde herhangi bir yerde sonradan çağırılmak üzere kullanılanacak fonksiyonlar burada yazılır.
   </p>

```JavaScript
var app = new Vue({
  el: '#app',
  data() {
   return {
     list: [ { "name":"User1", "age":34, "car":null },
             { "name":"User2", "age":31, "car":null },
             { "name":"User3", "age":23, "car":null }
           ],
     smallList: {}
    }
  },
  methods: {
   // list datasında age i 30 dan büyük olanları farklı
   // bir dataya atayan bir fonksiyon yazalım.
   filterList() {
     this.smallList = this.list.filter(item => item.age > 30);
   }
  },
  created() {
    this.filterList();
    // methods property de oluşturduğumuz fonksiyonu çağırdık.
  }
 }
});
```

![lifeCycle](https://miro.medium.com/max/512/1*byyX8EW6mIhRsCBWwByNYg.png)

<br/>
<hr/>

MIT License

Copyright (c) 2020 Cihat Salik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
