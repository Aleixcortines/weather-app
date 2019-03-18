var dataVue = new Vue({
    el: '#app',
    data: {

        weatherData: {},
        weatherFiveDays: [],
        city: "",
        loaded: false,

    },

    methods: {

        firstCarga() {

            this.cargarPage();
            this.cargarForecast();

        },
        //to charge the api weather by city
        cargarPage() {

            axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=4f8dc9c67d0b50f612309dadc3a1e133&units=metric')
                .then(response => {
                    dataVue.weatherData = response.data;
                    dataVue.loaded = true;
                })

        },
        //to charge the api weather forecast
        cargarForecast() {

            axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=4f8dc9c67d0b50f612309dadc3a1e133&units=metric')
                .then(response => {
                    dataVue.weatherFiveDays = response.data.list;
                    dataVue.loaded = true;

                })
        },
        //to get the weather icon
        weatherIcon: function (icon) {
            return "http://openweathermap.org/img/w/" + icon + ".png"
        }
    },

});
