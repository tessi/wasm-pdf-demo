mod utils;

use printpdf::*;
use std::io::BufWriter;
use std::ffi::CString;

extern crate base64;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[no_mangle]
pub extern "C" fn generate_pdf() -> *const u8 {
  let (doc, page1, layer1) = printpdf::PdfDocument::new("PDF_Document_title", Mm(247.0), Mm(210.0), "Layer 1");
  let font = doc.add_builtin_font(BuiltinFont::TimesBoldItalic).unwrap();
  let current_layer = doc.get_page(page1).get_layer(layer1);
  current_layer.use_text("Hallo Welt", 33, Mm(100.0), Mm(150.0), &font);

  export_pdf(doc).as_ptr()
}

fn export_pdf(doc: printpdf::types::pdf_document::PdfDocumentReference) -> String {
  let mut result = Vec::new();
  doc.save(&mut BufWriter::new(&mut result)).unwrap();
  // we must end the string with a null byte
  base64::encode(&result) + "\0"
}
