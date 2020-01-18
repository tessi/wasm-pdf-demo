# Browser Demo

This demo is an Elixir application which could be a websites backend.
It offers a mix task which runs the WASM file to create a PDF and save it to disk.

To run the example, make sure you compiled the WASM file first.

Then run:
```
mix create_pdf
```

the file is saved as `invoice.pdf`.

# Documentation

* [Wasmex, an Elixir wrapper of Wasmer](https://github.com/tessi/wasmex)
* [Wasmer, a WASM runtime](https://wasmer.io/)
