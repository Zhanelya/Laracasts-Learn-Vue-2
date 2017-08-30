//to be replaced by https://www.npmjs.com/package/vue-events (no link to include this as source)
window.VueEvent = new class{
       constructor(){
              this.vue = new Vue();
       }
       fire(event, data = null){
              this.vue.$emit(event, data);
       }
       
       listen(event, callback){
              this.vue.$on(event, callback);
       }
}

//component emitting events to its parent, siblings and root Vue instance
Vue.component('coupon', {
    template: `<div>
                     <input placeholder="Enter your coupon code" v-model="code">
                     <button @click=onCouponApplied>Apply</button>
              </div>`,
    data(){
       return{
              code:''
       }
    },
    methods:{
       onCouponApplied(){
              if(this.code == 'asd'){
                     VueEvent.fire('applied', this.code); //emit to sibling and parent
                     this.$emit('applied', this.code); //emit to root
              }              
              else{
                     VueEvent.fire('rejected');
                     this.$emit('rejected');
              }      
       }

    }    
});

//parent listening to the events from its child
Vue.component('parent', {
    template: `<div>
                     <slot></slot>
                     <strong v-if="parentCouponApplied">Parent</strong>
                     <div>{{parentMessage}}</div>
                     <div v-show="parentCouponApplied">Oh hello there v-show</div> <!--always compiles and renders, simply adds display:none - slower load, faster toggling-->
                     <div v-if="parentCouponApplied">Oh hello there v-if</div> <!--lazy load, slower toggling, faster load as it won't even load if false-->
              </div>`,
    data(){
       return{
              parentCouponApplied:false,
              code:''
       }
    },
    computed:{
       parentMessage(){
              return (this.code.length > 0) ? 'coupon applied: ' + this.code : '';
       }
    },
    created(){
       VueEvent.listen('applied',function(code){
              this.parentCouponApplied = true;
              this.code = code;
       }.bind(this))
       VueEvent.listen('rejected',function(){
              this.parentCouponApplied = false;
              this.code = '';
       }.bind(this))
    }  
});

//element listening to the events from its sibling
Vue.component('sibling', {
    template: `<div v-if="listenerCouponApplied">
                     <slot></slot>
              </div>`,
    data(){
       return{
              listenerCouponApplied:false
       }
    },
    created(){
       VueEvent.listen('applied',function(code){
              this.listenerCouponApplied = true;
       }.bind(this))
       VueEvent.listen('rejected',function(){
              this.listenerCouponApplied = false;
       }.bind(this))
    }    
});

//root listening to the events emitted form its components
new Vue({
    el: '#root',
    data(){
       return {
              code:'',
              couponApplied:false
       }
    },
    methods:{
       onCouponApplied(code){
              this.couponApplied = true;
              this.code = code;
       },
       onCouponRejected(){
              this.couponApplied = false;
              this.code = '';
       }
    },
    computed:{
       message(){
              return (this.code.length > 0) ? 'coupon applied: ' + this.code : '';
       }
    }
});
