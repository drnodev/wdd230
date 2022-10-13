
const item = document.querySelector('#favchap');
const lst = document.querySelector('.list');
const btn = document.querySelector('#submit');

btn.addEventListener('click', () => {
  if (item.value !== ''){
    let li = document.createElement('li');
    li.innerHTML = item.value

    let del = document.createElement('button');
    del.innerHTML = '\u274c';

    del.addEventListener('click', (e) => {
        let element = e.target.parentNode
        lst.removeChild(element)
    })
    
    li.append(del)
    lst.append(li);
    item.value = ''
    item.focus()
    }
  }

);