# app-ideas-projects

**These are my projects that I tried to do with project ideas in a repository called 'app-ideas'. Some of them were written with vue.js.**

## ScreenShots

#### - **DolarToCent**

![paraBozdurma](https://i.imgur.com/eEGmREW.gif)
![paraBozdurma](https://user-images.githubusercontent.com/57585087/98141790-17714300-1ed8-11eb-9151-518cc2955266.gif)

<!-- ![paraBozdurma](https://user-images.githubusercontent.com/57585087/97689481-b5b27280-1aac-11eb-9a91-4c8adddcf164.png) -->

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

### Computed Property İle Methods Karşılaştırması

v-model direktifi açıklamasında da bahsi geçtiği üzere computed ve methods‘un işlev anlamında örtüştüğü noktalar olsalar da temel ve aslında önemli bir farklılık da mevcut5. computed property bağlı olduğu değişkeni ekranda sunarken ön belleğe (cache) de alır ve bu değişken değişmediği sürece tekrar hesaplama yapmaz. method kullanımında ise hesaplama yinelenir ve son değer ön bellekleme olmadan ekrana yansıtılır. Özetle, method re-render gerçekleşen her durumda yeniden çalıştırılır, ancak computed kapsamındaki işlemler yinelenmez.

```HTML
<template>
<p>{{ reverseMessage() }}</p>
veya
<p v-text="reverseMessage()"></p>
</template>
<script>
methods: {
  reverseMessage() {
    return this.message.split('').reverse().join('')
  }
}
</script>
```

### Computed Property İle Watched Property Karşılaştırması

VueJS, data değişikliklerini gözlemlemek ve bunlara tepki vermek için watch properties olarak ifade edilen daha genel bir yola daha sahiptir. Lifecycle içerisinde watch component var olduğu sürede, o component içeriğindeki datalarla ilgili değişiklikleri yakalamızı sağlar. Örneğin, bir veri bir başka veriye bağlı ise ve bağlı olduğu veride değişiklik söz konusu olmuşsa watch (watcher / watched prop) kullanımı tercih edilebilir. Şöyle bir örneğimiz olsun;

```HTML
<script>
const app = Vue.createApp({
  data() {
    return {
      message: `It's a New Day!`,
      firstName: 'John',
      lastName: 'Doe',
      fullName: 'John Doe'
    }
  },
  computed: {
    welcome() {
      return 'Hello' + ' <strong>' + this.fullName + '</strong>, ' + this.message
    }
  },
  watch: {
    message(val) {
      this.message = val
    },
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}).mount('#app');
</script>
```

<p>

**_Özetlemek gerekirse, computed properties diğer verilerden türetilmiş yeni veriler oluşturmak istendiğinde öne çıkmaktadır. Bu verileri dönüştürmek (transform), filtrelemek (filter) ya da değiştirmek (manipulate) istediğimizde rahatlıkla kullanabiliriz. Computed properties her zaman bir değer döndürmek (return) ve eş zamanlı olmak durumundadır. Diğer yandan, bir bileşenin (component) prop aldığını ve bu prop içeriğinin her değişmesi durumunda bir AJAX isteği gerçekleştirilmesi gerektiğini düşünün. Bu durumda Watch property ile verideki değişikliği izlemek çok daha isabetli bir karar olacaktır. Özetlemek gerekirse asynchronous ve bütçeli operasyonlardaki veri değişikliklerinin takibinde watch değerlendirilebilir bir seçenektir._**

</p>

![lifeCycle](https://miro.medium.com/max/512/1*byyX8EW6mIhRsCBWwByNYg.png)

<br/>
<hr/>

## VueJs Directives (Direktifleri)

[Bu Yazı Bu Linkteki Siteden alınmıştır.](https://ceaksan.com/tr/vue-js-direktifler-directives)

#### VueJs Directives

```JavaScript
// Vue v2.x
 var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    private: false,
    number: 10,
    user: {
      firstName: 'Julius',
      lastName: 'Rodman'
    }
  },
  filters: {
    uppercase(value) {
     // veya uppercase: function(value) {
      return value.toUpperCase()
    }
  },
  methods: {
    uppercase(value) {
     return value.toUpperCase()
    },
    uppercase2(value) {
     return this.$options.filters.uppercase(value);
    }
  }
});

// Vue v3.x
// v3.x ile birlikte filtreler kullanımdan kaldırıldı.
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello World!',
      private: false,
      number: 10,
      user: {
        firstName: 'Julius',
        lastName: 'Rodman'
      }
    }
  },
  methods: {
    uppercase(value) {
     return value.toUpperCase()
    },
    uppercase2(value) {
     return this.$options.filters.uppercase(value);
    }
  }
}).mount('#app');

```

<br>

- **v-text**

  <p>
  v-text direktifi içine aldığı ifadeyi (data içerisinde tanımladığımız key ya da bir method olabilir) attribute (nitelik/özellik) olarak dahil olduğu HTML etiketi arasına yazar. Özetle, document.getElementById("element").textContent; karşılığına sahiptir. {{...}} ifadeleri gibi değerlendirilebilir. Ancak, içeriğinde doğrudan işlem barındıramaz. Bu tür gereksinimler için mustaches ve methods gibi özellikleri kullanırız. 
  </p>
  Örnek Kullanımı

  ```HTML
  Hello <span v-for="who in user" v-text="uppercase(who)"></span>
  ```

  <p>
  Yukarıdaki ilk filtre kullanım örneğinde de bahsi geçtiği üzere uppercase adında bir filtremiz bir de metotumuz var. v-text direktifi içerisinde filtre kullanılmadığı için (az önceki örnek bir istisna yöntem barındırmakta) Vue.js uppercase‘i filtrelerde aramayacaktır. Bu nedenle de bir karışıklık ortaya çıkmamakta. Örnek, işleme alındığı anda uppercase() metotuna ulaşmakta ve içerdiği değere toUpperCase() uygulayıp döndürmekte.
  </p>

  ```HTML
  Hello <span v-for="who in user" v-text="uppercase2(who)"></span>
  ```

  <p>
  uppercase2() yine bir önceki örnekteki gibi benzer bir sürece sahip. Ancak, içeriği uppercase() metotundan biraz farklı. Çünkü, this.$options.filters.uppercase ile aslında uppercase filtresine ulaşmaktayız. Evet, v-text içerisinde normal şartlarda filtre kullanamıyor olabiliriz. Ancak, metotlarla filtrelere erişerek işlemler yapabiliriz.
  </p>

```HTML
Hello <span v-for="who in user" v-text="$options.filters.uppercase(who)"></span>
```

<p>
Bu sayede app.$options ile instance içeriklerine (components, directives, filters, methods…) ulaşabilmekteyiz. Console alanına app.$options yazarak nelere erişebileceğimize bir göz atmanızı öneririm.
</p>

- **v-html**

<p>
document.getElementById('element').innerHTML v-text yeteneklerine ek olarak kod içeriğinde HTML etiketleri kullanmamızı mümkün kılmakta. Dolayısıyla yukarıdaki örnekleri v-text yerine v-html yazarak ve value olarak HTML etiketleri ekleyecek yineleyebilirsiniz. Unutmayın, v-html kullanıcı tarafından sağlanan içerikler sebebiyle Cross-Site Scripting (XSS) saldırısına için zemin oluşturabilir.
</p>

<br>

- v-once

<p>
v-text, v-html ya da mustaches, değeri nasıl HTML etiketleri arasına uyguladığınız önemli değil. Önemli olan v-once kullanımında, belirtilen direktifin reaktif özelliğini kaybedecek olması. Sayfa açık iken v-once ile işaretlenen değişkene yeni değer atanmış olması önemli değil, içeriği değişmeyecektir. v-once sayesinde değer bir defa gösterilir ve bir daha güncellen(e)mez.
</p>

```HTML
<div v-once="user">Hello {{ user.firstName + ' ' + user.lastName | uppercase }}</div>
<div>Hello <span v-for="who in user" v-text="who" v-once="who"></span></div>
<div>Hello <span v-for="who in user" v-text="uppercase(who)" v-once="user"></span></div>
```

<p>
Console üzerinden veya Vue instance içerisinde user.firstName ve/ya user.lastName için yeni değerler ilettiğinizde ilgili alanların güncellenmediğini görebilirsiniz.
</p>

<br>

- v-for

<p>
v-for bir listeleme direktifi (repeater) olarak kullanılmaktadır. Obje/dizi içeriklerini sırayla belirtilen alana atar ve x in y şeklinde ifade edilir. Örneğin, v-for="msg in message. Yukarıdaki örneklerde görüldüğü üzere user içeriği sırasıyla who‘ya aktarılmaktadır. Aşağıdaki örnekte ise message içeriğinde farklı dillerde Selam ifadeleri yer alır ve yine sırasıyla msg‘ye aktarılarak uygulanır.
</p>

```HTML
<!DOCTYPE html>
<html>
 <head>
  <title>Vue Example #1</title>
 </head>
 <body>
  <div id="app">
   <ul>
    <li v-for="msg in message" v-bind:title="msg">{{ msg }}</li>
   </ul>
  </div>
  < src="https://vuejs.org/js/vue.js"></>
  <>
  // Vue v2.x
  var app = new Vue({
    el: '#app',
    data: {
      message: ['Selam', 'Hello', 'Tungjatjeta', 'Salam', 'Вiтаю', 'Hola', 'Hallo', 'Tere']
    }
  });

  // Vue v3.x
  const app = Vue.createApp({
    data() {
      return {
        message: ['Selam', 'Hello', 'Tungjatjeta', 'Salam', 'Вiтаю', 'Hola', 'Hallo', 'Tere']
      }
    }
  }).mount('#app');
  </>
 </body>
</html>
```

##### Sonuç Olarak

<p>
v-text, v-html direktifleri çok komplike olmayan özellikleri oldukça pratik bir şekilde icra etmektedirler. Bu direktifler yerine genelde mustaches kullanımı tercih edilmektedir. v-once komponent kullanımında yer bulan ve reaktif işlemlerin dışarıda tutulması istenen durumlarda sıklıkla kullanılabilmektedir. v-for ise en çok kullanılan direktiflerden biri ve v-if, v-show, v-on v-bind gibi direktiflerle özel ilişkiler oluşturabilmekte.
</p>

<br>

- v-show
  <p>
  Element’in görünürlüğüne CSS display üzerinden müdahale eder; display: block | none. Direktif ilgili elementin durumu değiştiğinde geçişleri tetikler. Unutmadan, v-show < template > ile kullanılamaz ve v-else ile ilişkilendirilemez. Hemen bir örnek işlem gerçekleştirelim.
  </p>

**JavaScirpt**

```JavaScript
var app = new Vue({
  el: '#app',
  data: {
    title: 'Ten Countries with the Highest Population in the World',
    styleObject: {
      'color': 'red',
      'font-weight': 'bold'
    },
    age : 10,
    countriesAndCapitals: [{
        'China': 'Beijing'
      },
      {
        'India': 'New Delhi'
      },
      {
        'United States': 'Washington, D.C.'
      },
      {
        'Indonesia': 'Jakarta'
      },
      {
        'Brazil': 'Brasilia'
      },
      {
        'Pakistan': 'Islamabad'
      },
      {
        'Nigeria': 'Abuja'
      },
      {
        'Bangladesh': 'Dhaka'
      },
      {
        'Russia': 'Moscow'
      },
      {
        'Mexio': 'Mexico City'
      }
    ]
  },
  methods: {
    getCountry(index) {
      return Object.keys(this.countriesAndCapitals[index])[0]
    }
  }
})
```

**HTML**

```HTML
	<div id="app">

		<h1>{{ title }}</h1>
    <h2>v-show Example</h2>
		<ul>
			<li v-for="(country, index) in countriesAndCapitals" :key="index" v-show="index % 2 !== 1">
				{{ index + 1 }}. Country is <strong>{{ getCountry(index) }}</strong> and its Capital is <span
					v-for="capital in country" v-text="capital" :style="styleObject"></span>
			</li>
		</ul>

		<hr />
    <h2>v-if Example</h2>
		<ul>
			<li v-for="(country, index) in countriesAndCapitals" :key="index" v-if="index % 2 !== 1">
				{{ index + 1 }}. Country is <strong>{{ getCountry(index) }}</strong> and its Capital is <span
					v-for="capital in country" v-text="capital" :style="styleObject"></span>
			</li>
		</ul>
		<hr />
<h2>v-if / v-else-if / v-else Example</h2>
		<ul>
			<li v-if="age < 18">Generation Z, or iGeneration (Teens & younger)</li>
			<li v-else-if="age => 18 && age < 35">Millennials, or Generation Y (18 – 34 years old)</li>
			<li v-else-if="age => 35 && age < 51">Generation X (Roughly 35 – 50 years old)</li>
			<li v-else>Baby Boomers (Roughly 50 to 70 years old)</li>
		</ul>
	</div>
```

- v-if/v-else-if/v-else

<p>
Yukarıdaki örnekte yer alan 2. listeye (v-if Example) baktığınızda v-if="index % 2 !== 1" işleminin bizi yine aynı sonuca ulaştırdığını göreceksiniz. Fakat, kaynak kodlara baktığımızda bu defa belirttiğimiz duruma uymayan elementler yerine <!----> şeklinde yorum satırlarının eklendiğini göreceksiniz.
</p>
<hr>
<br>

<p>
Evet, v-if kullanımında render aşamasında belirtilen duruma uymayan elementler render dışında tutulurlar. v-show ile temel farklılığı işte tam olarak bu! Bu farklılığı maddeler üzerinden ele alacak olursak;
 
* v-if gerçek bir koşul ifadesidir. Koşul bloğu içerisindeki etkinlik dinleyiciler (event listener) ve alt bileşenler (child component) tamamen kaldırılır ve/veya eklenir.
* Bir üst açıklamayla ilişkili olarak, v-if ilgili bloğu yeniden oluşturduğu (render) ve/veya yok ettiği için v-show‘a göre daha hantaldır. Tabi, diğer yandan v-if gereksiz yere kullanılmayacak blokların da render edilmemesini sağlar. Dolayısıyla kullanım aşamasında ihtiyaçlar ve olası senaryolara göre tercihte bulunmak daha doğrudur.

</p>

<br>

- v-on

<p>
Elemente bir etkinlik dinleyicisi (event listener) ekler. Etkinlik türü, argüman (argument) ile gösterilir. @ şeklinde kısaltılmış bir şekilde kullanılabilir; örneğin @click="...". İfade (expression) bir metot (method) veya satır içi ifade (inline statement) olabilir. Normal bir element kullanıldığında, yalnızca native DOM olaylarını dinler. Özel bir element bileşeninde (component) kullanıldığında, v-on direktifi (emit) alt bileşende (child component) yayılan özel etkinlikleri (custom events) de dinleyecektir. Satır içi ifadelerde, ifade özel $event özelliğine erişebilir: v-on: click = "handle ('ok', $event)". 2.4.0+ sürümünden başlayarak, v-on ayrıca bir argüman olmadan olay / dinleyici (event/listener) çifti nesnesine (object) bağlanmayı (binding) da destekler. Unutmanda, nesne (object) söz diziminde modifier desteği söz konusu değil. Öncelikle modifier listesine bir bakalım:

1.  .stop – event.stopPropagation() metotunu çağırır.
2.  .prevent – event.preventDefault() metotunu çağırır.
3.  .capture – Yakalama modunda (capture mode) etkinlik dinleyici ekler.
4.  .self – Yalnızca etkinlik bu öğeden gönderilirse (dispatch) işlem gerçekleştirir.
5.  .{ keyCode | keyAlias } – Sadece belirli key tanımları için işlem gerçekleştirir.
6.  .native – Bileşenin (component) ana elementiye (root) ilgili yerel (native) etkinlikleri dinler.
7.  .once – Tek seferlik işlem gerçekleştirir.
8.  .left – (2.2.0+) Mouse sol tıklama ile ilişkili olarak etkinlik gerçekleştirir.
9.  .right – (2.2.0+) Mouse sağ tıklama ile ilişkili olarak etkinlik gerçekleştirir.
10. .middle – (2.2.0+) Mouse orta tuş tıklama ile ilişkili olarak etkinlik gerçekleştirir.
11. .passive – (2.3.0+) {passive: true} ile bir DOM olayına ilişir.

    </p>

```HTML
// method handler:
<button v-on:click="..."></button>
<button @click="..."></button>

// dinamik etkinlik (event) (2.6.0+) kullanımı:
<button v-on:[event]="..."></button>
<button @[event]="..."></button>

// ifade (expression) olmaksızın doğrudan işlem

<form @submit.prevent></form>

// keyAlias ile Enter tuşu işlemi
<input @keyup.enter="...">

// Tek seferlik tıklama etkinliği
<button v-on:click.once="..."></button>
<button @:click.once="..."></button>

// Mouse etkinliği (object syntax (2.4.0+)):
<button v-on="{ mousedown: ..., mouseup: ... }"></button>
```

- v-bind

<p>
v-bind en kapsamlı ve en çok kullanılan direktiflerden biri6. Kısa yol olarak v-bind yerine sadece : kullanılabilir7. Dinamik olarak bir veya daha fazla attribute veya component prop işlemi gerçekleştirebilmemizi sağlamakta. Unutmadan, prop binding işleminde alt komponent içeriğinde prop tanımlanımlı olması gerekmektedir. .prop, .camel ve .sync modifier’larını ve opsiyonel olarak attrOrProp argümanını alabilmekte. class veya style attribute işlemlerinde array veya object kullanabilmekteyiz. v-bind, bir argüman olmadan kullanıldığında attribute adı ve değeri içeren bir object ile ilişkilendirilebilir. Yalnız, bu durumda class ve style array ya da object alamaz. Bu açıklamalar tam olarak ne ifade ediyor, bir bakalım.
</p>

```HTML
<a href="https://ceaksan.com/vue-js-v-show-v-if-v-else-if-v-else-v-on-v-bind/"> ... </a>
<a href="https://ceaksan.com/vue-js-v-show-v-if-v-else-if-v-else-v-on-v-bind/"> ... </a>

// görsel için src (attribute) içeriği oluşturma:
<img v-bind:src="...">
<img :src="https://ceaksan.com/vue-js-v-show-v-if-v-else-if-v-else-v-on-v-bind/">
<img :src="https://ceaksan.com/vue-js-v-show-v-if-v-else-if-v-else-v-on-v-bind/">

// dinamik özellik tanımı (key ve value) (2.6.0+):
<button v-bind:[key]="value"></button>
<button :[key]="value"></button>

// class tanımları:
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

// stil tanımları
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="styleObjectA"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

// nesne özelliği
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

// prop modifier ile DOM işlemleri
<div v-bind:text-content.prop="text"></div>

// <!-- prop binding. "prop" must be declared in my-component. -->
<my-component :prop="someThing"></my-component>

// alt bileşen ile prop ilişkisi oluşturma
<child-component v-bind="$props"></child-component>

// XLink.
<svg><a :xlink:special="foo"></a></svg>
<svg :view-box.camel="viewBox"></svg>
```

<br>

- v-model

<p>
 v-model direktifi two-way binding olarak ifade edilen özelliği sebebiyle sıklıkla kullanılan direktiflerden biridir. Two-way binding ifadesi Model’deki bir değişikliğin ekranda, ekrandaki bir değişikliğin de eş zamanlı olarak (.lazy kullanımı dışında) Model’de güncellenmesi olarak açıklanabilir. O halde, v-model ile ilgili diğer detaylara geçebiliriz.

v-model
Az önce de belirttiğim üzere sıklıkla kullanılan bir diğer direktif olan v-model sunduğu two-way binding özelliği sayesinde pek çok form elemanıyla 1 2 birlikte (value, checked, selected) kullanılabilir. v-model yerine v-bind/v-on kullanıldığına da tanık olabilirsiniz3. Bu durumda bilmeniz gereken, bunun bir zorunluluk olabileceğidir. Diğer durumda v-model ilk tercih olmalıdır.

</p>

```HTML
<div id="app">
 <h1 v-text="message"></h1>
 <input type="text" v-model="message" />
</div>

<>
// Vue v2.x
new Vue({
 el: '#app',
 data: {
  message: 'Hello World!'
 }
});

// Vue v3.x
Vue.createApp({
  data() {
    return {
      message: 'Hello World!'
    }
  }
}).mount('#app');
</>
```

<p>
Yukarıdaki örnek en basit şekilde bir v-model işlemi gerçekleştirmektedir. Form elemanı içerisindeki değişikliğin aynı zamanda h1 etiketi içeriğine uygulandığını görebilirsiniz. Örneği biraz değiştirelim ve 3 farklı şekilde (js expression, computed ve method) yineleyelim.
</p>

```HTML
<div id="app">
    <h1 v-text="message"></h1>
    <h1>{{ reversedMessage }}</h1>
    <h1 v-text="reversedMessage"></h1>
    <input type="text" v-model="message" />
</div>
<>
  // Vue v2.x
new Vue({
 el: '#app',
 data: {
  message: 'Hello World!'
 }
 computed: {
  reversedMessage() {
   return this.message.split('').reverse().join('')
  }
 }
});

// Vue v3.x
Vue.createApp({
  data() {
    return {
      message: 'Hello World!'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  }
}).mount('#app');
</>
```

<p>
Görüldüğü gibi sonuçta bir farklılık yaşanmamakta. computed property ve method kullanımlarına dair ayrıca yazı yayınlacağım için şimilik açıklamayı kısa tutacağım. computed property içeriği uygulandığında, yani bağlı olduğu değişken ekranda gösterildiğinde ön belleğe alınır (cache) ve bu değişken değişmediği sürece tekrar hesaplama yapılmaz ve ilk halini korur. method kullanımında ise her seferinde hesaplama yapılır ve son değer yansıtılır, ön belleğe alma işlemi gerçekleştirilmez. Bu kısa açıklamanın ardından bir de method örneğimizi ekleyelim.
</p>

```HTML
<div id="app">
    <h1 v-text="message"></h1>
    <h1>{{ reversedMessage() }}</h1>
    <h1 v-text="reversedMessage()"></h1>
</div>
<>
// Vue v2.x
new Vue({
 el: '#app',
 data: {
  message: 'Hello World!'
 }
 method: {
  reversedMessage() {
   return this.message.split('').reverse().join('')
  }
 }
});
// Vue v3.x
Vue.createApp({
  data() {
    return {
      message: 'Hello World!'
    }
  },
  method: {
    reversedMessage() {
    return this.message.split('').reverse().join('')
    }
  }
}).mount('#app');
</>
```

<br>

- v-pre

<p> 
Empty directive olarak ifade edilebilir. Herhangi bir expression almaz. v-pre kendi elementi ve alt elementler için derlemenin (compilation) es geçilmesini sağlar. Aşağıdaki gibi bir kullanımda mustaches içeriği uygulanmayacak ve ifade olduğu haliyle tutulacaktır.
</p>

```HTML
<p v-pre>{{ selected }}</p>
```

Mustaches dışında, herhangi bir yönerge içermeten geniş çaplı etiket yığınlarının derlenmesinin istenmediği durumlarda da kullanılabilir.

- v-cload

Bir diğer empty directive olan v-cloak ViewModel derlemeyi tamamlayana kadar eklendiği element üzerinde kalır. Bir CSS tanımı ile birlikte (örneğin bir div için) derleme süreci tamamlanana, ViewModel hazır olana kadar mustaches ifadelerin gizlenmesi sağlanabilir.

```JavaScript
[v-cloak] {
 display:none
}
```

<br>

- v-slot

v-slot < template > ve bileşenlerle (component) kullanılır. İçerik için (template, component) dağıtım noktaları olarak görev yapar. Kısaca # ile ifade edilebilir.

```HTML
<base-layout>
  <template v-slot:header>
    <h1>H1 Heading</h1>
  </template>

  <p>A paragraph.</p>

  <template #:footer>
    <p>A footer info.</p>
  </template>
</base-layout>
```

[Makalenin Kaynak Linki için buraya tıklayın.](https://ceaksan.com/tr/vue-js-v-model-v-pre-v-cloak-v-slot)
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
