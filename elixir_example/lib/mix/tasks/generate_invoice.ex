defmodule Mix.Tasks.CreatePdf do
  use Mix.Task

  @shortdoc "Creates a fake invoice PDF using WASM and saves it to disk."
  def run(_) do
    File.write!("invoice.pdf", ElixirWasmPdf.generate_invoice())
    IO.puts("Saved as invoice.pdf")
  end
end
