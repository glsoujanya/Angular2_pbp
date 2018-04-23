I watched a course very recently on PluralSight which is Play by Play Angular tutorial by John Papa and Ward Bell. The course focused on teaching Angular2 which was pretty new then. At the time I watched the course, Angular 2 was updated to Angular 4. Hence, there were few issues which I faced while coding side by side. I would like to share the issue and the resolution so that it becomes easier for someone who works with Angular 4. 

1) My very first issue was when npm packages failed to install when I ran 'npm install' from cmd. 
Resolution - Deleted $AppData/Local/Temp/npm-* 
Basically, I deleted all the folders within temp directory that had an "npm-" prefix in their names.

2) Can't bind to 'ngmodel' since it isn't a known property of 'input' angular 2 
Resolution - Imported FormsModule from @angular/forms and configured ngModel to import FormsModule in the imports section.

3) for loop syntax change in html file - "#x of list" is replaced by "let x of list".

4) Cannot find start/module.js error. 
Resolution - Run "- rm -rf ./node_modules" (replaced rm by del since I am on Windows OS). Then did an "npm install" and "npm start". Not sure why this issue occurred. By removing node_modules folder and installing packages again, it worked.

5) HTTP_Providers deprecated - replaced by HTTPModules.

6) Error => Argument of type '(response: Response) => void' is not assignable to parameter of type '(value: Response) => void'.
Types of parameters 'response' and 'value' are incompatible.
Type 'Response' is not assignable to type 'Response'. Two different types with this name exist, but they are unrelated.
Property 'body' is missing in type 'Response'.
Resolution - Import Response from angular/http in the service page. It's similar to importing relevant namespace in C# in case classes have same name and results in a conflict when the exact namespace is not specified.

For fake API testing, I found this on the Internet - https://jsonplaceholder.typ... - Fake Online REST API for Testing and Prototyping

- This branch is different from main branch as it introduces the following Angular concepts : 

1) Angular services 
2) Angular HTTP modules
3) Interpolation and two-way binding
4) Templates and template URLs
5) Modularize code by creating compnents 
6) Observables/Promises

Thanks. 
