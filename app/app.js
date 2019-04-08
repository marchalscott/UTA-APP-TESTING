import Vue from "nativescript-vue";

import Home from "./components/Home";

import { registerElement } from "nativescript-angular";
Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
