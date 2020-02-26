const app = new Vue({
    el:'#app',
    data() {
        return {
            question: ['侬好','干啥子','擦鞋','早唞','逮嘎侯',
                        '走森','内侯','佢系边位啊','好多时间','熬烧熬烧'],
            answer: ['去哪里','你好','再见','你是谁',
                     '干嘛','好久不见','干杯','吃饭',
                     '擦鞋子','拍马屁','买鞋子','鞋子要擦了',
                     '早安','午安','晚安','早饭',
                     '大家好','抓猴子','晚上好','站住',
                     '晚上','中午','早晨','半夜',
                     '起床','再见','你是谁','你好',
                     '他是谁','他在哪','怎么走','什么时候',
                     '很多时间','时间很多','还要多久','时间紧迫',
                     '煮东西','烧东西','熬汤','赶紧'],
            count: 10,
            currentIndexQ: 0,
            currentIndexA1: 0,
            currentIndexA2: 1,
            currentIndexA3: 2,
            currentIndexA4: 3,
            chooseIndexA: 99,
            chooseIndexB: 99,
            chooseIndexC: 99,
            chooseIndexD: 99,
            chooseIndex: 99,
            AisActive: true,
            AisLine: false,
            AisRight: false,
            AisWrong:false,
            BisActive: true,
            BisLine: false,
            BisRight: false,
            BisWrong:false,
            CisActive: true,
            CisLine: false,
            CisRight: false,
            CisWrong:false,
            DisActive: true,
            DisLine: false,
            DisRight: false,
            DisWrong:false,
            subActive: true,
            subLine: false,
            submitFlag: false,
            rightFlag: false,
            rightFlag1: false,
            rightFlag2: false,
            rightFlag3: false,
            rightFlag4: false,
            checkFlag1: true,
            checkFlag2: true,
            checkFlag3: true,
            checkFlag4: true,
            wrongFlag: false,
            normalFlag: true,
            wrongFlag1: false,
            wrongFlag2: false,
            wrongFlag3: false,
            wrongFlag4: false,
            childcheckFlag1: true,
            childcheckFlag1_1: false,
            childcheckFlag2: true,
            childcheckFlag2_2: false,
            childcheckFlag3: true,
            childcheckFlag3_3: false,
            childcheckFlag4: true,
            childcheckFlag4_4: false,
            // progress1: false,
            progress2: false,
            progress3: false,
            progress4: false,
            progress5: false,
            progress6: false,
            progress7: false,
            progress8: false,
            progress9: false,
            progress10: false,
        }
    },
    methods: {
        chooseA: function(){
            this.childcheckFlag1 = false
            this.childcheckFlag1_1 = true
            this.AisActive = false
            this.AisLine = true
            this.subActive = false
            this.subLine = true
            this.submitFlag = true
            this.chooseIndex = this.currentIndexA1
            this.chooseIndexA = this.currentIndexA1
            this.chooseIndexB = 99
            this.chooseIndexC = 99
            this.chooseIndexD = 99
            this.childcheckFlag2 = true
            this.childcheckFlag3 = true
            this.childcheckFlag4 = true
            this.childcheckFlag2_2 = false
            this.childcheckFlag3_3 = false
            this.childcheckFlag4_4 = false
            this.BisActive = true
            this.BisLine = false
            this.CisActive = true
            this.CisLine = false
            this.DisActive = true
            this.DisLine = false
        },
        chooseB: function(){
            this.childcheckFlag2 = false
            this.childcheckFlag2_2 = true
            this.BisActive = false
            this.BisLine = true
            this.subActive = false
            this.subLine = true
            this.submitFlag = true
            this.chooseIndex = this.currentIndexA2
            this.chooseIndexB = this.currentIndexA2
            this.chooseIndexA = 99
            this.chooseIndexC = 99
            this.chooseIndexD = 99
            this.childcheckFlag1 = true
            this.childcheckFlag3 = true
            this.childcheckFlag4 = true
            this.childcheckFlag1_1 = false
            this.childcheckFlag3_3 = false
            this.childcheckFlag4_4 = false
            this.AisActive = true
            this.AisLine = false
            this.CisActive = true
            this.CisLine = false
            this.DisActive = true
            this.DisLine = false
        },
        chooseC: function(){
            this.childcheckFlag3 = false
            this.childcheckFlag3_3 = true
            this.CisActive = false
            this.CisLine = true
            this.subActive = false
            this.subLine = true
            this.submitFlag = true
            this.chooseIndex = this.currentIndexA3
            this.chooseIndexC = this.currentIndexA3
            this.chooseIndexA = 99
            this.chooseIndexB = 99
            this.chooseIndexD = 99
            this.childcheckFlag1 = true
            this.childcheckFlag2 = true
            this.childcheckFlag4 = true
            this.childcheckFlag1_1 = false
            this.childcheckFlag2_2 = false
            this.childcheckFlag4_4 = false
            this.AisActive = true
            this.AisLine = false
            this.BisActive = true
            this.BisLine = false
            this.DisActive = true
            this.DisLine = false
        },
        chooseD: function(){
            this.childcheckFlag4 = false
            this.childcheckFlag4_4 = true
            this.DisActive = false
            this.DisLine = true
            this.subActive = false
            this.subLine = true
            this.submitFlag = true
            this.chooseIndex = this.currentIndexA4
            this.chooseIndexD = this.currentIndexA4
            this.chooseIndexA = 99
            this.chooseIndexB = 99
            this.chooseIndexC = 99
            this.childcheckFlag1 = true
            this.childcheckFlag2 = true
            this.childcheckFlag3 = true
            this.childcheckFlag1_1 = false
            this.childcheckFlag2_2 = false
            this.childcheckFlag3_3 = false
            this.AisActive = true
            this.AisLine = false
            this.BisActive = true
            this.BisLine = false
            this.CisActive = true
            this.CisLine = false
        },
        submitClick: function(){
            if(this.submitFlag){
                if( this.chooseIndex == 1 ||
                    this.chooseIndex == 4 ||
                    this.chooseIndex == 9 ||
                    this.chooseIndex == 14||
                    this.chooseIndex == 16||
                    this.chooseIndex == 22||
                    this.chooseIndex == 27||
                    this.chooseIndex == 28||
                    this.chooseIndex == 34||
                    this.chooseIndex == 39)
                {
                    this.rightFlag = true
                    this.wrongFlag = false
                    this.normalFlag = false
                }
                if( this.chooseIndexA == 4 ||
                    this.chooseIndexA == 16||
                    this.chooseIndexA == 28){
                    this.rightFlag1 = true
                    this.checkFlag1 = false
                    this.AisRight = true
                    this.AisActive = false
                    this.AisLine = false
                }
                if( this.chooseIndexB == 1 ||
                    this.chooseIndexB == 9 ){
                    this.rightFlag2 = true
                    this.checkFlag2 = false
                    this.BisRight = true
                    this.BisActive = false
                    this.BisLine = false
                 }
                if( this.chooseIndexC == 14||
                    this.chooseIndexC == 22||
                    this.chooseIndexC == 34){
                    this.rightFlag3 = true
                    this.checkFlag3 = false
                    this.CisRight = true
                    this.CisActive = false
                    this.CisLine = false
                 }
                if( this.chooseIndexD == 27 ||
                    this.chooseIndexD == 39){
                    this.rightFlag4 = true
                    this.checkFlag4 = false
                    this.DisRight = true
                    this.DisActive = false
                    this.DisLine = false
                 }
                if( this.chooseIndex == 0 ||
                    this.chooseIndex == 2 ||
                    this.chooseIndex == 3 ||
                    this.chooseIndex == 5 ||
                    this.chooseIndex == 6 ||
                    this.chooseIndex == 7 ||
                    this.chooseIndex == 8 ||
                    this.chooseIndex == 10||
                    this.chooseIndex == 11||
                    this.chooseIndex == 12||
                    this.chooseIndex == 13||
                    this.chooseIndex == 15||
                    this.chooseIndex == 17||
                    this.chooseIndex == 18||
                    this.chooseIndex == 19||
                    this.chooseIndex == 20||
                    this.chooseIndex == 21||
                    this.chooseIndex == 23||
                    this.chooseIndex == 24||
                    this.chooseIndex == 25||
                    this.chooseIndex == 26||
                    this.chooseIndex == 29||
                    this.chooseIndex == 30||
                    this.chooseIndex == 31||
                    this.chooseIndex == 32||
                    this.chooseIndex == 33||
                    this.chooseIndex == 35||
                    this.chooseIndex == 36||
                    this.chooseIndex == 37||
                    this.chooseIndex == 38){
                        this.wrongFlag = true
                        this.rightFlag = false
                        this.normalFlag = false
                    }
                    if( this.chooseIndexA == 0 ||
                        this.chooseIndexA == 8 ||
                        this.chooseIndexA == 12||
                        this.chooseIndexA == 20||
                        this.chooseIndexA == 24||
                        this.chooseIndexA == 32||
                        this.chooseIndexA == 36){
                        this.wrongFlag1 = true
                        this.checkFlag1 = false
                        this.AisWrong = true
                        this.AisRight = false
                        this.AisActive = false
                        this.AisLine = false
                    }
                    if( this.chooseIndexB == 5 ||
                        this.chooseIndexB == 13||
                        this.chooseIndexB == 17||
                        this.chooseIndexB == 21||
                        this.chooseIndexB == 25||
                        this.chooseIndexB == 29||
                        this.chooseIndexB == 33||
                        this.chooseIndexB == 37){
                        this.wrongFlag2 = true
                        this.checkFlag2 = false
                        this.BisWrong = true
                        this.BisRight = false
                        this.BisActive = false
                        this.BisLine = false
                    }
                    if( this.chooseIndexC == 2 ||
                        this.chooseIndexC == 6 ||
                        this.chooseIndexC == 10||
                        this.chooseIndexC == 18||
                        this.chooseIndexC == 26||
                        this.chooseIndexC == 30||
                        this.chooseIndexC == 38){
                        this.wrongFlag3 = true
                        this.checkFlag3 = false
                        this.CisWrong = true
                        this.CisRight = false
                        this.CisActive = false
                        this.CisLine = false
                    }
                    if( this.chooseIndexD == 3 ||
                        this.chooseIndexD == 7 ||
                        this.chooseIndexD == 11||
                        this.chooseIndexD == 15||
                        this.chooseIndexD == 19||
                        this.chooseIndexD == 23||
                        this.chooseIndexD == 31||
                        this.chooseIndexD == 35){
                        this.wrongFlag4 = true
                        this.checkFlag4 = false
                        this.DisWrong = true
                        this.DisRight = false
                        this.DisActive = false
                        this.DisLine = false
                    }
            }
            else alert("答案不能为空");
        },
        GoClick() {
            if(this.rightFlag){
                this.currentIndexQ++
                this.currentIndexA1 = this.currentIndexA1 + 4
                this.currentIndexA2 = this.currentIndexA2 + 4
                this.currentIndexA3 = this.currentIndexA3 + 4
                this.currentIndexA4 = this.currentIndexA4 + 4
                this.imgFlag1 = true
                this.imgFlag2 = true
                this.imgFlag3 = true
                this.imgFlag4 = true
                this.AisActive = true
                this.AisLine = false
                this.AisRight = false
                this.BisActive = true
                this.BisLine = false
                this.BisRight = false
                this.CisActive = true
                this.CisLine = false
                this.CisRight = false
                this.DisActive = true
                this.DisLine = false
                this.DisRight = false
                this.subActive = true
                this.subLine = false
                this.submitFlag = false
                this.rightFlag = false
                this.wrongFlag = false
                this.normalFlag = true
                this.chooseFlag = true
                this.rightFlag1 = false
                this.rightFlag2 = false
                this.rightFlag3 = false
                this.rightFlag4 = false
                this.checkFlag1 = true
                this.checkFlag2 = true
                this.checkFlag3 = true
                this.checkFlag4 = true
                this.chooseIndexA = 99
                this.chooseIndexB = 99
                this.chooseIndexC = 99
                this.chooseIndexD = 99
                this.childcheckFlag1 = true
                this.childcheckFlag2 = true
                this.childcheckFlag3 = true
                this.childcheckFlag4 = true
                this.childcheckFlag1_1 = false
                this.childcheckFlag2_2 = false
                this.childcheckFlag3_3 = false
                this.childcheckFlag4_4 = false
                switch (this.currentIndexA1) {
                    case 4: this.progress2 = true 
                    break;
                    case 8: this.progress3 = true 
                    break;
                    case 12: this.progress4 = true 
                    break;
                    case 16: this.progress5 = true 
                    break;
                    case 20: this.progress6 = true 
                    break;
                    case 24: this.progress7 = true 
                    break;
                    case 28: this.progress8 = true 
                    break;
                    case 32: this.progress9 = true 
                    break;
                    case 36: this.progress10 = true 
                    break;}
            } 
        },
        wrongClick() {
            if(this.wrongFlag) {
                this.currentIndexQ++
                this.currentIndexA1 = this.currentIndexA1 + 4
                this.currentIndexA2 = this.currentIndexA2 + 4
                this.currentIndexA3 = this.currentIndexA3 + 4
                this.currentIndexA4 = this.currentIndexA4 + 4
                this.imgFlag1 = true
                this.imgFlag2 = true
                this.imgFlag3 = true
                this.imgFlag4 = true
                this.AisActive = true
                this.AisLine = false
                this.AisRight = false
                this.AisWrong = false
                this.BisActive = true
                this.BisLine = false
                this.BisRight = false
                this.BisWrong = false
                this.CisActive = true
                this.CisLine = false
                this.CisRight = false
                this.CisWrong = false
                this.DisActive = true
                this.DisLine = false
                this.DisRight = false
                this.DisWrong = false
                this.subActive = true
                this.subLine = false
                this.submitFlag = false
                this.rightFlag = false
                this.wrongFlag = false
                this.normalFlag = true
                this.chooseFlag = true
                this.rightFlag1 = false
                this.rightFlag2 = false
                this.rightFlag3 = false
                this.rightFlag4 = false
                this.checkFlag1 = true
                this.checkFlag2 = true
                this.checkFlag3 = true
                this.checkFlag4 = true
                this.wrongFlag1 = false
                this.wrongFlag2 = false
                this.wrongFlag3 = false
                this.wrongFlag4 = false
                this.chooseIndexA = 99
                this.chooseIndexB = 99
                this.chooseIndexC = 99
                this.chooseIndexD = 99
                this.childcheckFlag1 = true
                this.childcheckFlag2 = true
                this.childcheckFlag3 = true
                this.childcheckFlag4 = true
                this.childcheckFlag1_1 = false
                this.childcheckFlag2_2 = false
                this.childcheckFlag3_3 = false
                this.childcheckFlag4_4 = false
                this.count--
                switch (this.currentIndexA1) {
                    case 4: this.progress2 = true 
                    break;
                    case 8: this.progress3 = true 
                    break;
                    case 12: this.progress4 = true 
                    break;
                    case 16: this.progress5 = true 
                    break;
                    case 20: this.progress6 = true 
                    break;
                    case 24: this.progress7 = true 
                    break;
                    case 28: this.progress8 = true 
                    break;
                    case 32: this.progress9 = true 
                    break;
                    case 36: this.progress10 = true 
                    break;}
            }
        },
        
    },

})