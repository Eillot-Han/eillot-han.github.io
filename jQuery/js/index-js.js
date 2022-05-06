let addClass = (el,cls)=>{ el.classList.add(cls) }  //增加class名称
let deleteClass = (el,cls)=>{ el.classList.remove(cls) }    //删除class名称
let addClEvt = (el,cb) =>{ el.addEventListener('click',cb) }    //添加class事件响应
let getEle = (e) =>{ return document.querySelectorAll(`${e}`) } //返回元素
let reviseDis = (el,e) =>{ e=="block"?el.style.display = "block":el.style.display = "none" }  //  修改元素display属性
let setBackground = (el,i) =>{ el.style.backgroundImage = "url(img/" + i + ".png)" }    //设置背景图片
let deleteEle = (el) =>{ el.parentNode.removeChild(el) } //删除当前元素
let creatEle = (e) =>{ return document.createElement('' + e + '') }     //创建元素
let addChild = (el1,el2) =>{ el1.appendChild(el2) }     //添加元素
let setNumber = (el) => {   //动态修改序号
    getEle('' + el + '').forEach((item,i)=>{
        item.setAttribute('dataBefore','' + (i+1) + '');
    })
}

//滑动门响应
getEle('.m-menu>li').forEach((item,i)=>{
    addClEvt(item,()=>{ deleteClass(getEle('.m-bd>.sel')[0],'sel');addClass(getEle('.m-bd>div')[i],'sel') });
})

//设置li元素的背景
getEle('.m-bd-demo01>li').forEach((item,i)=>{
    setBackground(item,i);
})

//点击显示相对应的放大图片
getEle('.m-bd-demo01>li').forEach((item,i)=>{
    addClEvt(item,()=>{ reviseDis(getEle('.m-bd-show')[0],'block');setBackground(getEle('.m-bd-show-bg')[0],i) });
})

//点击放大图片消失
getEle('.m-bd-show').forEach((item,i)=>{
    addClEvt(item,()=>{ reviseDis(getEle('.m-bd-show')[0],'none') });
})

//点击delete删除元素
getEle('.m-bd-demo02>li').forEach((item,i)=>{
    addClEvt(item,()=>{ deleteEle(item); setNumber('.m-bd-demo02>li'); });
})

//点击添加元素
getEle('.m-bd-button>button').forEach((item,i)=>{
    addClEvt(item,()=>{
        let NewLi = creatEle('li');
        addClEvt(NewLi,()=>{ deleteEle(NewLi); setNumber('.m-bd-demo02>li');  });
        addChild(getEle('.m-bd-demo02')[0],NewLi);
        setNumber('.m-bd-demo02>li');
    });
})
