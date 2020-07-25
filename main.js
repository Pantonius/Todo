let list = document.getElementById('list');
var add = document.getElementById('add');

add.addEventListener('click', () => {
  var item = document.createElement('div');
  item.classList.add('item');
  
  var cb = document.createElement('button');
  cb.classList.add('material-icons');
  cb.classList.add('choicebox');
  cb.innerText = 'check_box_outline_blank';
  cb.style.color = '#fff';

  var et = document.createElement('p');
  et.classList.add('text');
  et.innerText = document.getElementById('input').value;
  et.addEventListener('input', () => {
    autogrow(et);
  });

  cb.addEventListener('click', () => {
    switchCbIcon(cb, et);
  });

  item.appendChild(cb);
  item.appendChild(et);

  list.appendChild(item);

  document.getElementById('input').value = '';
});

var del = document.getElementById('delete');
del.addEventListener('click', () => {
  var deleted = new Array();
  for(let i = 0; i < list.children.length; i++) {
    var cb = list.children[i].children[0];
    if(cb.innerText === 'check_box') deleted.push(list.children[i]);
  }

  deleted.forEach(item => {
    list.removeChild(item);
  });
});

function switchCbIcon(cb, et) {
  if(cb.innerText === 'check_box') {
    cb.innerText = 'check_box_outline_blank';
    cb.style.color = '#fff';

    et.style.textDecoration = 'none';
  } else {
    cb.innerText = 'check_box';
    cb.style.color = '#FF00AA';

    et.style.textDecoration = 'line-through';
  }
}

function autogrow(et) {
  et.style.height ='5px';
  et.style.height = (et.scrollHeight) + 'px';
}