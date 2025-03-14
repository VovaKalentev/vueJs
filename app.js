"use strict";
let meEE = {
    // data(){
    //     return {
    //         title:'Список заметок',
    //         myPlaceholder:'Введите текст заметки...',
    //         inputValue:'',
    //         notes:['Заметка 1']
    //     }
    // },
    // data:()=>({
    //     title:'Список задач',
    //     inputPl:'Введите задачу',
    //     selectPl:'Выберите категорию',
    //     input:'',
    //     select:'',
    //     self:[],
    //     work:[],
    //     otd:[],
    // }),
    // methods:{
    //     addTask(){
    //         if(this.input != '' && this.select != ''){
    //             let task = this.input;
    //             let kategory = Number(this.select);
    //             if(kategory == 1){
    //                 this.self.push(task);
    //             }else if(kategory == 2){
    //                 this.work.push(task);
    //             }else if(kategory == 3){
    //                 this.otd.push(task);
    //             }
    //             this.input = '';
    //             this.select = '';
    //         }
    //     },
    //     deleteTask(kategory,i){
    //         if(kategory == 1){
    //             this.self.splice(i,1);
    //         }else if(kategory == 2){
    //             this.work.splice(i,1);
    //         } else if(kategory == 3){
    //             this.otd.splice(i,1);
    //         }
    //     }
    // }
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
    data:()=>({
        title:'Конвертер валют',
        inputPl:'Введите количество',
        selectPl:'Выберите категорию',
        count:'',
        selectOne:'',
        selectTwo:'',
        sogl:true,
        total:'',
        results:[],
        sendHistory:false,
    }),
    methods:{
        addHistory(){
            this.results.push(this.total);
            this.sendHistory = true;
        },
        clearHistory(){
            this.results = [];
            localStorage.setItem('array', '');
        },
        calc(){
            if(this.selectOne != this.selectTwo){
                this.sogl = true;
                if(this.selectOne == 1){
                    if(this.selectTwo == 2){
                        this.total = this.count + " RUB = " + this.financial(this.count * 0.011073,3) + " USD";
                    }else if(this.selectTwo == 3){
                        this.total = this.count + " RUB = " + this.financial(this.count * 0.010539,3) + " EUR";
                    }
                }else if(this.selectOne == 2){
                    if(this.selectTwo == 1){
                        this.total = this.count + " USD = " + this.financial(this.count * 90.31,3) + " RUB";
                    }else if(this.selectTwo == 3){
                        this.total = this.count + " USD = " + this.financial(this.count * 0.95,3) + " EUR";
                    }
                }else if(this.selectOne == 3){
                    if(this.selectTwo == 1){
                        this.total = this.count + " EUR = " + this.financial(this.count * 94.89,3) + " RUB";
                    }else if(this.selectTwo == 2){
                        this.total = this.count + " EUR = " + this.financial(this.count * 1.05,3) + " USD";
                    }
                }else{
                    this.sogl = false;
                }
                this.sendHistory = false;
            }
        },
        financial(x) {
            return Number.parseFloat(x).toFixed(2);
        }
    },
    mounted() {
        let jsonArray = localStorage.getItem('array');
        if(jsonArray != ''){
            this.results = JSON.parse(jsonArray);
        }
    },
    computed:{
        returnTotal(){
            if(this.total != ''){
                return this.total;
            }else{
                return '00 == 00';
            }
        }
    },
    watch:{
        sendHistory(){
            if(this.sendHistory){
                let jsonArray = JSON.stringify(this.results);
                localStorage.setItem('array', jsonArray);
            }
        }
    }
};
Vue.createApp(meEE).mount('#app');

