defmodule ElixirWasmPdf do
  def generate_invoice do
    path = "../wasm_invoice/target/wasm32-unknown-unknown/debug/wasm_invoice_pdf.wasm"
    {:ok, bytes} = File.read(path)
    {:ok, instance} = Wasmex.Instance.from_bytes(bytes)
    {:ok, memory} = Wasmex.Instance.memory(instance, :uint8, 0)

    pdf_pointer = Wasmex.Instance.call_exported_function(instance, "generate_pdf", [])
    base64_pdf = Wasmex.Memory.read_binary(memory, pdf_pointer)
    Base.decode64!(base64_pdf)
  end
end
