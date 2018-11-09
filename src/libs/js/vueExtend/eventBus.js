import Vue from "vue";
var eventVue = new Vue();
var install = {
    install(Vue) {
        Vue.mixin({
            created() {
                this.$eventBus = eventVue;
            }
        })
    }
}
export default install;
