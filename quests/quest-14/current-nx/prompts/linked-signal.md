## Usage with linked signal

The linkedSignal function lets you create a signal to hold some state that is intrinsically linked to some other state. Revisiting the example above, linkedSignal can replace signal:

You can use like this

\`\`\`ts
@Component({/* ... */})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();
  // Initialize selectedOption to the first shipping option.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]);
  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }
}
