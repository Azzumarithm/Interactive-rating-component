let selectedValue

const submitButton = document.querySelector(".rating-submit")

const numberList = document.querySelectorAll(".number")

const ratingContainer = document.querySelector(".rating-container")

const thanksContainer = document.querySelector(".thanks-container")

const descriptionSelection = document.querySelector(".description-selection")


numberList.forEach(
    function(number){
        number.addEventListener("click", function(e){
            
            
            
            
            numberList.forEach(function(number) {
                if (number.classList.contains('selected')){
                    number.classList.remove("selected")
                }

            });
          
           
            if (number.classList.contains('one')){
                selectedValue = number.textContent
                number.classList.add("selected")

                
            }
            else if (number.classList.contains('two')){
                selectedValue = number.textContent
                number.classList.add("selected")

                
                
            }
            else if (number.classList.contains('three')){
                selectedValue = number.textContent
                number.classList.add("selected")

                
            }
            else if (number.classList.contains('four')){
                selectedValue = number.textContent
                number.classList.add("selected")

                
            }
            else if (number.classList.contains('five')){
                selectedValue = number.textContent
                number.classList.add("selected")

                
            }

            console.log(selectedValue)

            
        })

    }
)


submitButton.addEventListener("click", function(e){
    e.preventDefault();


    if (selectedValue !== undefined) {
        
        ratingContainer.style.display = 'none';
        thanksContainer.style.display = 'flex';
        descriptionSelection.textContent = `You selected ${selectedValue} out of 5`;
    }

    
    });


  








