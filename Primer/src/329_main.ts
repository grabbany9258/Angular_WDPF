// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// function myFunction(param:any) {
//   if (typeof(param) == "number") {
//   let result = param + 100;
//   console.log("My result: " + result);
//   } else {
//   throw ("Expected a number: " + param)
//   }
//   }

//   myFunction(1);
// myFunction("London");

// function myFunction(param: number|string) {
//   if (typeof(param) == "number" || typeof(param) == "string") {
//   let result = param as any + 100;
//   console.log("My result: " + result);
//   } else {
//   throw ("Expected a number or a string: " + param)
//   }
//   }
//   myFunction(1);
//   myFunction("London");


// 3.20

// function myFunction(param: number | string) {
//   if (typeof(param) == "number" || typeof(param) == "string") {
//   let fixed = param.toFixed(2);
//   console.log("My result: " + fixed);
//   } else {
//   throw ("Expected a number or a string: " + param)
//   }
//   }
//   myFunction(1);
//   myFunction("London");


  // function myFunction(param: number | string) {
  //   if (typeof(param) == "number") {
  //   let numberResult = param.toFixed(2);
  //   console.log("My result: " + numberResult);
  //   } else {
  //   let stringResult = param + 100;
  //   console.log("My result: " + stringResult);
  //   }
  //   }
  //   myFunction(1);
  //   myFunction("London");

  // 26 October 3-29

  let place: string | undefined | null;
  place ="rahim";
console.log(`Place value: ${place} Type: ${typeof(place)}`);
console.log("Place value:" + place +  " Type: " + typeof  (place));
