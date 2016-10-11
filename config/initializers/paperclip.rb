# Allow ".bvh" as an extension for files with the MIME type "text/plain".
Paperclip.options[:content_type_mappings] = {
  bvh: %w(text/plain)
}
