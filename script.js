let deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', function () {
  console.log('delete click');
  let isDelete = confirm('delete me');
  console.log(isDelete);
  if (isDelete) {
    console.log('deleted');
  } else {
    console.log('not delete');
  }
});
let status = 'open';
let color = 'blue';
if (status == 'open') {
  console.log('open door');
  if (color == 'red') {
    console.log('phong ngu');
  } else {
    console.log('phong khach');
  }
} else {
  console.log('close door');
}
// status == close, pending, stop
