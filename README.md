# WASM PDF Demo

This is a demo of WASM and how it integrates into different environments.
We take invoice generation as an example.
The idea is to have a WASM program which can generate (fake) invoice PDF files which is then used by different clients:

* A web browser uses the WASM PDF generator to create and download PDF files without the need for a backend
* An Elixir application uses the same WASM PDF generator to create a (fake) invoice and save it to disk

This repository contains of multiple parts, each in its own directory:

* [`wasm_invoice`](./wasm_invoice/README.md) - The invoice generation code implemented in Rust
* [`browser_example](./browser_example/README.md)` - An HTML page which generates the invoice and offers it as a download
* [`elixir_example`](./elixir_example/README.md) -  A fake Elixir backend which generates an invoice and saves it to disk

Each directory has it's own `README`. Please refer to those for details on the subprojects.

## Running the demos

To be able to run the demos, the WASM file needs to be compiled first.
Please refer to the [`wasm_invoice` README](./wasm_invoice/README.md) on how to do this.
When the WASM file was compiled, feel free to run any of the other demos - again, refer to their respective `README` files for details.

## License

The entire project is under the MIT License. Please read [the
`LICENSE` file][license].

[license]: https://github.com/tessi/wasm-invoice-pdf/blob/master/LICENSE

## Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you shall be licensed as above,
without any additional terms or conditions.
