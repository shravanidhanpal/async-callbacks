const promise1=Promise.resolve('hello world');
const promise2=10;
const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'goodbye'));
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));


function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let time=new Date().getTime();
            if(true){
                resolve(time);
            }else{
                reject('error');
            }
        },1000)
    });
}

const user={
    name:'shravani',
    lastactivity:new Date().getTime()
}

let updatelastactivitytime=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivity=new Date().getTime();
            resolve(user.lastactivity);
        },1000)
    })
}

function userupdatepost(){
    Promise.all([createpost(),updatelastactivitytime()])
    .then(([createpostresolves,updatelastactivitytimeresolves])=>{
        console.log(createpost(),updatelastactivitytime())
    })
    .catch(err=>console.log(err))
}

function deletePosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastelement=posts.pop()
                resolve(lastelement);
            }else{
                reject();
            }
        },1000);
    });
}


Promise.all([createpost({title:'post three',body:'this is post 3'}),updatelastactivitytime()])
.then(([createpostresolves,updatelastactivitytimeresolves])=>{
    console.log(updatelastactivitytimeresolves);
})
.catch(err=>console.log(err));
