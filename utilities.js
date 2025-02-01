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

    function fisherYatesShuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function printShuffledList(arr, ul, document) {
        shuffled = fisherYatesShuffle(arr)
        shuffled.forEach((item)=> {
            li = document.createElement('li')
            li.innerHTML = `<b><a href="${item.url}">${item.title}</a></b> - ${item.text}`
            ul.appendChild(li)

        });
    }
