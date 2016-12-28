# ng2-template-loader
A webpack loader for escaping text to display as-is for Angular 2 template strings.

## Sample Usage
```
@Component({
  selector: 'my-component',
  template: `${require(ng2-template-loader!raw-loader!./my.component.ts)}`
})
export class MyComponent {
}
```
