const posts=[
    {title:'Post One',body:'This is post One',createdAt:new Date().getSeconds()},
    {title:'Post Two',body:'This is post Two',createdAt:new Date().getSeconds()}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} - created ${(new Date().getSeconds()-post.createdAt)} seconds ago </li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
getPosts();

//created third post.
function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=true;
        if(error){
            resolve();
        }else{
            reject('error: something went wrong');
        }
    },2000);
});
}

//deleting the posts.
function deletePosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastelement=posts.pop()
                resolve(lastelement);
            }else{
                reject('Array is empty now');
            }
        },1000);
    });
}
createPost({title:'Post Three',body:'this is post 3',createdAt:new Date().getSeconds()})
    .then(()=>{
        getPosts()
        deletePosts().then(()=>{
            getPosts();
            deletePosts().then(()=>{
                getPosts();
                deletePosts().then(()=>{
                    getPosts()
                    deletePosts().then(()=>{})
                    .catch((err)=>{
                        console.log(err)
                })
                })
            })
            })
        })
    
//creating 4th post
function create4thpost(post){
        setTimeout(()=>{
            posts.push=({...post,createdAt:new Date().getSeconds()});
        },3000);
    }

//deleting 4th post
function delete4thPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=true;
            const element=post.pop(3);
            if(error){
                resolve(element);
            }else{
                reject();
            }
        },1000);
    });
}
create4thpost({title:'Post four',body:'This is post 4',createdAt:new Date().getSeconds()})