let meEE = {
    // data(){
    //     return {
    //         title:'Список заметок',
    //         myPlaceholder:'Введите текст заметки...',
    //         inputValue:'',
    //         notes:['Заметка 1']
    //     }
    // },
    data:()=>({
        title:'Список задач',
        inputPl:'Введите задачу',
        selectPl:'Выберите категорию',
        input:'',
        select:'',
        self:[],
        work:[],
        otd:[],
    }),
    methods:{
        addTask(){
            if(this.input != '' && this.select != ''){
                let task = this.input;
                let kategory = Number(this.select);
                if(kategory == 1){
                    this.self.push(task);
                }else if(kategory == 2){
                    this.work.push(task);
                }else if(kategory == 3){
                    this.otd.push(task);
                }
                this.input = '';
                this.select = '';
            }
        },
        deleteTask(kategory,i){
            if(kategory == 1){
                this.self.splice(i,1);
            }else if(kategory == 2){
                this.work.splice(i,1);
            } else if(kategory == 3){
                this.otd.splice(i,1);
            }
        }
    }
    // computed:{
    //     notesCountComputed(){
    //         console.log('dd');
    //         return this.notes.length;
    //     }
    // },
    // watch:{
    //     inputValue(value){
    //         if(value.length >= 10){
    //             this.inputValue = '';
    //         }
    //     }
    // }
};
Vue.createApp(meEE).mount('#app');

