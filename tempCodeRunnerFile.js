var input = '57254:4444444444444';

if (input.includes('-')) {
  let t = input.split('-');
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (element.length !== 5) {
      console.log('no');
      return;
    }
  }
  input = input.replaceAll('-', '');
} else if (input.includes(':')) {
  let t = input.split(':');
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (element.length !== 5) {
      console.log('no');
      return;
    }
  }
  input = input.replaceAll(':', '');
} else if (input.includes('/')) {
  let t = input.split('/');
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (element.length !== 5) {
      console.log('no');
      return;
    }
  }
  input = input.replaceAll('/', '');
} else {
  console.log('no');
  return;
}

if (input.length !== 15) {
  console.log('no');
  return;
}

if (!/^\d+$/.test(input)) {
  console.log('no');
  return;
}

if (
  input.charAt(0) === '4' ||
  input.charAt(0) === '5' ||
  (input.charAt(0) === '3' && input.charAt(1) === '7')
) {
  console.log('yes');
} else {
  console.log('no');
}
