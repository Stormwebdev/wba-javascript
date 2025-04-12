let a = +prompt('a?');

switch (a) {
  case 0:
    alert(0);
    break;
  case 5:
    alert(5);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
    default:
      alert("xato")
}


if (browser === 'Edge') {
    alert("You've got the Edge!");
  } else if (
    browser === 'Chrome' ||
    browser === 'Firefox' ||
    browser === 'Safari' ||
    browser === 'Opera'
  ) {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  }

  let message = (login == 'Employee') ? 'Sallom' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
