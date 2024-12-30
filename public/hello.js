document.getElementById('menu-button').addEventListener('click', async ()=>{
    if(document.getElementById('slide').style.right=='0px'){
        document.getElementById('slide').style.right = '-20vw'

    }else{
        document.getElementById('slide').style.right = '0'


    }
})


document.getElementById('create-post-button').onclick = ()=>{
    document.querySelector('.blur').style.filter =  'blur(5px)'
    document.getElementById('slide').style.filter = 'blur(5px)';
    document.getElementById('create-post').style.display = 'block'
}
document.getElementById('user-name').innerText = window.location.href.split('/')[4] +'!'