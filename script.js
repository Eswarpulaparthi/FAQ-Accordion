const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const ans1 = document.querySelector('.ans1');
const ans2 = document.querySelector('.ans2');
const ans3 = document.querySelector('.ans3');
const ans4 = document.querySelector('.ans4');
let ans;

a1.addEventListener('click',()=>{
    ans1.textContent ="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
    ans2.textContent ="";
    ans3.textContent ="";
    ans4.textContent ="";
})
a1.addEventListener('dblclick',()=>{
    ans1.textContent ="";
})
a2.addEventListener('click',()=>{
    ans2.textContent ="No more than 2GB. All files in your account must fit your allotted storage space.";
    ans1.textContent ="";
    ans3.textContent ="";
    ans4.textContent ="";
})
a2.addEventListener('dblclick',()=>{
    ans2.textContent ="";
})
a3.addEventListener('click',()=>{
    ans3.textContent ="Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.";
    ans1.textContent ="";
    ans2.textContent ="";
    ans4.textContent ="";
})
a3.addEventListener('dblclick',()=>{
    ans3.textContent ="";
})

a4.addEventListener('click',()=>{
    ans4.textContent="Yes! Send us a message and we’ll process your request no questions asked.";
    ans1.textContent ="";
    ans2.textContent ="";
    ans3.textContent ="";
    answer(1,2,3);
})
a4.addEventListener('dblclick',()=>{
    ans4.textContent ="";
})
