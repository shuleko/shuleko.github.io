var vm = new Vue({
    el: '#app',
    data: {
        isModal: false
    },
    methods: {
        modalShow: function () {
            this.isModal = true;
        },
        modalHide: function () {
            this.isModal = false;
        }
    }
});

