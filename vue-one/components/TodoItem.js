app.component('todo-item',{
    props: ['title'],
    emits: ['remove'],
    template: `
       <div>
            <li class="card my-4 p-2"> 
                {{ title }}
                <button class="btn btn-info" @click="$emit('remove')"> Remove </button>
            </li>
       </div>
    `
})