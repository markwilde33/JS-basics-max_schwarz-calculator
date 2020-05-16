const task3Element = document.getElementById('task-3');

function noParam() {
  alert('Hi there');
}

function userName(name) {
  alert(`Hi there ${name}`);
}

// noParam();
userName('Clarice');

task3Element.addEventListener('click', noParam);

function someStrings(str1, str2, str3) {
  const addStrings = `${str1} ${str2} ${str3}`;
  return addStrings;
}

const result = someStrings('I ', 'love ', 'animals');
alert(result);
