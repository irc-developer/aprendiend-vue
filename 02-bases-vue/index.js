const app = Vue.createApp({
    template: `
        <h1> Hola mundo</h1>
        <p>{{ null }}</p>
    `
})

app.mount("#myApp")