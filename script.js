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
