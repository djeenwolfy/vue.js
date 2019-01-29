// Определяем собственный фильтр валют "currency". 
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
        // Определяем свойства модели, представление будет проходить циклом
        // по массиву услуг и генерировать элементы списка
        // для каждого вложенного пункта.
        services: [
            {
                name: 'Веб разработка',
                price: 300,
                active:true
            },{
                name: 'Дизайн',
                price: 400,
                active:false
            },{
                name: 'Интеграция',
                price: 250,
                active:false
            },{
                name: 'Обучение',
                price: 220,
                active:false
            },{
                name:'Разработка пульта администрации',
                price:125,
                active:false
            }
            ],

        Discount:[
            {
                name:'Скидка',
                active:false,
                discount2:5
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        toggleDiscount:function(s){
            s.active = !s.active;
        },
        total: function(){

            var total = 0;

            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
           
            });

          console.log(this.Discount[0].discount2); 
          if (this.Discount[0].active){
          total = total/100*(100-this.Discount[0].discount2);
           }
           return total;
        }
    }
});