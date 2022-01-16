//solution2
app.component("product-image", {
    props:{
        color:{
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `<div>
        <img :src="image" :title="this.color" :alt="this.color">
        <p>{{this.color}}</p>
    </div>`,
    computed:{
        image(){
            return `./assets/images/socks_${this.color}.jpg`
        }
    }
})
//solution2