    function toggleHidden(div) {
        if (div.className == 'hidden') {
            div.className = 'visible';
        } else {
            div.className = 'hidden';
        }
    }

    function expand(div, button) {
        if (div.className == 'hidden') {
            div.className = 'visible-border';
            button.innerHTML = "Fewer thoughts"
        } else {
            div.className = 'hidden';
            button.innerHTML = "More thoughts"
        }
    }

    // TODO if I ever have more than 2 options this should be totally rewritten
    function toggleHiddenButton(button, div, otherButton, otherDiv) {
      toggleHidden(div);
      toggleHidden(otherDiv);
      if (div.className == 'visible') {
          button.className = 'button';
          otherButton.className = 'button-unselected';
      } else {
        button.className = 'button-unselected';
        otherButton.className = 'button';
      }
    }
