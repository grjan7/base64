# base64 library

## base64.encode(plainStr)

```js

  import Base64 from 'base64';

  const myObj = {name: "john", age: 30};
  const myObjString = JSON.stringify(myObj);
  const base64EncodedString = Base64.encode(myObjString);

  console.log(base64EncodedString);

  ```

## base64.decode(base64Str)

```js

  import Base64 from 'base64';

  const myObj = {name: "john", age: 30};
  const myObjString = JSON.stringify(myObj);
  const base64EncodedString = Base64.encode(myObjString);

  const decodedBase64String = Base64.decode(base64EncodedMyObj);
  
  console.log(JSON.parse(decodedBase64String));

  ```