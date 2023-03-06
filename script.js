// so we will get the value selected and when we press submit we change the page display and return the selected value

const container1 = document.querySelector(".container")
const container2 = document.querySelector(".container2")
const ratings = document.querySelectorAll(".btn")
const submitButton = document.getElementById("submit-button")
const span = document.getElementById("value")


ratings.forEach((rate)=>
{
    rate.addEventListener('click',() =>
    {
        console.log(rate.innerHTML);
        span.innerHTML = rate.innerHTML;

      
    });
});

submitButton.addEventListener('click',() =>
{
    container1.style.display = 'none';
    container2.style.display = 'block';
  
});
