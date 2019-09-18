function person(value) {
    switch (typeof value) {
        case 'string':
            return "My name is " + value;
            break;
        case 'number':
            return 'My age is ' + value;
            break;
        case 'boolean':
            return value ? 'I am married' : 'not yet married';
            break;
    }
}
console.log(person('Krish'));
console.log(person(30));
console.log(person(true));
