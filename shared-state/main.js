let store = {
       user : {
              name: 'John Doe'
       }
};

new Vue({
    el: '#one',
    data: {
       foo: 'bar-one',
       shared: store
    }
});

new Vue({
    el: '#two',
    data: {
       foo: 'bar-two',
       shared: store
    }
});