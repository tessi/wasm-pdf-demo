function setup() {
  document.getElementById('downloadButton').addEventListener('click', () => { generateInvoice() })
}

function generateInvoice() {
  WebAssembly.instantiateStreaming(fetch('wasm_invoice_pdf.wasm'), {}).then(wasm => {
    let pointer = wasm.instance.exports.generate_pdf();
    let memory = wasm.instance.exports.memory;
    let pdf = readString(memory, pointer);
    if (pdf) {
      download(document, 'invoice.pdf', 'application/pdf', atob(pdf));
    }
  });
}

function readString(memory, pointer) {
  let bytes = new Uint8Array(memory.buffer, pointer)
  let endOfString = bytes.indexOf(0);
  if (endOfString > 0) {
    let bytestring = bytes.slice(0, endOfString);
    return new TextDecoder().decode(bytestring);
  }
}

function download(document, filename, mimeType, text) {
  var anchor = document.createElement('a');
  anchor.setAttribute('href', `data:${mimeType};charset=utf-8,` + encodeURIComponent(text));
  anchor.setAttribute('download', filename);
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

setup();