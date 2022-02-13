let logs = [], res = [];
    Yao = {7:"ShaoYang", 9:"LaoYang",8:"ShaoYin",6:"LaoYin"},
    Change = {LaoYang:"ShaoYin", LaoYin:"ShaoYang"},
    // 01阴阳
    Gua = {"111111":"乾"  , "000000":"坤"  , "100010":"屯", "010001":"蒙" , "111010":"需"  , "010111":"讼", "010000":"师", "000010":"比",
           "111011":"小畜", "110111":"履"  , "111000":"泰", "000111":"否" , "101111":"同人", "111101":"大有", "001000":"谦", "000100":"豫",
           "100110":"随"  , "011001":"蛊"  , "110000":"临", "000011":"观" , "100101":"噬嗑", "101001":"贲", "000001":"剥", "100000":"复",
           "100111":"无妄", "111001":"大畜", "100001":"颐", "011110":"大过", "010010":"坎"  , "101101":"离", "001110":"咸", "011100":"恒",
           "001111":"遁"  , "111100":"大壮", "000101":"晋", "101000":"明夷", "101011":"家人", "110101":"睽", "001010":"蹇", "010100":"解",
           "110001":"损"  , "100011":"益"  , "111110":"夬", "011111":"姤" , "000110":"萃"  , "011000":"升", "010110":"困", "011010":"井",
           "101110":"革"  , "011101":"鼎"  , "100100":"震", "001001":"艮" , "001011":"渐"  , "110100":"归妹", "101100":"丰", "001101":"旅",
           "011011":"巽"  , "110110":"兑"  , "010011":"涣", "110010":"节" , "001100":"中孚", "110011":"小过", "101010":"即济", "010101":"未济"},
    JIE= {},
    // 返回
    getYinYang = function(num){
        // let res = [];
        // if(num %3 == 0) return [0,1]//todo
        return num % 2;
    },  
    getYao = function(i, num){
        let res = 0, sum = 49, left = num, Mod1, Mod2;
        Mod1 = formatInput(left%4) + 1 + formatInput((sum-left-1)%4);
        sum -= Mod1;
        //请冥思
        left = prompt(i + ". 再-数字范围 0-"+sum)*1;
            logs[logs.length - 1].push(left);
        Mod2 = formatInput(left%4) + 1 + formatInput((sum-left-1)%4);
        sum -= Mod2;
        //请再三冥思
        left = prompt(i + ". 叁-数字范围 0-"+sum)*1;
            logs[logs.length - 1].push(left);
        return parseInt(left/4) + parseInt((sum-left-1)/4);
    },
    formatInput = function(mod){
        return mod == 0? 4: mod;
    },
    getGua = function(arr){
        return Gua[arr.join("")];
    },
    //1 getYao 2 getYY 3 累积阴阳 复挂100000
    main = function(){
        logs.push([]);
        let thisYao = [], thisGua = [];
        for(let i = 1; i < 7; i++){
            let inputRaw = prompt(i + ". 壹-数字范围 0-49");
            logs[logs.length - 1].push(inputRaw*1);
            let y = getYao(i, inputRaw*1);
            thisYao.push(y);
            thisGua.push(y%2);
        }
        let thisRes = "此次卜卦结果，主卦是：" + getGua(thisGua)+". ";
        let changeGua = [];
        for(let i in thisYao){
            changeGua[i] = (thisYao[i] == 6 || thisYao[i] == 9)? (1 - thisGua[i]) :  thisGua[i];
        }
        if(getGua(thisGua) != getGua(changeGua)) thisRes += "变卦为：" + getGua(changeGua);
        else thisRes += "没有变卦"
        res.push({"爻": thisYao.join(""),"卦": thisGua.join(""),"变卦": changeGua.join(""),"输入":logs[logs.length - 1].join(" ")});
        thisRes = "输入为：" + res[res.length - 1]["输入"] + "\n"+ thisRes;
        console.log(res[res.length - 1]);
        console.log(thisRes);
        alert(thisRes);
    };
main();
