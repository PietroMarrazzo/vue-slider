const app = new Vue ({
    el:'#app',

    data: {
        indexImg: 0,
        imgs: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg'
        ]
    },

    methods: {
        nextImg() {
            this.indexImg++;
            if (this.indexImg > this.imgs.length - 1) {
                this.indexImg = 0;
            }
        },

        prevImg() {
            this.indexImg--;
            if (this.indexImg < 0) {
                this.indexImg = this.imgs.length - 1;
            }
        }
    },
});