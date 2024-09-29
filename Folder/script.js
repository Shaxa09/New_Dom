function validateForm() {
    let allFilled = true
    const requiredFields = document.querySelectorAll('.required')

    requiredFields.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red'
            allFilled = false
        } else {
            input.style.border = '2px solid #4200ff'
        }
    })

    if (allFilled) {
        alert('Success')
        return true
    }
    
    return false
}   