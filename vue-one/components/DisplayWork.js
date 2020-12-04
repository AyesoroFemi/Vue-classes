app.component('display-work', {
    template: `
        <div>
            <input type="checkbox" id="checkbox" v-model="checked" >
            <label for="checkbox"> {{ checked }} </label>
        
        </div>
         
        <div>
            
        </div>
    `,
    data() {
        return {
            checked: false
        }
    }
})