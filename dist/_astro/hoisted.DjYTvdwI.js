import"./hoisted.Oozc_hRb.js";const o=document.getElementById("job-form"),a=document.getElementById("job-first-name"),m=document.getElementById("job-last-name"),i=document.getElementById("job-email"),l=document.getElementById("job-qualifications"),c=document.getElementById("job-subject"),d=document.getElementById("job-message"),n=document.getElementById("lkj-submit-btn");o.addEventListener("submit",async s=>{s.preventDefault(),n.disabled=!0;try{const e=await fetch("https://emails-forwarding.onrender.com/dts",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({form:"Looking for Job",subject:c.value,firstName:a.value,lastName:m.value,email:i.value,qualifications:l.value,message:d.value})}),t=await e.json();e.ok||t?.message?alert(t?.message):alert("Form could not be submitted. Something went wrong")}catch{alert("Form could not be submitted. Something went wrong")}n.disabled=!1,o.reset()});
