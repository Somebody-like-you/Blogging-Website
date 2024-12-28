document.getElementById('Submit').addEventListener('click',async function (e){
    const formData = new FormData(document.querySelector('form'))
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    const jsonData = JSON.stringify(formObject);
    for(let [key, value] of formData.entries()){
        if(value == ''){
            const p = document.getElementById('User-exists')
            p.textContent = "Enter all the entries"
            return
        }

    }
    const response = await fetch('/signup', {
        method:'POST', headers: {'Content-Type':'application/json'}, body:jsonData, redirect: 'follow'
    })

    const result = await response.json()
    if(result['message']=='User already exists'){
        const p = document.getElementById('User-exists')
        p.textContent = "User already exists"
    }else if(result['message']=='success'){
        const p = document.getElementById('Success')
        p.textContent = "Successfully Signed Up, Redirecting...."
        await new Promise(resolve => setTimeout(resolve, 1000))
        window.location.href = '/hello.html';
    }else{
        console.log(result)
    }
})