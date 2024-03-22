var dropdownIsDisplayed = false;
function ToggleDropdown()
{
    const Dropdown = document.getElementById("projects-dropdown-list");
    function ToggleDropdownInner()
    {
        dropdownIsDisplayed = !dropdownIsDisplayed
        return dropdownIsDisplayed;
    }
    function SetDropdownDisplay(toBeVisible)
    {
        Dropdown.style.display = toBeVisible? "block": "none";
    }
    SetDropdownDisplay(ToggleDropdownInner());
}

function Gamble()
{
    const e = Math.random();
    console.log(e);
    if( e > 0.5 )
    {
        window.location.replace("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjNjaf82IeFAxU7UUEAHZH3DEsQwqsBegQIEBAG&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU&opi=89978449");
    }
    else
    {
        alert("Safe...for now");
    }
}